/*
 *
 * AssetMemory reducer
 *
 */
import produce from 'immer';
import { GET_MODELITEMS, 
  LOAD_MODELITEMS, 
  GET_ITEMID, 
  GET_ITEMNAME, 
  SHOW_EDITITEMMODAL, 
  HIDE_EDITITEMMODAL,
  GET_EDITEDITEMNAME,
  SAVE_EDITEDITEM,
  GET_CURRENTPAGE,
  HANDLE_PAGE,
  HANDLE_FIRST_LASTPAGE,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  SHOW_ADDMODELITEMMODAL,
  HIDE_ADDMODELITEMMODAL,
  SAVE_NEWMODELITEM,
  GET_NEWITEMNAME,
  ADD_SUCCESS,
  ADD_FAIL,
  DISMISS_ALERTMODAL,
  LOAD_ALLSTOREDMODELITEMS,
  GET_MODELID, } from './constants';
export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const assetMemoryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MODELITEMS:
        draft.loading = true;
        draft.modelTitle = 'Sizes/memory';
        draft.currentPage = draft.currentPage || 1;
        break;
      case LOAD_MODELITEMS:
        draft.modelItems = action.modelItems;
        draft.storedModelItems = action.storedModelItems
        draft.noItemFound = ""
        draft.totalPages = action.totalPages;
        if(draft.currentPage == 1){
          draft.prevPage = true
          draft.firstPage = true 
        }
        if(draft.currentPage < draft.totalPages){
          draft.nextPage = false
          draft.lastPage = false 
        }
        if(draft.currentPage == draft.totalPages){
          draft.nextPage = true
          draft.lastPage = true
        }
        if(draft.totalPages == 1 ){
          draft.nextPage = true
          draft.lastPage = true
          draft.prevPage = true
          draft.firstPage = true 
        }
        if(draft.currentPage>1){
          draft.prevPage = false
          draft.firstPage = false 
        }
        break;
      case GET_MODELID:
        draft.modelId = action.modelId;          
        if(draft.modelId!==''){
          const modelItemsById = draft.storedAllModelItems.filter(item=>item.id == draft.modelId)
          console.log('length:'+ modelItemsById.length)    
          if(modelItemsById.length>0){
            draft.modelItems = modelItemsById
            draft.noItemFound = ""
          }else{
            draft.modelItems = []
            draft.noItemFound = "No Item Found"
          }
        }else {
          draft.modelItems = draft.storedModelItems
          draft.noItemFound = ""
        }       
        break;        
      case LOAD_ALLSTOREDMODELITEMS:
        draft.storedAllModelItems = action.storedAllModelItems
        break;
      //Add
      case SHOW_ADDMODELITEMMODAL:
        draft.addItemModalShow = true
        draft.errorMessage = ''
        break;
      case HIDE_ADDMODELITEMMODAL:
        draft.addItemModalShow = false
        break;
      case GET_NEWITEMNAME:
        draft.newItemName = action.newItemName
        console.log(draft.newItemName)
        break;
      case SAVE_NEWMODELITEM:
        draft.loading = false
        draft.errorMessage = ''
        break;
      case ADD_SUCCESS:
        draft.successResponse = action.successResponse
        draft.errorMessage = ''
        draft.addItemModalShow = false;
        draft.alertMessage = 'Successfully Added!'
        draft.alertModalShow = true 
        break;
      case ADD_FAIL:
        draft.failedResponse = action.failedResponse
        draft.errorMessage = action.errorMessage
        draft.addItemModalShow = true          
        break;
      //Pagination
      case GET_CURRENTPAGE:
        draft.currentPage = parseInt(action.currentPage);
        console.log(draft.currentPage)        
        break;
      case HANDLE_PAGE:
        draft.pageMove = action.pageMove;        
        draft.currentPage = (draft.pageMove == 'prev')?draft.currentPage-1:draft.currentPage+1;
        console.log(draft.pageMove)
        console.log(draft.currentPage)
        break;
      case HANDLE_FIRST_LASTPAGE:
        draft.pageMove = action.pageMove;
        draft.currentPage = (draft.pageMove == 'first')?draft.currentPage=1:draft.currentPage=draft.totalPages;
        break;
      //End of Pagination
      case GET_ITEMID:
        draft.itemId = action.itemId;               
        break;
      case GET_ITEMNAME:
        draft.itemName = action.itemName;
        console.log(draft.editedItemName)
        break;
      case GET_EDITEDITEMNAME:
        draft.editedItemName = action.editedItemName;
        console.log(draft.editedItemName)
        break;
      case SAVE_EDITEDITEM:
        draft.loading = false;
        break;
      case UPDATE_SUCCESS:        
        draft.successResponse = action.successResponse
        draft.editItemModalShow = false;
        draft.alertMessage = 'Successfully Updated!'
        draft.alertModalShow = true 
        break;
      case UPDATE_FAIL:
        draft.failedResponse = action.failedResponse
        draft.errorMessage = action.errorMessage
        draft.editItemModalShow = true          
        break;
      case SHOW_EDITITEMMODAL:
        draft.editedItemName = draft.itemName;
        draft.editItemModalShow = true;
        draft.errorMessage = '';
        break;
      case HIDE_EDITITEMMODAL:
        draft.editItemModalShow = false;
        break;
      case DISMISS_ALERTMODAL:
        draft.alertModalShow = false;
        break;
    }
  });

export default assetMemoryReducer;
