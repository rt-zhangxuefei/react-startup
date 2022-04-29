import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.less';
import * as serviceWorker from './serviceWorker';
import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root'),
);

// ReactDOM.render(
//   <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//   </Provider>,
//   document.getElementById('root'),
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
