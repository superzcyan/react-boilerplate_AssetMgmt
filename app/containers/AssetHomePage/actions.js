/*
 *
 * AssetHomePage actions
 *
 */

import { 
  GET_ASSETITEMS, 
  LOAD_ASSETITEMS, 
  SHOW_ASSETINFOMODAL, 
  HIDE_ASSETINFOMODAL,
  SHOW_ADDASSETMODAL, 
  HIDE_ADDASSETMODAL, 
  GET_NEWASSSETITEM,
  SAVE_NEWASSETITEM,
  GET_ALLITEMS,
  LOAD_ALLITEMS,
  GET_SUPPLIERID,
  GET_MODELID,
  GET_PROCESSORID,
  GET_MEMORYID,
  GET_VIDEOCARDID,
  GET_HARDDISKID,
  GET_MANUFACTURERID,
  GET_CATEGORYID,
  GET_SERIALNO,
  GET_ASSETTAG,
  GET_BATTERY,
  GET_ADAPTER,
  GET_NAME,
  GET_ASSIGNEDTO,
  GET_DELIVERYDATE,
  GET_PONO,
  GET_DRNO,
  GET_SINO,
  GET_MACADDRESS,
  GET_IPADDRESS,
  GET_STATUS,
  GET_PURCHASEDATE,
  GET_PURCHASECOST,
  GET_WARRANTY,
  GET_NOTES,
  GET_ITEMTOEDIT,
  SAVE_UPDATEDASSETITEM,
  GET_CURRENTPAGE,
  HANDLE_PAGE,
  HANDLE_FIRST_LASTPAGE,
  UPDATE_FAIL,
  UPDATE_SUCCESS,
  GET_ASSETKEYWORD,
  GET_ASSETID,
  GET_ORDERBY,
  GET_ORDERTYPE,
  ADD_ASSETSUCCESS,
  ADD_ASSETFAILED,
  DISMISS_ALERTMODAL,
  LOAD_STOREDITEMS,
} from './constants';
import { func } from 'prop-types';
//GET ASSET ITEMS
export function getAssetItems(modelTitle, currentPage) {
  return {
    type: GET_ASSETITEMS,    
    modelTitle,
    currentPage,
  };
}
export function getAssetKeyword(assetKeyword) {
  return {
    type: GET_ASSETKEYWORD,
    assetKeyword,
  }
}
export function getAssetId(assetId) {
  return {
    type: GET_ASSETID,
    assetId,
  }
}
export function getOrderBy(orderBy) {
  return {
    type: GET_ORDERBY,
    orderBy,
  }
}
export function getOrderType(orderType) {
  return {
    type: GET_ORDERTYPE,
    orderType,
  }
}
export function loadAssetItems( assetItems, storedAssetItems, totalPages) {
  return {
    type: LOAD_ASSETITEMS,    
    assetItems,   
    storedAssetItems,
    totalPages,    
  };
}
export function loadStoredItems(storedItems) {
  return {
    type: LOAD_STOREDITEMS,    
    storedItems,    
  };
}

//GET ALL ITEMS
export function getAllItems(){
  return {
    type: GET_ALLITEMS, 
  }
}
export function loadAllItems(allItems){
  return {
    type: LOAD_ALLITEMS,
    allItems,
  }
}

export function getItemToEdit(itemId, itemToEdit){
  return{
    type: GET_ITEMTOEDIT,      
    itemId,
    itemToEdit,
  }
}
export function showAssetInfoModal( openAssetInfoModal) {
  return {
    type: SHOW_ASSETINFOMODAL,  
    openAssetInfoModal,
  }
}
export function hideAssetInfoModal(openAssetInfoModal) {
  return {
    type: HIDE_ASSETINFOMODAL,
    openAssetInfoModal,
  }
}
export function saveUpdatedAssetItem(openAssetInfoModal) {
  return {  
    type: SAVE_UPDATEDASSETITEM,  
    openAssetInfoModal,
  }
}
export function updateSuccess(successResponse) {
  return {
    type: UPDATE_SUCCESS,
    successResponse,
  }
}
export function updateFailed(failedResponse) {
  return {
    type: UPDATE_FAIL,
    failedResponse,
  }
}
//Add Functions
export function showAddAssetModal(showAddAssetModal) {
  return {
    type: SHOW_ADDASSETMODAL,
    showAddAssetModal,
  };
}
export function hideAddAssetModal() {
  return {
    type: HIDE_ADDASSETMODAL,
  }
}
export function getNewAssetItem() {
  return{
    type: GET_NEWASSSETITEM,
    newAssetItem,
  }
}
export function saveNewAssetItem() {
  return{
    type: SAVE_NEWASSETITEM,   
  }
}
export function addNewSuccess(successResponse) {
  return {
    type: ADD_ASSETSUCCESS,
    successResponse,
  }
}
export function addNewFailed(failedResponse, errorMessage) {
  return {
    type: ADD_ASSETFAILED,
    failedResponse,
    errorMessage,
  }
}
//Add Functions End
//Alert
export function dismissAlertModal(alertModalShow) {
  return {
    type: DISMISS_ALERTMODAL,
    alertModalShow,
  }
}

export function getSupplierId(supplierId) {
  return {
    type: GET_SUPPLIERID,
    supplierId,
  }
}
export function getModelId(modelId) {
  return {
    type: GET_MODELID,
    modelId,
  }
}
export function getProcessorId(processorId) {
  return{
    type: GET_PROCESSORID,
    processorId,
  }
}
export function getMemoryId(memoryId) {
  return{
    type: GET_MEMORYID,
    memoryId,
  }
}
export function getVideoCardId(videoCardId) {
  return {
    type: GET_VIDEOCARDID,
    videoCardId,
  }
}
export function getHardDiskId(hardDiskId) {
  return {
    type: GET_HARDDISKID,
    hardDiskId,
  }
}
export function getManufacturerId(manufacturerId) {
  return {
    type: GET_MANUFACTURERID,
    manufacturerId,
  }
}
export function getCategoryId(categoryId) {
  return {
    type: GET_CATEGORYID,
    categoryId,
  }
}
export function getSerialNo(serialNo) {
  return {
    type: GET_SERIALNO,
    serialNo,
  }
}
export function getAssetTag(assetTag) {
  return {
    type: GET_ASSETTAG,
    assetTag,
  }
}
export function getBattery(battery) {
  return {
    type: GET_BATTERY,
    battery,
  }
}
export function getAdapter(adapter) {
  return {
    type: GET_ADAPTER,
    adapter,
  }
}
export function getName(name) {
  return {
    type: GET_NAME,
    name,
  }
}
export function getAssignedTo(assignedTo) {
  return {
    type: GET_ASSIGNEDTO,
    assignedTo,
  }
}
export function getDeliveryDate(deliveryDate) {
  return {
    type: GET_DELIVERYDATE,
    deliveryDate,
  }
}
export function getPoNo(poNo) {
  return {
    type: GET_PONO,
    poNo,
  }
}
export function getDrNo(drNo) {
  return {
    type: GET_DRNO,
    drNo
  }
}
export function getSiNo(siNo) {
  return {
    type: GET_SINO,
    siNo,
  }
}
export function getMacAdd(macAddress) {
  return {
    type: GET_MACADDRESS,
    macAddress,
  }
}
export function getIpAdd(ipAddress) {
  return {
    type: GET_IPADDRESS,
    ipAddress,
  }
}
export function getStatus(status) {
  return {
    type: GET_STATUS,
    status,
  }
}
export function getPurchaseDate(purchaseDate) {
  return {
    type: GET_PURCHASEDATE,
    purchaseDate,
  }
}
export function getPurchaseCost(purchaseCost) {
  return {
    type: GET_PURCHASECOST,
    purchaseCost,
  }
}
export function getWarranty(warranty) {
  return {
    type: GET_WARRANTY,
    warranty,
  }
}
export function getNotes(notes) {
  return {
    type : GET_NOTES,
    notes,
  }
}
//Pagination
export function getCurrentPage(currentPage) {
  return {
    type: GET_CURRENTPAGE,
    currentPage,
  }
}
export function handlePage(pageMove, currentPage){
  return {
    type: HANDLE_PAGE,
    pageMove,
    currentPage,
  }
}
export function handleFirstAndLastPage(pageMove, currentPage){
  return {
    type: HANDLE_FIRST_LASTPAGE,
    pageMove,
    currentPage,
  }
}
