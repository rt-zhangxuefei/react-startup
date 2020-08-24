import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
// Date 组件locale
// import 'moment/locale/zh-cn';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.less';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
