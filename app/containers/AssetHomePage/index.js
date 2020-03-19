/**
 *
 * AssetHomePage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {  makeSelectAssetItems, 
          makeSelectModelTitle, 
          makeSelectOpenAssetInfoModal,
          makeSelectShowAddAssetModal,
          makeSelectAssetItemId, 
          makeSelectAssetItemsToEdit,
          makeSelectAllItems, 
          makeSelectAuthToken,
          makeSelectEditedItem,
          makeSelectTotalPages,
          makeSelectPageMove,
          makeSelectPrevPage,
          makeSelectFirstPage,
          makeSelectLastPage,
          makeSelectNextPage,
          makeSelectCurrentpage,
          makeSelectAssetKeyword,
          makeSelectAssetId,
          makeSelectOrderBy,
          makeSelectOrderType,
          makeSelectStoredAssetItems,
          makeSelectStoredItems,
          makeSelectNoItemFound,
          makeSelectTotalItems,
          makeSelectAlertModalShow,
          makeSelectAlertMessage,
          makeSelectErrorMessage,
          } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Container } from 'shards-react';
import {  getAssetItems, 
          getAllItems, 
          showAddAssetModal,
          hideAddAssetModal,
          saveNewAssetItem,
          showAssetInfoModal, 
          hideAssetInfoModal,          
          getSupplierId, 
          getProcessorId,
          getItemToEdit,
          saveUpdatedAssetItem,
          getCategoryId,
          getModelId,
          getMemoryId,
          getVideoCardId,
          getHardDiskId,
          getManufacturerId,
          getSerialNo,
          getAssetTag,
          getBattery,
          getAdapter,
          getName,
          getAssignedTo,
          getDeliveryDate,
          getPoNo,
          getDrNo,
          getSiNo,
          getMacAdd,
          getIpAdd,
          getStatus,
          getPurchaseDate,
          getPurchaseCost,
          getWarranty,
          getNotes,
          getCurrentPage,
          handlePage,
          handleFirstAndLastPage,
          loadAssetItems,
          getAssetKeyword,
          getAssetId,
          getOrderBy,
          getOrderType,
          dismissAlertModal} from './actions';
import AssetMgmtAssetTableCard from 'components/AssetMgmtAssetTableCard';
import AssetMgmtAssetModal from '../../components/AssetMgmtAssetModal';
import AssetMgmtAddAssetModal from '../../components/AssetMgmtAddAssetModal';
import { assetTableHeader } from '../../components/AssetMgmtItemTable/tableHeaders';
import { Redirect } from 'react-router-dom';
import { makeSelectIsAuthorized } from '../AssetLoginPage/selectors';
import { makeSelectFailedResponse } from '../AssetUsers/selectors';


export function AssetHomePage({  
  assetItems = [],
  getAssetKeyword,
  getAssetId,
  getOrderBy,
  getOrderType,
  itemToEdit = [],
  allItems = [],
  itemId = '',
  OnLoadGetAssetItems,
  OnLoadGetAllItems,
  totalPages = 0,
  currentPage = 1,
  prevPage = false,
  nextPage = false,
  firstPage = false,
  lastPage = false,
  getCurrentPage,
  handlePage,
  handleFirstAndLastPage,
  OnSaveUpdatedAssetInfo,
  failedResponse = '',
  openAssetInfoModal = false,
  OnClickOpenAssetInfoButton,
  OnClickCloseAssetInfoButton,
  OnChangeSupplierId,
  OnChangeModelId,
  OnChangeProcessorId,
  OnChangeMemoryId,
  OnChangeVideoCardId,
  OnChangeHardDiskId,
  OnChangeManufacturerId,
  OnChangeCategoryId,
  OnChangeSerialNo,
  OnChangeAssetTag,
  OnChangeBattery,
  OnChangeAdapter,
  OnChangeName,
  OnChangeAssignedTo,
  OnChangeDeliveryDate,
  OnChangePONo,
  OnChangeDRNo,
  OnChangeSINo,
  OnChangeMacAdd,
  OnChangeIPAdd,
  OnChangeStatusId,
  OnChangePurchaseDate,
  OnChangePurchaseCost,
  OnChangeWarranty,
  OnChangeNotes,
  showAddAssetModal = false,
  showAddAssetModalView,
  hideAddAssetModalView,
  saveNewAssetItem,
  OnChangeFormInputChanges,
  isAuthorized = false,
  noItemFound = '',
  alertModalShow = false,
  alertMessage = '',
  dismissAlertModal,
  handleAlertShow,
  errorMessage = '',
}) {
  useInjectReducer({ key: 'assetHomePage', reducer });
  useInjectSaga({ key: 'assetHomePage', saga });
  useEffect(() => {
  async function loadAllItems(){
    await OnLoadGetAllItems();   
  }
  loadAllItems()
  OnLoadGetAssetItems();    
  },[]);
 

  OnChangeFormInputChanges =()=>{
    return{
      OnChangeSupplierId : OnChangeSupplierId,
      OnChangeModelId : OnChangeModelId,
      OnChangeProcessorId : OnChangeProcessorId, 
      OnChangeMemoryId : OnChangeMemoryId,      
      OnChangeVideoCardId : OnChangeVideoCardId,
      OnChangeHardDiskId : OnChangeHardDiskId,
      OnChangeManufacturerId : OnChangeManufacturerId,
      OnChangeCategoryId : OnChangeCategoryId,    
      OnChangeSerialNo : OnChangeSerialNo,
      OnChangeAssetTag : OnChangeAssetTag,
      OnChangeBattery : OnChangeBattery,
      OnChangeAdapter : OnChangeAdapter,
      OnChangeName : OnChangeName,
      OnChangeAssignedTo : OnChangeAssignedTo,
      OnChangeDeliveryDate : OnChangeDeliveryDate,
      OnChangePONo : OnChangePONo,
      OnChangeDRNo : OnChangeDRNo,
      OnChangeSINo : OnChangeSINo,
      OnChangeMacAdd : OnChangeMacAdd,
      OnChangeIPAdd : OnChangeIPAdd,
      OnChangeStatusId : OnChangeStatusId,
      OnChangePurchaseDate : OnChangePurchaseDate,
      OnChangePurchaseCost : OnChangePurchaseCost,
      OnChangeWarranty : OnChangeWarranty,
      OnChangeNotes : OnChangeNotes,
    }
  }
  if(!isAuthorized){
    return <Redirect exact path to='/' />
  }
  if(allItems.length>1){
  return (
    <div className="main-content-container px-4 py-4 container-fluid">
      <Container className="">
          <div className="d-flex justify-content-end py-2">
          <AssetMgmtAddAssetModal
            {...OnChangeFormInputChanges()}            
            showAddAssetModal = {showAddAssetModal}
            showAddAssetModalView = {showAddAssetModalView}
            saveNewAssetItem = {saveNewAssetItem}
            hideAddAssetModalView = {hideAddAssetModalView}
            modelName = "Asset"
            modalHeader = "Add New Asset"
            formStyle = {{fontSize:'12px'}}
            modalSize = "lg" 
            allItems = {allItems}
            errorMessage = {errorMessage}/>
          </div>
          <AssetMgmtAssetTableCard
            cardStyle = {{width: "100% "}}
            cardTitle = "Assets"
            tableHeaders = {assetTableHeader}
            modelName = "Assets"            
            modelItems={assetItems}
            OnClickOpenModal = {OnClickOpenAssetInfoButton}
            getAssetKeyword = {getAssetKeyword}
            getAssetId = {getAssetId}
            getOrderBy = {getOrderBy}
            getOrderType = {getOrderType}
            noItemFound = {noItemFound}  
            alertModalShow = {alertModalShow}
            alertMessage = {alertMessage} 
            dismissAlertModal = {dismissAlertModal}
            //Pagination
            totalPages = {totalPages}
            currentPage = {currentPage}
            prevPage = {prevPage}
            nextPage = {nextPage}
            firstPage = {firstPage}
            lastPage = {lastPage}
            getCurrentPage= {getCurrentPage}
            handlePage={handlePage}
            handleFirstAndLastPage={handleFirstAndLastPage}
            allItems = {allItems}/>        
          <AssetMgmtAssetModal
            {...OnChangeFormInputChanges()}          
            itemId = {itemId}
            itemToEdit = {itemToEdit[0]}
            openModal = {openAssetInfoModal}
            OnClickOpenModal = {OnClickOpenAssetInfoButton}
            OnSaveUpdatedAssetInfo = {OnSaveUpdatedAssetInfo}
            closeModal = {OnClickCloseAssetInfoButton}
            modalHeader = "Asset Details"
            formStyle = {{fontSize:'12px'}}
            modalSize = "lg"
            allItems = {allItems}
            failedResponse = {failedResponse}/>
      </Container>      
    </div>    
  );
  }
}
AssetHomePage.propTypes = {  
  OnLoadGetAssetItems: PropTypes.func,
  OnLoadGetAllItems: PropTypes.func,
  assetItems: PropTypes.any,
  totalItems: PropTypes.number,
  storedAssetItems: PropTypes.any,
  storedItems: PropTypes.any,
  totalPages: PropTypes.number,
  getCurrentPage: PropTypes.func,
  firstPage: PropTypes.bool,
  nextPage: PropTypes.bool,
  lastPage: PropTypes.bool,
  prevPage: PropTypes.bool,
  handlePage: PropTypes.func,
  handleFirstAndLastPage: PropTypes.func,
  allItems: PropTypes.array,
  itemId: PropTypes.number,
  modelTitle: PropTypes.string, 
  itemToEdit: PropTypes.array,
  failedResponse: PropTypes.string,
  OnClickOpenAssetInfoButton: PropTypes.func,
  OnSaveUpdatedAssetInfo: PropTypes.func,
  OnClickCloseAssetInfoButton: PropTypes.func,
  OnChangeSupplierId: PropTypes.func,
  OnChangeModelId: PropTypes.func,  
  OnChangeProcessorId: PropTypes.func,
  OnChangeMemoryId: PropTypes.func,
  OnChangeVideoCardId: PropTypes.func,
  OnChangeHardDiskId: PropTypes.func,
  OnChangeManufacturerId: PropTypes.func,
  OnChangeCategoryId: PropTypes.func,
  OnChangeSerialNo: PropTypes.func,
  OnChangeAssetTag: PropTypes.func,
  OnChangeBattery: PropTypes.func,
  OnChangeAdapter: PropTypes.func,
  OnChangeName: PropTypes.func,
  OnChangeAssignedTo: PropTypes.func,
  OnChangeDeliveryDate: PropTypes.func,
  OnChangePONo: PropTypes.func,
  OnChangeDRNo: PropTypes.func,
  OnChangeSINo: PropTypes.func,
  OnChangeMacAdd: PropTypes.func,
  OnChangeIPAdd: PropTypes.func,
  OnChangeStatusId: PropTypes.func,
  OnChangePurchaseDate: PropTypes.func,
  OnChangePurchaseCost: PropTypes.func,
  OnChangeWarranty: PropTypes.func,
  OnChangeNotes: PropTypes.func,
  editedItem: PropTypes.any,
  noItemFound: PropTypes.string,
  alertModalShow: PropTypes.any,
  alertMessage: PropTypes.string,
  dismissAlertModal: PropTypes.func,
  errorMessage: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  authToken: makeSelectAuthToken(),
  assetItems: makeSelectAssetItems(),
  totalItems: makeSelectTotalItems(),
  storedAssetItems: makeSelectStoredAssetItems(),
  storedItems: makeSelectStoredItems(),
  assetKeyword: makeSelectAssetKeyword(),
  assetId: makeSelectAssetId(),
  orderBy: makeSelectOrderBy(),
  orderType: makeSelectOrderType(),
  modelTitle: makeSelectModelTitle(),
  allItems: makeSelectAllItems(),
  itemId: makeSelectAssetItemId(),
  itemToEdit: makeSelectAssetItemsToEdit(),
  openAssetInfoModal: makeSelectOpenAssetInfoModal(), 
  showAddAssetModal: makeSelectShowAddAssetModal(),
  editedItem: makeSelectEditedItem(),
  failedResponse: makeSelectFailedResponse(),
  totalPages: makeSelectTotalPages(),
  currentPage: makeSelectCurrentpage(),
  nextPage: makeSelectNextPage(),
  prevPage: makeSelectPrevPage(),
  firstPage: makeSelectFirstPage(),
  lastPage: makeSelectLastPage(),
  pageMove: makeSelectPageMove(),
  isAuthorized: makeSelectIsAuthorized(),
  noItemFound: makeSelectNoItemFound(),
  alertModalShow: makeSelectAlertModalShow(),
  alertMessage: makeSelectAlertMessage(),
  errorMessage: makeSelectErrorMessage(),
});

function mapDispatchToProps(dispatch) {
  return {  
    OnLoadGetAllItems: event => dispatch(getAllItems()),
    //GetAsset Functions
    OnLoadGetAssetItems: event => dispatch(getAssetItems()),
    getAssetKeyword: event => dispatch(getAssetKeyword(event.target.value)),
    getAssetId: event => dispatch(getAssetId(event.target.value)),
    getOrderBy: event => {
      let index = event.target.selectedIndex;
      let element = event.target.childNodes[index]
      let optionID =  element.getAttribute('id')
      dispatch(getOrderBy(optionID))},
    getOrderType: event => { 
      let index = event.target.selectedIndex;
      let element = event.target.childNodes[index]
      let optionID =  element.getAttribute('id')
      dispatch(getOrderType(optionID))},
    //
    showAddAssetModalView: event => {event.preventDefault(); dispatch(showAddAssetModal())},
    hideAddAssetModalView: event => dispatch(hideAddAssetModal()),
    saveNewAssetItem: event => {event.preventDefault(); dispatch(saveNewAssetItem()), dispatch(getAssetItems()) },    
    OnClickOpenAssetInfoButton: event => {dispatch(getItemToEdit(event.target.id)), dispatch(showAssetInfoModal())},
    OnSaveUpdatedAssetInfo: event => {event.preventDefault(), dispatch(hideAssetInfoModal()),      
      dispatch(saveUpdatedAssetItem()),
      dispatch(getAssetItems())},  
    OnClickCloseAssetInfoButton: event => dispatch(hideAssetInfoModal()),
    dismissAlertModal: event => dispatch(dismissAlertModal()),
    //Pagination Functions
    getCurrentPage: event => dispatch(getCurrentPage(event.target.value)),
    handlePage: event => dispatch(handlePage(event.target.name)),
    handleFirstAndLastPage: event => dispatch(handleFirstAndLastPage(event.target.name)),
    //
    OnChangeSupplierId: event => {
        let index = event.target.selectedIndex;
        let element = event.target.childNodes[index]
        let optionID =  element.getAttribute('id')
      dispatch(getSupplierId(optionID))},
    OnChangeModelId:  event => {
        let index = event.target.selectedIndex;
        let element = event.target.childNodes[index]
        let optionID =  element.getAttribute('id')
      dispatch(getModelId(optionID))},
    OnChangeProcessorId:  event => {
        let index = event.target.selectedIndex;
        let element = event.target.childNodes[index]
        let optionID =  element.getAttribute('id')
      dispatch(getProcessorId(optionID))},
    OnChangeMemoryId:  event => {
        let index = event.target.selectedIndex;
        let element = event.target.childNodes[index]
        let optionID =  element.getAttribute('id')
      dispatch(getMemoryId(optionID))},
    OnChangeVideoCardId:  event => {
        let index = event.target.selectedIndex;
        let element = event.target.childNodes[index]
        let optionID =  element.getAttribute('id')
      dispatch(getVideoCardId(optionID))},
    OnChangeHardDiskId:  event => {
        let index = event.target.selectedIndex;
        let element = event.target.childNodes[index]
        let optionID =  element.getAttribute('id')
      dispatch(getHardDiskId(optionID))},
    OnChangeManufacturerId:  event => {
        let index = event.target.selectedIndex;
        let element = event.target.childNodes[index]
        let optionID =  element.getAttribute('id')
      dispatch(getManufacturerId(optionID))},
    OnChangeCategoryId:  event => {
        let index = event.target.selectedIndex;
        let element = event.target.childNodes[index]
        let optionID =  element.getAttribute('id')
      dispatch(getCategoryId(optionID))},
    OnChangeSerialNo:  event => dispatch(getSerialNo(event.target.value)),
    OnChangeAssetTag:  event => dispatch(getAssetTag(event.target.value)),
    OnChangeBattery:  event => dispatch(getBattery(event.target.value)),
    OnChangeAdapter:  event => dispatch(getAdapter(event.target.value)),
    OnChangeName:  event => dispatch(getName(event.target.value)),
    OnChangeAssignedTo:  event => dispatch(getAssignedTo(event.target.value)),
    OnChangeDeliveryDate:  event => dispatch(getDeliveryDate(event.target.value)),
    OnChangePONo:  event => dispatch(getPoNo(event.target.value)),
    OnChangeDRNo:  event => dispatch(getDrNo(event.target.value)),
    OnChangeSINo:  event => dispatch(getSiNo(event.target.value)),
    OnChangeMacAdd:  event => dispatch(getMacAdd(event.target.value)),
    OnChangeIPAdd:  event => dispatch(getIpAdd(event.target.value)),
    OnChangeStatusId:  event => {
      let index = event.target.selectedIndex;
      let element = event.target.childNodes[index]
      let optionID =  element.getAttribute('id')
    dispatch(getStatus(optionID))},
    OnChangePurchaseDate: event => dispatch(getPurchaseDate(event.target.value)),
    OnChangePurchaseCost: event => dispatch(getPurchaseCost(event.target.value)),
    OnChangeWarranty: event => dispatch(getWarranty(event.target.value)),
    OnChangeNotes: event => dispatch(getNotes(event.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AssetHomePage);
