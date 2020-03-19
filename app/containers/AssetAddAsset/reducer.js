/*
 *
 * AssetAddAsset reducer
 *
 */
import produce from 'immer';
import { SHOW_ADDASSETMODAL, 
  HIDE_ADDASSETMODAL, 
  GET_ALLMODELITEM, 
  LOAD_ALLMODELITEM, 
  GET_NEWASSSETITEM, 
  SAVE_NEWASSETITEM, 
  GET_SUPPLIERID,
  GET_MODELID,
  GET_MEMORYID,
  GET_PROCESSORID,
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
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const assetAddAssetReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALLMODELITEM:
        draft.loading = true;
        break;
      case LOAD_ALLMODELITEM:
        draft.allItems = action.allItems
        break;
      case SHOW_ADDASSETMODAL:
        draft.showAddAssetModal = true;
        break;
      case HIDE_ADDASSETMODAL:
        draft.showAddAssetModal = false;
      case GET_NEWASSSETITEM:
        draft.newAssetItem = action.newAssetItem;
        break;
      case SAVE_NEWASSETITEM:
        draft.showAddAssetModal = false;
        draft.modelTitle = 'Assets'
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

export default assetAddAssetReducer;
