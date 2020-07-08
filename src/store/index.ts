import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  let store = null;
  if (process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  } else {
    store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  }
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
