import axios from 'axios';

const TOKEN_HEADER = 'X-TOKEN';

const instance = axios.create({
  headers: { TOKEN_HEADER: window.localStorage.getItem(TOKEN_HEADER) },
});

instance.setToken = token => {
  instance.defaults.headers[TOKEN_HEADER] = token;
  window.localStorage.setItem(TOKEN_HEADER, token);
};

let isRefreshing = false;
// token 过期时的请求队列
let requestQueue = [];

let retryTokenTimes = 0;

async function getToken() {
  const response = await axios.get('token_url');
  return response.data;
}

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      const { config } = error.response;
      // token 过期
      if (!isRefreshing && retryTokenTimes < 4) {
        isRefreshing = true;
        return getToken()
          .then(res => {
            const { data, code } = res;
            if (code === 0) {
              // 获取 token 成功
              retryTokenTimes = 0;
              instance.setToken(data);
              config.headers[TOKEN_HEADER] = data;
              // token 更新 执行过期请求队列
              requestQueue.forEach(cb => cb(data));
              requestQueue = [];
            } else {
              retryTokenTimes += 1;
            }
            return instance(config);
          })
          .catch(err => {
            retryTokenTimes += 1;
            console.log(`getToken catch error ${err.message}`);
          })
          .finally(() => {
            isRefreshing = false;
          });
      }

      if (retryTokenTimes < 4) {
        return new Promise(resolve => {
          requestQueue.push(token => {
            config.headers[TOKEN_HEADER] = token;
            resolve(instance(config));
          });
        });
      }
      return Promise.reject(
        new Error(`still get token failed after retry 3 times ! fatal error=${error.message} `),
      );
    }
    return Promise.reject(error);
  },
);

export default instance;
