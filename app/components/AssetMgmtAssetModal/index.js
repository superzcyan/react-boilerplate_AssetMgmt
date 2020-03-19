/**
 *
 * AssetMgmtAssetModal
 *
 */

import React from 'react';
import { Modal, ModalBody } from "react-bootstrap";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import AssetMgmtAssetInfoForms from '../AssetMgmtAssetInfoForms';

function AssetMgmtAssetModal(props) {
  return (
    <div>
      <Modal size={props.modalSize} show={props.openModal} onHide={props.closeModal} backdrop='static'
        style={props.modalStyle}>
          <ModalBody>
            <div className="modal-title">{props.modalHeader}</div>
            <AssetMgmtAssetInfoForms
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
              OnSaveUpdatedAssetInfo = {props.OnSaveUpdatedAssetInfo}
              closeModal={props.closeModal}
              formStyle={props.formStyle}
              itemId = {props.itemId}
              itemToEdit = {props.itemToEdit}
              allItems = {props.allItems}
              failedResponse = {props.failedResponse}/>
          </ModalBody>
      </Modal>
    </div>
  );
}

AssetMgmtAssetModal.propTypes = {};

export default AssetMgmtAssetModal;
