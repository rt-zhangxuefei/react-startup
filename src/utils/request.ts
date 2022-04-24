import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response);
  },
);

instance.interceptors.request.use((config) => {
  try {
  } catch (err) {
    console.error(err);
  }

  return config;
});

export default instance;
