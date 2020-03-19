import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectModelTitle, 
  makeSelectNewItemName,
  makeSelectItemId, 
  makeSelectEditedItemName, 
  makeSelectCurrentpage } from './selectors';
import { getModelItems, updateItemInfo, addNewItem, getModelItemsById} from '../Api';
import { loadModelItems, updateSuccess, updateFailed, addSuccess, addFailed, loadAllStoredModelItems } from './actions';
import { GET_MODELITEMS, 
  SAVE_EDITEDITEM, 
  GET_CURRENTPAGE, 
  HANDLE_PAGE, 
  HANDLE_FIRST_LASTPAGE,
  UPDATE_SUCCESS,
  SAVE_NEWMODELITEM,
  ADD_SUCCESS } from './constants';


export function* getModelItemsList() {
  try{
    const token = localStorage.getItem('token')
    const modelTitle = yield select(makeSelectModelTitle());
    const currentPage = yield select(makeSelectCurrentpage());
    const categoriesItems = yield call(getModelItems, modelTitle, currentPage,token);
    yield put(loadModelItems(categoriesItems.data.list, categoriesItems.data.list, categoriesItems.data.totalPage, ));
  }catch(error){
    console.log(error)
  }
}
export function* saveNewModelItem(){
  try{
    const token = localStorage.getItem('token')
    const modelTitle = yield select(makeSelectModelTitle())
    const newItem = { 'name': yield select(makeSelectNewItemName())}
    console.log(newItem)
    const response = yield call(addNewItem, modelTitle, newItem, token)
    yield put(addSuccess(response.data.success));
    console.log(response)
  }catch(error){
    yield put(addFailed(error.response.data.success, error.response.data.errorMessages))
    console.log(error.response)
  }
}
export function* updateCategoryItem() {
  try {
    const token = localStorage.getItem('token')
    const modelTitle = yield select(makeSelectModelTitle());
    const editedItemName = yield select(makeSelectEditedItemName());
    const itemId = yield select(makeSelectItemId());
    const editedItem = {'id': itemId,
                        'size': editedItemName}
    console.log(editedItem)
    const response = yield call(updateItemInfo, modelTitle, itemId, editedItem, token)
    yield put(updateSuccess(response.data.success));
  }catch(error){
    yield put(updateFailed(error.response.data.success, error.response.data.errorMessages))
  }
}
export function* getAllModelItems () {
  try{
    const token = localStorage.getItem('token')
    const modelTitle = yield select(makeSelectModelTitle());
    const modelList = yield call(getModelItemsById, modelTitle, token);
    yield put(loadAllStoredModelItems(modelList.data.list));
    console.log(modelList.data.list)   
  }catch(error){
    console.log(error.response)
  }
}
export default function* assetHardDiskSaga() {
  yield takeLatest(GET_MODELITEMS, getModelItemsList);
  yield takeLatest(GET_MODELITEMS, getAllModelItems);
  yield takeLatest(SAVE_NEWMODELITEM, saveNewModelItem);
  yield takeLatest(ADD_SUCCESS, getModelItemsList);
  yield takeLatest(SAVE_EDITEDITEM, updateCategoryItem);
  yield takeLatest(UPDATE_SUCCESS, getModelItemsList);
  yield takeLatest(GET_CURRENTPAGE, getModelItemsList);
  yield takeLatest(HANDLE_PAGE, getModelItemsList );
  yield takeLatest(HANDLE_FIRST_LASTPAGE, getModelItemsList);
}
