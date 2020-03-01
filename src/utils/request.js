// 封装 axios 刷新 token ，代码仅供参考

import axios from 'axios';

const TOKEN_HEADER = 'X-TOKEN';

const instance = axios.create({
  headers: { [TOKEN_HEADER]: window.localStorage.getItem(TOKEN_HEADER) || '' },
});

instance.setToken = token => {
  instance.defaults.headers[TOKEN_HEADER] = token;
  window.localStorage.setItem(TOKEN_HEADER, token);
};

let isRefreshing = false;
// token 过期时的请求队列
let requestQueue = [];
// 重试次数
let retryTokenTimes = 0;

// 模拟异步或同步获取 getToken
async function getToken() {
  const response = await 'token';
  return response;
}

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      const { config } = error.response;
      // token 过期
      if (!isRefreshing && retryTokenTimes < 3) {
        isRefreshing = true;
        return getToken()
          .then(res => {
            isRefreshing = false;
            // 获取 token 成功
            retryTokenTimes = 0;
            instance.setToken(res);
            config.headers[TOKEN_HEADER] = res;
            // token 更新 执行过期请求队列
            requestQueue.forEach(cb => cb(res));
            requestQueue = [];
            return instance(config);
          })
          .catch(err => {
            isRefreshing = false;
            retryTokenTimes += 1;
            console.log(`getToken catch error ${err.message}`);
          });
      }
      if (isRefreshing && retryTokenTimes < 3) {
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
