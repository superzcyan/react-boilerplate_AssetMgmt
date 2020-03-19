/*
 *
 * AssetHardDisk actions
 *
 */

import { GET_MODELITEMS,
  LOAD_MODELITEMS,
  LOAD_ALLSTOREDMODELITEMS,
  GET_MODELID,
  GET_ITEMID,
  SAVE_EDITEDITEM, 
  GET_ITEMNAME, 
  GET_EDITEDITEMNAME,
  SHOW_EDITITEMMODAL, 
  HIDE_EDITITEMMODAL,
  GET_CURRENTPAGE,
  HANDLE_PAGE,
  HANDLE_FIRST_LASTPAGE,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  DISMISS_ALERTMODAL,
  SHOW_ADDMODELITEMMODAL, 
  HIDE_ADDMODELITEMMODAL, 
  SAVE_NEWMODELITEM, 
  GET_NEWITEMNAME,
  ADD_SUCCESS,
  ADD_FAIL} from './constants';

  export function getModelItems(modelTitle, currentPage) {
    return {
      type: GET_MODELITEMS,
      modelTitle,
      currentPage,
    };
  }
  
export function loadModelItems(modelItems, storedModelItems, totalPages) {
  return {
    type: LOAD_MODELITEMS,
    modelItems,
    storedModelItems,
    totalPages,
  }
}
export function getModelId(modelId) {
  return {
    type: GET_MODELID,
    modelId,
  }
}
export function loadAllStoredModelItems(storedAllModelItems) {
  return {
    type: LOAD_ALLSTOREDMODELITEMS,
    storedAllModelItems,
  }
}
  //Add
  export function showAddItemModal() {
    return {
      type: SHOW_ADDMODELITEMMODAL,
    };
  }
  export function hideAddItemModal(addItemModalShow) {
    return {
      type: HIDE_ADDMODELITEMMODAL,
      addItemModalShow,
    }
  }
  export function saveNewModelItem(addItemModalShow) {
    return {
      type: SAVE_NEWMODELITEM,
      addItemModalShow,
      
    }
  }
  export function getNewItemName(newItemName) {
    return {
      type: GET_NEWITEMNAME,
      newItemName,
    }
  }
  export function addSuccess(successResponse) {
    return {
      type: ADD_SUCCESS,
      successResponse,
    }
  }
  export function addFailed(failedResponse, errorMessage) {
    return {
      type: ADD_FAIL,
      failedResponse,
      errorMessage,
    }
  }
  //Edit
  export function getItemId(itemId) {
    return {
      type: GET_ITEMID,
      itemId,    
    }
  }
  export function getItemName(itemName) {
    return {
      type: GET_ITEMNAME,
      itemName,
    }
  }
  export function getEditedItemName(editedItemName){
    return {
      type: GET_EDITEDITEMNAME,
      editedItemName,
    }
  }
  export function saveEditedItem(editItemModalShow) {
    return {
      type: SAVE_EDITEDITEM,
      editItemModalShow,
    }
  }
  export function showEditItemModal(editItemModalShow) {
    return {
      type: SHOW_EDITITEMMODAL,
      editItemModalShow,
    }
  }
  export function hideEditItemModal(editItemModalShow) {
    return {
      type: HIDE_EDITITEMMODAL,
      editItemModalShow,
    }
  }
  export function updateSuccess(successResponse) {
    return {
      type: UPDATE_SUCCESS,
      successResponse,
    }
  }
  export function updateFailed(failedResponse, errorMessage) {
    return {
      type: UPDATE_FAIL,
      failedResponse,
      errorMessage,
    }
  }
  //Alert
  export function dismissAlertModal(alertModalShow) {
    return {
      type: DISMISS_ALERTMODAL,
      alertModalShow,
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