/*
 *
 * AssetAddAsset actions
 *
 */

import { SHOW_ADDASSETMODAL, 
  HIDE_ADDASSETMODAL, 
  LOAD_ALLMODELITEM,
  GET_ALLMODELITEM,
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
  GET_NEWASSSETITEM,
  SAVE_NEWASSETITEM,
 } from './constants';

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
export function getAllModelItems(){
  return {
    type: GET_ALLMODELITEM,
  }
}
export function loadAllModelItems(allItems) {
  return{
    type:LOAD_ALLMODELITEM,
    allItems,

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