import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';


// getGiify Reducer

const getGiffy = (state = [], action) => {
   switch(action.type)  {
    case 'SET_GIFFY':
      return action.payload;
        default:
            return state;
   }
}



const sagaMiddleware = createSagaMiddleware();


function* rootSaga() {
  yield takeLatest('GET_FAV_PIC', getFavPic)
  yield takeLatest('PUT_CATEGORY', putCategory)

  yield takeLatest('GET_GIFFY',getPic )

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

// Get FAV PIC
function* getFavPic() {
try {
    const favPicResponse = yield axios.get('api/favorite')
    yield put ( {type:'SET_FAV_PIC', payload: favPicResponse.data})
  }
  catch( err ) {
    console.log(`Error in getting fav pic`);
  }
}


function* getPic () {
    try{
        const getPicResponse = yield axios.get('/api/search')
        yield put ({ type:'SET_GIFFY', payload:getPicResponse.data})
    }
    catch(error) {
        console.log('error getting giffy', error);
    }
}

function* putCategory(action) {
  try {
    yield axios.put(`/api/favorite/${action.payload.id}`, action.payload )
    yield put ( { type: 'GET_FAV_PIC' } )
  }
  catch(error) {
  }
  console.log(action.payload);
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
