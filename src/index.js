import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {




}



































const store = createStore(
    combineReducers({}),
    applyMiddleware(sagaMiddleware, logger),
);


sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
);
