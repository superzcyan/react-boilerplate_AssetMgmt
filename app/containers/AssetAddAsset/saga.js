import { take, call, put, select , takeLatest} from 'redux-saga/effects';
import { GET_ALLMODELITEM, SAVE_NEWASSETITEM } from './constants';
import { getAllModelItems, addNewItem, } from '../Api';
import { loadAllModelItems } from './actions';
import { makeSelectModelTitle, makeSelectSupplierId, makeSelectProcessorId, makeSelectModelId, makeSelectMemorylId, makeSelectHardDiskId, makeSelectManufacturerId, makeSelectCategoryId, makeSelectSerialNo, makeSelectAssetTag, makeSelectAdapter, makeSelectName, makeSelectAssignedTo, makeSelectDeliveryDate, makeSelectPONo, makeSelectDRNo, makeSelectSINo, makeSelectMacAdd, makeSelectIpAdd, makeSelectPurchaseDate, makeSelectPurchaseCost, makeSelectWarranty, makeSelectNotes, makeSelectVideoCardId, makeSelectStatus} from './selectors';

export function* getAllItemList () {
  try {
    const token = localStorage.getItem('token')
    const allList = yield call(getAllModelItems,token);
    yield put(loadAllModelItems(allList));
    console.log(allList)
  }catch(error){
    console.log(error)
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
  console.log(response)
  }catch(error){
    console.log(error)
  }
}
// Individual exports for testing
export default function* assetAddAssetSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_ALLMODELITEM, getAllItemList);
  yield takeLatest(SAVE_NEWASSETITEM, saveNewAsset)

}
