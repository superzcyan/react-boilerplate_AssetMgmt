/*
 *
 * AssetHomePage reducer
 *
 */
import produce from 'immer';
import {  GET_ASSETITEMS,
          LOAD_ASSETITEMS, 
          SHOW_ASSETINFOMODAL, 
          HIDE_ASSETINFOMODAL, 
          GET_ALLITEMS, 
          LOAD_ALLITEMS,
          SHOW_ADDASSETMODAL, 
          HIDE_ADDASSETMODAL,
          GET_NEWASSSETITEM, 
          SAVE_NEWASSETITEM,
          GET_SUPPLIERID,
          GET_MODELID,
          GET_MEMORYID,
          GET_PROCESSORID,
          GET_ITEMTOEDIT,
          SAVE_UPDATEDASSETITEM,
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
          GET_PURCHASECOST,
          GET_PURCHASEDATE,
          GET_WARRANTY,
          GET_NOTES,
          GET_CURRENTPAGE,
          HANDLE_PAGE,
          HANDLE_FIRST_LASTPAGE,
          UPDATE_SUCCESS,
          UPDATE_FAIL,
          GET_ASSETKEYWORD,
          GET_ASSETID,
          GET_ORDERBY,
          GET_ORDERTYPE,
          ADD_ASSETSUCCESS,
          ADD_ASSETFAILED,
          DISMISS_ALERTMODAL,
          LOAD_STOREDITEMS,
          } from './constants';

export const initialState = {
  loading : false,
  openAssetInfoModal : false, 
  itemId : null,
  supplierId : null,
  processorId : null,
  itemToEdit : [],
  editedItem: {},
  allItems: [],
};

/* eslint-disable default-case, no-param-reassign */
const assetHomePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALLITEMS:
        draft.allItems = action.allItems;        
        break;
      case LOAD_ALLITEMS:
        draft.allItems = action.allItems;
        break;
      case GET_ASSETITEMS:
        draft.modelTitle = 'Assets';
        draft.currentPage = draft.currentPage || 1;
        draft.assetKeyword = draft.assetKeyword || '';
        draft.orderBy =  draft.orderBy || 0;
        draft.orderType = draft.orderType || 0;
        break;
      case GET_ASSETKEYWORD:
        draft.assetKeyword = action.assetKeyword        
        break;
      case GET_ASSETID:
        draft.assetId = action.assetId;       
        if(draft.assetId!==''){
          const assetItemsById = draft.storedItems.filter(item=>item.id == draft.assetId)
          console.log('length:'+ assetItemsById.length)    
          if(assetItemsById.length>0){
            draft.assetItems = assetItemsById
            draft.noItemFound = ""
         }else{
            draft.assetItems = []
            draft.noItemFound = "No Item Found"
          }
        }else {
          draft.assetItems = draft.storedAssetItems
          draft.noItemFound = ""
        }       
        break;
      case GET_ORDERBY:
        draft.orderBy = action.orderBy;
        console.log('orderBy: '+draft.orderBy)
        break;
      case GET_ORDERTYPE:
        draft.orderType = action.orderType
        console.log('orderType: '+ draft.orderType)
        break;
      case LOAD_STOREDITEMS:
        draft.storedItems = action.storedItems
        break;
      case LOAD_ASSETITEMS:
        draft.noItemFound = ""
        draft.assetItems = action.assetItems;
        draft.storedAssetItems = action.storedAssetItems;
        draft.totalPages = action.totalPages;         
        if(draft.currentPage == 1){
          draft.prevPage = true
          draft.firstPage = true 
        }
        if(draft.currentPage < draft.totalPages){
          draft.nextPage = false
          draft.lastPage = false 
        }
        if(draft.totalPages == draft.currentPage){
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
      case GET_CURRENTPAGE:
        draft.currentPage = parseInt(action.currentPage);
        console.log(draft.currentPage)
        break;
      case HANDLE_PAGE:
        draft.pageMove = action.pageMove;
        draft.currentPage = (draft.pageMove == 'prev')?draft.currentPage-1:draft.currentPage+1;
        
        console.log(draft.currentPage)
        break;
      case HANDLE_FIRST_LASTPAGE:
        draft.pageMove = action.pageMove;
        draft.currentPage = (draft.pageMove == 'first')?draft.currentPage=1:draft.currentPage=draft.totalPages;
        console.log(draft.currentPage)
        break;
      case SHOW_ADDASSETMODAL:
        draft.showAddAssetModal = true;
        draft.supplierId = null,
        draft.modelId = 1,
        draft.processorId = null,
        draft.memoryId = null,
        draft.videoCardId = null,
        draft.hardDiskId = null,
        draft.manufacturerId = null,
        draft.categoryId = null,
        draft.serialNo = '',
        draft.assetTag = '',
        draft.battery = '',
        draft.adapter = '',
        draft.name = '',
        draft.assignedTo = '',
        draft.deliveryDate = '',
        draft.poNo = '',
        draft.drNo = '',
        draft.siNo = '',
        draft.macAddress = '',
        draft.ipAddress = '',
        draft.status = 1,
        draft.purchaseDate = '',
        draft.purchaseCost ='',
        draft.warranty = '',
        draft.notes = ''
        break;
      case HIDE_ADDASSETMODAL:
        draft.showAddAssetModal = false;
      case GET_NEWASSSETITEM:
        draft.newAssetItem = action.newAssetItem;
        break;
      case SAVE_NEWASSETITEM:
        draft.loading = false;
        break;
      case ADD_ASSETSUCCESS:        
        draft.successResponse = action.successResponse
        draft.alertMessage = 'Successfully Added!'
        draft.alertModalShow = true
        draft.showAddAssetModal = false;        
        break;
      case ADD_ASSETFAILED:
        draft.failedResponse = action.failedResponse
        draft.errorMessage = action.errorMessage   
        console.log(draft.errorMessage)  
        draft.showAddAssetModal = true  
        break; 
      case DISMISS_ALERTMODAL:
        draft.alertModalShow = false
        break;
      case GET_ITEMTOEDIT:
        draft.itemId = parseInt(action.itemId);
        draft.modelTitle = 'Assets';
        draft.itemToEdit = draft.assetItems.filter(item=>item.id ==draft.itemId)
        draft.supplierId = draft.itemToEdit[0].supplierId
        draft.modelId = draft.itemToEdit[0].modelId
        draft.processorId = draft.itemToEdit[0].processorId
        draft.memoryId = draft.itemToEdit[0].memoryId
        draft.videoCardId = draft.itemToEdit[0].videoCardId
        draft.hardDiskId = draft.itemToEdit[0].hardDiskId
        draft.manufacturerId = draft.itemToEdit[0].manufacturerId
        draft.categoryId = draft.itemToEdit[0].categoryId
        draft.serialNo = draft.itemToEdit[0].serialNo
        draft.assetTag = draft.itemToEdit[0].assetTag
        draft.battery = draft.itemToEdit[0].battery
        draft.adapter = draft.itemToEdit[0].adapter
        draft.name = draft.itemToEdit[0].name
        draft.assignedTo = draft.itemToEdit[0].assignedTo
        draft.deliveryDate = draft.itemToEdit[0].deliveryDate
        draft.poNo = draft.itemToEdit[0].poNo
        draft.drNo = draft.itemToEdit[0].drNo
        draft.siNo = draft.itemToEdit[0].siNo
        draft.macAddress = draft.itemToEdit[0].macAddress
        draft.ipAddress = draft.itemToEdit[0].ipAddress
        draft.status = draft.itemToEdit[0].status
        draft.purchaseDate = draft.itemToEdit[0].purchaseDate
        draft.purchaseCost = draft.itemToEdit[0].purchaseCost
        draft.warranty = draft.itemToEdit[0].warranty
        draft.notes = draft.itemToEdit[0].notes
        break;
      case SHOW_ASSETINFOMODAL:        
        draft.openAssetInfoModal = true;
        draft.failedResponse = '';
        break;
      case SAVE_UPDATEDASSETITEM:
        draft.loading = true;
        break;
      case UPDATE_SUCCESS:        
        draft.successResponse = action.successResponse
        draft.alertMessage = 'Successfully Updated!'
        draft.alertModalShow = true
        if(draft.successResponse){
          draft.openAssetInfoModal = false;
        }
        break;
      case UPDATE_FAIL:
        draft.failedResponse = action.failedResponse        
        if(draft.failedResponse == false){
          draft.editUserModalShow = true   
         }
        break;
      case HIDE_ASSETINFOMODAL: 
        draft.openAssetInfoModal = false;
        break;
      case GET_ALLITEMS:
        draft.id = draft.id;
        break;
      case GET_SUPPLIERID:
        draft.supplierId = parseInt(action.supplierId);
        console.log(draft.supplierId)
        break;
      case GET_MODELID:
        draft.modelId = action.modelId;
        break;
      case GET_PROCESSORID:
        draft.processorId = parseInt(action.processorId);
        break;
      case GET_MEMORYID:
        draft.memoryId = parseInt(action.memoryId);
        break;
      case GET_VIDEOCARDID:
        draft.videoCardId = parseInt(action.videoCardId)
        break;
      case GET_HARDDISKID:
        draft.hardDiskId = parseInt(action.hardDiskId)
        break;
      case GET_MANUFACTURERID:
        draft.manufacturerId = parseInt(action.manufacturerId)
        break;
      case GET_CATEGORYID:
        draft.categoryId = parseInt(action.categoryId)
        break;
      case GET_SERIALNO:
        draft.serialNo = action.serialNo
        break;
      case GET_ASSETTAG:
        draft.assetTag = action.assetTag
        break;
      case GET_BATTERY:
        draft.battery = action.battery
        break;
      case GET_ADAPTER:
        draft.adapter = action.adapter
        break;
      case GET_NAME:
        draft.name = action.name
        break;
      case GET_ASSIGNEDTO:
        draft.assignedTo = action.assignedTo
        break;
      case GET_DELIVERYDATE:
        draft.deliveryDate = action.deliveryDate
        break;
      case GET_PONO:
        draft.poNo = action.poNo
        break;
      case GET_DRNO:
        draft.drNo = action.drNo
        break;
      case GET_SINO:
        draft.siNo = action.siNo
        break;
      case GET_MACADDRESS:
        draft.macAdd = action.macAdd
        break;
      case GET_IPADDRESS:
        draft.ipAdd = action.ipAdd
        break;
      case GET_STATUS:
        draft.status = parseInt(action.status)
        break;
      case GET_PURCHASEDATE:
        draft.purchaseDate = action.purchaseDate
        break;
      case GET_PURCHASECOST:
        draft.purchaseCost = parseInt(action.purchaseCost)
        break;
      case GET_WARRANTY:
        draft.warranty = action.warranty
        break;
      case GET_NOTES:
        draft.notes = action.notes
        break;        
      }
      
  });

export default assetHomePageReducer;
