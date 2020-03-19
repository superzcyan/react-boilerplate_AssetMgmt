/**
 *
 * AssetMgmtAddAssetModal
 *
 */

import React from 'react';
import { Modal, Button } from "react-bootstrap";

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import AssetMgmtAddAssetForm from '../AssetMgmtAddAssetForm';

function AssetMgmtAddAssetModal(props) {
  console.log(props.allItems)
  return (
    <div>
    <Button onClick={props.showAddAssetModalView}>+ New {props.modelName}</Button>
      <Modal size={props.modalSize} show={props.showAddAssetModal} onHide={props.closeModal} backdrop='static'
        style={props.modalStyle}>
          <Modal.Body>
          <div className="modal-title mb-2">{props.modalHeader}</div>            
            <AssetMgmtAddAssetForm
              OnChangeSupplierId = {props.OnChangeSupplierId}
              OnChangeModelId = {props.OnChangeModelId}
              OnChangeProcessorId = {props.OnChangeProcessorId}   
              OnChangeMemoryId = {props.OnChangeMemoryId}   
              OnChangeVideoCardId = {props.OnChangeVideoCardId}
              OnChangeHardDiskId = {props.OnChangeHardDiskId}
              OnChangeManufacturerId = {props.OnChangeManufacturerId}
              OnChangeCategoryId = {props.OnChangeCategoryId}    
              OnChangeSerialNo = {props.OnChangeSerialNo}
              OnChangeAssetTag = {props.OnChangeAssetTag}
              OnChangeBattery = {props.OnChangeBattery}
              OnChangeAdapter = {props.OnChangeAdapter}
              OnChangeName = {props.OnChangeName}
              OnChangeAssignedTo = {props.OnChangeAssignedTo}
              OnChangeDeliveryDate = {props.OnChangeDeliveryDate}
              OnChangePONo = {props.OnChangePONo}
              OnChangeDRNo = {props.OnChangeDRNo}
              OnChangeSINo = {props.OnChangeSINo}
              OnChangeMacAdd = {props.OnChangeMacAdd}
              OnChangeIPAdd = {props.OnChangeIPAdd}
              OnChangeStatusId = {props.OnChangeStatusId}
              OnChangePurchaseDate = {props.OnChangePurchaseDate}
              OnChangePurchaseCost = {props.OnChangePurchaseCost}
              OnChangeWarranty = {props.OnChangeWarranty}
              OnChangeNotes = {props.OnChangeNotes}
              saveNewAssetItem = {props.saveNewAssetItem}
              hideAddAssetModalView={props.hideAddAssetModalView}
              formStyle={props.formStyle}
              itemId = {props.itemId}
              itemToEdit = {props.itemToEdit}
              allItems = {props.allItems}
              errorMessage = {props.errorMessage} />
          </Modal.Body>
      </Modal>
    </div>
  );
}

AssetMgmtAddAssetModal.propTypes = {};

export default AssetMgmtAddAssetModal;
