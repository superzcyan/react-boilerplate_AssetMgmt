import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import {makeSelectModelTitle, makeSelectNewUserFullName, makeSelectNewUserUsername, makeSelectNewUserPassword, makeSelectNewuserConfirmPassword, makeSelectPasswordMatched } from './selectors';
import { addNewItem } from '../Api';
import { SAVE_NEWUSER, GET_NEWUSERCONFIRMPASSWORD, REGISTRATION_SUCCESS } from './constants';
import { registrationFailed, registrationSuccess } from './actions';
import { getUserItems } from '../AssetUsers/saga';
// Individual exports for testing
export function* addNewUser() {
  try{
    const token = localStorage.getItem('token')
    const modelTitle = yield select(makeSelectModelTitle())
    const password = yield select(makeSelectNewUserPassword())
    const newUserItem = { 'fullName': yield select(makeSelectNewUserFullName()),
                      'userName': yield select(makeSelectNewUserUsername()),
                      'password': password,}
    const passwordMatched = yield select(makeSelectPasswordMatched());
    if(passwordMatched){
      const responseMessage = yield call(addNewItem, modelTitle, newUserItem, token)
      yield put(registrationSuccess(responseMessage.data.success))
      console.log(responseMessage.data.success)
    }
  }catch(error){
   yield put(registrationFailed(error.response.data.errorMessages))
   console.log(error.response.data.errorMessages)
  }
}
export default function* assetUsersAddNewSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SAVE_NEWUSER, addNewUser)
  yield takeLatest(SAVE_NEWUSER, getUserItems)
  yield takeLatest(REGISTRATION_SUCCESS, getUserItems)
}
