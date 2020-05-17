import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/Component/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react-redux';
import { mainReducer } from './Utils/MainReducer/mainReducer';
import OCRWatcher from './OCR/Saga/ocrSaga';
import './Design/index';
import historyWatcher from './History/Saga/historySaga';

const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(mainReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(OCRWatcher);
sagaMiddleWare.run(historyWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
