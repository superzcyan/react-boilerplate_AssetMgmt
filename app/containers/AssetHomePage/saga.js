import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { getModelItems, getAllModelItems, updateItemInfo , addNewItem, getAssetItem, getModelItemsById} from '../Api';
import {  GET_ALLITEMS, 
  GET_ASSETITEMS, 
  SAVE_UPDATEDASSETITEM, 
  SAVE_NEWASSETITEM, 
  GET_CURRENTPAGE, 
  HANDLE_PAGE, 
  HANDLE_FIRST_LASTPAGE, 
  HIDE_ASSETINFOMODAL,
  UPDATE_SUCCESS,
  GET_ASSETKEYWORD,
  GET_ORDERTYPE,
  GET_ORDERBY,
  GET_ASSETID,
  GET_ALLMODELITEMS,
  ADD_ASSETSUCCESS} from './constants';
import { loadAllItems, loadAssetItems, getTotalPages, updateSuccess, updateFailed, loadStoredItems, addNewFailed, addNewSuccess } from './actions';
import { makeSelectModelTitle, 
  makeSelectAssetItemId, 
  makeSelectSupplierId, 
  makeSelectProcessorId, 
  makeSelectModelId, 
  makeSelectMemorylId, 
  makeSelectHardDiskId, 
  makeSelectManufacturerId, 
  makeSelectCategoryId, 
  makeSelectSerialNo,
  makeSelectAssetTag, 
  makeSelectAdapter, 
  makeSelectName, 
  makeSelectAssignedTo, 
  makeSelectDeliveryDate, 
  makeSelectPONo, 
  makeSelectDRNo, 
  makeSelectSINo, 
  makeSelectMacAdd, 
  makeSelectIpAdd, 
  makeSelectPurchaseDate, 
  makeSelectPurchaseCost, 
  makeSelectWarranty, 
  makeSelectNotes, 
  makeSelectVideoCardId, 
  makeSelectStatus,
  makeSelectCurrentpage,
  makeSelectAssetKeyword,
  makeSelectAssetId,
  makeSelectOrderBy,
  makeSelectOrderType} from './selectors';

export function* getAllItemList () {
  try{
    const token = localStorage.getItem('token')
    const allList = yield call(getAllModelItems,token);
    yield put(loadAllItems(allList));
    console.log("All Items:")
    console.log(allList)
  }catch(error){
    console.log(error)
  }
}
export function* getAssetItemList () {
  try{
    const token = localStorage.getItem('token')
    const currentPage = yield select(makeSelectCurrentpage());
    const assetKeyword = yield select(makeSelectAssetKeyword());
    const orderBy = yield select(makeSelectOrderBy());
    const orderType = yield select(makeSelectOrderType());
    const assetList = yield call(getAssetItem, orderBy, orderType, assetKeyword, currentPage, token);    
    yield put(loadAssetItems(assetList.data.list, assetList.data.list, assetList.data.totalPage));    
    console.log(assetList.data)
  }catch(error){
    console.log(error.response.data)
  }
}
export function* getAssetItemListById () {
  try{
    const token = localStorage.getItem('token')
    const modelTitle = yield select(makeSelectModelTitle());
    const assetList = yield call(getModelItemsById, modelTitle, token);
    yield put(loadStoredItems(assetList.data.list));
    console.log(assetList.data.list)   
  }catch(error){
    console.log(error.response)
  }
}
export function* saveNewAsset() {  
  try {    
  const newAssetItem = {
  'supplierId' : yield select(makeSelectSupplierId()),
  'modelId': yield select(makeSelectModelId()),
  'processorId': yield select(makeSelectProcessorId()), 
  'memoryId': yield select(makeSelectMemorylId()),
  'videoCardId': yield select(makeSelectVideoCardId()),
  'hardDiskId': yield select(makeSelectHardDiskId()),
  'manufacturerId': yield select(makeSelectManufacturerId()),
  'categoryId': yield select(makeSelectCategoryId()),
  'serialNo': yield select(makeSelectSerialNo()),
  'assetTag': yield select(makeSelectAssetTag()),
  'battery': yield select(makeSelectAssetTag()),
  'adapter': yield select(makeSelectAdapter()),
  'name': yield select(makeSelectName()),
  'assignedTo': yield select(makeSelectAssignedTo()),
  'deliveryDate': yield select(makeSelectDeliveryDate()),
  'poNo': yield select(makeSelectPONo()),
  'drNo': yield select(makeSelectDRNo()),
  'siNo': yield select(makeSelectSINo()),
  'macAddress': yield select(makeSelectMacAdd()),
  'ipAddress': yield select(makeSelectIpAdd()),
  'status': yield select(makeSelectStatus()),
  'purchaseDate': yield select(makeSelectPurchaseDate()),
  'purchaseCost': yield select(makeSelectPurchaseCost()),
  'warranty': yield select(makeSelectWarranty()),
  'notes': yield select(makeSelectNotes())}
  const modelTitle = yield select(makeSelectModelTitle())
  const token = localStorage.getItem('token')
  const response =  yield call(addNewItem,modelTitle, newAssetItem,token,)
  yield put(addNewSuccess(response.data.success))
  console.log(response)
  }catch(error){
    yield put(addNewFailed(error.response.data.success, error.response.data.errorMessages))
    console.log(error.response.data.errorMessages)
  }
}

export function* updateAssetItem () {
  const editedItem = {'id': yield select(makeSelectAssetItemId()),
  'supplierId' : yield select(makeSelectSupplierId()),
  'modelId': yield select(makeSelectModelId()),
  'processorId': yield select(makeSelectProcessorId()), 
  'memoryId': yield select(makeSelectMemorylId()),
  'videoCardId': yield select(makeSelectVideoCardId()),
  'hardDiskId': yield select(makeSelectHardDiskId()),
  'manufacturerId': yield select(makeSelectManufacturerId()),
  'categoryId': yield select(makeSelectCategoryId()),
  'serialNo': yield select(makeSelectSerialNo()),
  'assetTag': yield select(makeSelectAssetTag()),
  'battery': yield select(makeSelectAssetTag()),
  'adapter': yield select(makeSelectAdapter()),
  'name': yield select(makeSelectName()),
  'assignedTo': yield select(makeSelectAssignedTo()),
  'deliveryDate': yield select(makeSelectDeliveryDate()),
  'poNo': yield select(makeSelectPONo()),
  'drNo': yield select(makeSelectDRNo()),
  'siNo': yield select(makeSelectSINo()),
  'macAddress': yield select(makeSelectMacAdd()),
  'ipAddress': yield select(makeSelectIpAdd()),
  'status': yield select(makeSelectStatus()),
  'purchaseDate': yield select(makeSelectPurchaseDate()),
  'purchaseCost': yield select(makeSelectPurchaseCost()),
  'warranty': yield select(makeSelectWarranty()),
  'notes': yield select(makeSelectNotes())}
  const modelTitle = yield select(makeSelectModelTitle())
  const itemId = yield select(makeSelectAssetItemId())
  const token = localStorage.getItem('token')
  try{       
    const response = yield call(updateItemInfo, modelTitle, itemId, editedItem, token)
    yield put(updateSuccess(response.data.success))
    console.log('SuccessResponse'+ response.data.success)
  }catch(error){
    yield put(updateFailed(error.response.data.errorMessages))
    console.log(error.response.data.errorMessages)
  }
}
// Individual exports for testing
export default function* assetHomePageSaga() {
  yield takeLatest(GET_ALLITEMS, getAllItemList);
  yield takeLatest(GET_ASSETITEMS, getAssetItemList); 
  yield takeLatest(GET_ASSETKEYWORD, getAssetItemList);
  yield takeLatest(GET_ORDERTYPE, getAssetItemList);
  yield takeLatest(GET_ORDERBY, getAssetItemList);
  yield takeLatest(GET_ASSETITEMS, getAssetItemListById);
  yield takeLatest(SAVE_UPDATEDASSETITEM, updateAssetItem);
  yield takeLatest(UPDATE_SUCCESS, getAssetItemList);
  yield takeLatest(SAVE_NEWASSETITEM, saveNewAsset);
  yield takeLatest(SAVE_NEWASSETITEM, getAllItemList);
  yield takeLatest(ADD_ASSETSUCCESS, getAssetItemList);
  yield takeLatest(GET_CURRENTPAGE, getAssetItemList);
  yield takeLatest(HANDLE_PAGE, getAssetItemList );
  yield takeLatest(HANDLE_FIRST_LASTPAGE, getAssetItemList);
}
