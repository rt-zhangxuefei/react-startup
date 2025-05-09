import axios from 'axios';

import { reduxStore } from '@/index';

let retryCount = 0;
const MAX_RETRY_COUNT = 2;

const request = axios.create();

export function waitForTokenUpdate(oldToken) {
  return new Promise((resolve) => {
    const unsubscribe = reduxStore.subscribe(() => {
      const newToken = reduxStore.getState().base.baseInfo.user_token;
      if (newToken && newToken !== oldToken) {
        unsubscribe();
        resolve(newToken);
      }
    });
  });
}

request.interceptors.response.use(
  (response) => {
    retryCount = 0;
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      const config = error.config;
      const url = config.url;

      if (retryCount >= MAX_RETRY_COUNT) {
        console.log(`请求${url}: 已重试${MAX_RETRY_COUNT}次获取token，放弃重试`);
        retryCount = 0;
        return Promise.reject(new Error('Token获取失败次数过多'));
      }

      console.log(`请求${url}:401,重新获取token，第${retryCount + 1}次尝试`);

      try {
        // 记录旧 token
        const oldToken = config.headers['TOKEN'];
        // 重新获取token

        // 等待 token 更新
        const newToken = await waitForTokenUpdate(oldToken);

        if (newToken) {
          // 更新headers中的token
          config.headers['TOKEN'] = newToken;
          // 增加重试计数
          retryCount++;
          // 重新发起请求
          return request(config);
        } else {
          retryCount = 0;
          return Promise.reject(new Error('Token刷新失败:获取到的新token为空'));
        }
      } catch (refreshError) {
        console.error('刷新token失败:', refreshError);
        retryCount = 0;
        return Promise.reject(refreshError);
      }
    }

    retryCount = 0;
    return Promise.reject(error);
  }
);

request.interceptors.request.use((config) => {
  try {
    config.headers['TOKEN'] = '';
  } catch (error) {
    console.log(error.message);
  }

  return config;
});

export default request;
