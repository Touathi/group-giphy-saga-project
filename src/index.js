import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';


//Reducer

const getGiffy = (state = [], action) => {
   switch(action.type)  {
    case 'GET_GIFFY':
      return action.payload;
        default:
            return state;
   }
}



const sagaMiddleware = createSagaMiddleware();


function* rootSaga() {
  yield takeLatest('GET_FAV_PIC', getFavPic)

}

// favPic Reducer
const favPic = (state = [], action) => {
  switch (action.type) {
      case 'SET_FAV_PIC':
          return action.payload;
      default:
          return state;
  }
}


function* getFavPic() {
try {
    const favPicResponse = yield axios.get('api/favorite')
    yield put ( {type:'SET_FAV_PIC', payload: favPicResponse.data})
  }
  catch( err ) {
    console.log(`Error in getting fav pic`);
  }
}






























const store = createStore(
    combineReducers({
      favPic
    }),
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
