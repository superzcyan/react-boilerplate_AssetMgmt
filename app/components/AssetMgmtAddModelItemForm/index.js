/**
 *
 * AssetMgmtAddModelItemForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Modal} from 'react-bootstrap';
import { FormGroup, Form, Button, FormInput, Container } from 'shards-react';
import AssetMgmtAlerts from '../AssetMgmtAlerts';

function AssetMgmtAddModelItemForm(props) {
  return (
    <div>
      <Button onClick={props.showAddItemModal}>+ New {props.headerName}</Button>
      <Modal size={props.modalSize} show={props.addItemModalShow} onHide={props.closeModal} backdrop='static'
        style={props.modalStyle}>
          <Modal.Header>Add New {props.headerName}</Modal.Header>
            <Modal.Body>
              <Form style={props.formStyle} onSubmit={props.saveNewModelItem}>  
              <FormGroup>
                <FormInput required placeholder={props.placeHolder} readOnly={false}
                  onChange={props.getNewItemName } />  
                  <div className="invalid-feedback d-block text-right">                           
                    {props.errorMessage}
                  </div>
              </FormGroup>
              
              <Button block theme="primary" type="submit" >
                Save
              </Button>
              <Button block theme="secondary" onClick={props.hideAddItemModal}>
                Close
              </Button> 
              </Form>
            </Modal.Body>        
        </Modal>
      </div>
  );
}

AssetMgmtAddModelItemForm.propTypes = {};

export default AssetMgmtAddModelItemForm;
