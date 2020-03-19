/**
 *
 * AssetAddAsset
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
import { makeSelectShowAddAssetModal, makeSelectAllModelItems, makeSelectModelTitle } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {Button, Container} from 'shards-react'
import AssetMgmtAddAssetModal from '../../components/AssetMgmtAddAssetModal';

import {showAddAssetModal, 
  loadAllModelItems, 
  getAllModelItems, 
  saveNewAssetItem,
  getSupplierId, 
  getProcessorId,
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
  hideAddAssetModal,
  
} from './actions'

export function AssetAddAsset({
  showAddAssetModal = false,
  showAddAssetModalView,
  hideAddAssetModalView,
  allItems = [],
  getAllModelItems,
  saveNewAssetItem,
  supplierId = null,
  modelId = null,
  processorId = null, 
  memoryId = null,
  videoCardId = null,
  hardDiskId = null,
  manufacturerId = null,
  categoryId = null,
  serialNo = '',
  assetTag = '',
  battery = '',
  adapter = '',
  name = '',
  assignedTo = '',
  deliveryDate = '',
  poNo = '',
  drNo = '',
  siNo = '',
  macAddress = '',
  ipAddress = '',
  status = '',
  purchaseDate = '',
  purchaseCost = '',
  warranty= '',
  notes = '',
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
  
}) {
  useInjectReducer({ key: 'assetAddAsset', reducer });
  useInjectSaga({ key: 'assetAddAsset', saga });
  useEffect(() => {
    getAllModelItems()
  }, [])
  return (
    <div className="main-content-container px-4 container-fluid">
      <div className="py-2 no-gutters"> 
        <Container className="d-flex justify-content-end">
          <Button onClick={showAddAssetModalView}>+ New Asset</Button>          
          <AssetMgmtAddAssetModal
            OnChangeSupplierId = {OnChangeSupplierId}
            OnChangeModelId = {OnChangeModelId}
            OnChangeProcessorId = {OnChangeProcessorId}
            OnChangeMemoryId = {OnChangeMemoryId}      
            OnChangeVideoCardId = {OnChangeVideoCardId}
            OnChangeHardDiskId = {OnChangeHardDiskId}
            OnChangeManufacturerId = {OnChangeManufacturerId}
            OnChangeCategoryId = {OnChangeCategoryId}    
            OnChangeSerialNo = {OnChangeSerialNo}
            OnChangeAssetTag = {OnChangeAssetTag}
            OnChangeBattery = {OnChangeBattery}
            OnChangeAdapter = {OnChangeAdapter}
            OnChangeName = {OnChangeName}
            OnChangeAssignedTo = {OnChangeAssignedTo}
            OnChangeDeliveryDate = {OnChangeDeliveryDate}
            OnChangePONo = {OnChangePONo}
            OnChangeDRNo = {OnChangeDRNo}
            OnChangeSINo = {OnChangeSINo}
            OnChangeMacAdd = {OnChangeMacAdd}
            OnChangeIPAdd = {OnChangeIPAdd}
            OnChangeStatusId = {OnChangeStatusId}
            OnChangePurchaseDate = {OnChangePurchaseDate}
            OnChangePurchaseCost = {OnChangePurchaseCost}
            OnChangeWarranty = {OnChangeWarranty}
            OnChangeNotes = {OnChangeNotes}            
            showAddAssetModal = {showAddAssetModal}
            showAddAssetModalView = {showAddAssetModalView}
            saveNewAssetItem = {saveNewAssetItem}
            hideAddAssetModalView = {hideAddAssetModalView}
            modalHeader = "Add New Asset"
            formStyle = {{fontSize:'12px'}}
            modalSize = "lg"
            allItems = {allItems}
          />
        </Container>
      </div>
    </div>
  );
}

AssetAddAsset.propTypes = {
  showAddAssetModalView: PropTypes.func.isRequired,
  saveNewAssetItem: PropTypes.func,
  allItems: PropTypes.array,
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
};

const mapStateToProps = createStructuredSelector({
  showAddAssetModal: makeSelectShowAddAssetModal(),
  allItems: makeSelectAllModelItems(),
  modelTitle: makeSelectModelTitle(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAllModelItems: event => dispatch(getAllModelItems()),
    showAddAssetModalView: event => {event.preventDefault(); dispatch(showAddAssetModal())},
    hideAddAssetModalView: event => dispatch(hideAddAssetModal()),
    saveNewAssetItem: event => {event.preventDefault(); dispatch(saveNewAssetItem())},
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
)(AssetAddAsset);
