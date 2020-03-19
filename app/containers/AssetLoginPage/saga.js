import { call, put, select, takeLatest } from 'redux-saga/effects';
import { authenthicateUserApiRequest } from '../Api'
import { authenticationSuccess, authenticationError, } from './actions'
import { AUTHENTICATION_REQUEST } from './constants';
import { makeSelectUsername, makeSelectPassword, makeSelectIsAuthorized } from './selectors';

export function* authenticateUserLogin (){   
  try{
    const isAuthorized = yield select(makeSelectIsAuthorized());
    console.log(isAuthorized)
    const userName = yield select(makeSelectUsername());
    const password = yield select(makeSelectPassword()); 
    const userData = yield call(authenthicateUserApiRequest, userName, password);
    console.log(userData.data)
    yield put(authenticationSuccess(
      userData.data.id, 
      userData.data.userName, 
      userData.data.fullName, 
      userData.data.token, 
      localStorage.setItem('fullName', userData.data.fullName),
      localStorage.setItem('token', userData.data.token),
        )
      );
    console.log(localStorage.getItem('token'))
  }catch(error){
    yield put(authenticationError(error.response.statusText));   
  }  
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(AUTHENTICATION_REQUEST, authenticateUserLogin);
}
