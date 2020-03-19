import { getModelItems, updateItemInfo } from "../Api"
import { loadUserItems, editUserSuccess, editUserFailed, getErrorMessage } from "./actions"
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_USERITEMS,
  GET_CURRENTPAGE, 
  HANDLE_PAGE, 
  HANDLE_FIRST_LASTPAGE, 
  SAVE_EDITEDUSER,
  EDITUSER_SUCCESSS} from "./constants";
import { makeSelectModelTitle,
  makeSelectCurrentpage, 
  makeSelectUserId,
  makeSelectUsername,
  makeSelectFullName,
  makeSelectPassword,
  makeSelectConfirmPasswod,
  makeSelectPasswordMatched} from "./selectors";

export function* getUserItems() {
  try{
    const token = localStorage.getItem('token')
    const modelTitle = yield select(makeSelectModelTitle())
    const currentPage = yield select(makeSelectCurrentpage());
    const userItems = yield call(getModelItems, modelTitle, currentPage, token)
    yield put(loadUserItems(userItems.data.list, userItems.data.totalPage))
    console.log(userItems.data.list)
  }catch(error){
    console.log(error)
  }
}
export function* updateUser() {
  try {
    const token = localStorage.getItem('token')
    const modelTitle = yield select(makeSelectModelTitle());
    const userId = yield select(makeSelectUserId());
    const userName = yield select(makeSelectUsername());
    const fullName = yield select(makeSelectFullName());
    const password = yield select(makeSelectPassword());
    const confirmPassword = yield select(makeSelectConfirmPasswod());
    const passwordMatched = yield select(makeSelectPasswordMatched())
    console.log(passwordMatched)
    const editedUser = {'id': userId,
                        'userName': userName,
                        'fullName': fullName,
                        'password': password}
    console.log(editedUser)
    if(passwordMatched){
      const successResponse = yield call(updateItemInfo, modelTitle, userId, editedUser, token)
      yield put(editUserSuccess(successResponse.data.success))
      console.log(successResponse)
    }        
  }catch(error){
    yield put(editUserFailed(error.response.data.success))
    yield put(getErrorMessage(error.response.data.errorMessages))
    console.log(error.response.data)
  }
}

// Individual exports for testing
export default function* assetUsersSaga() {
  yield takeLatest(GET_USERITEMS, getUserItems);
  yield takeLatest(SAVE_EDITEDUSER, updateUser);
  yield takeLatest(EDITUSER_SUCCESSS, getUserItems);
  yield takeLatest(GET_CURRENTPAGE, getUserItems);
  yield takeLatest(HANDLE_PAGE, getUserItems );
  yield takeLatest(HANDLE_FIRST_LASTPAGE, getUserItems);
}
