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
  yield takeLatest('GET_FAV_PIC', getFavPic)
  yield takeLatest('PUT_CATEGORY', putCategory)

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

// favPic category Reducer
const favPicCategory = (state = [], action) => {
  if ( action.type === 'SET_CATEGORY') {
    return action.payload
  }
  return state;
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
      favPic,
      favPicCategory
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
