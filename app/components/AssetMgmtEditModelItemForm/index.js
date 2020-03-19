/**
 *
 * AssetMgmtEditModelItemForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Modal } from 'react-bootstrap';
import { FormGroup, Form, Button, FormInput } from 'shards-react';

function AssetMgmtEditModelItemForm(props) {
  return (   
    <Modal size={props.modalSize} show={props.editItemModalShow} onHide={props.closeModal} backdrop='static'
      style={props.modalStyle}>
        <Modal.Header>Edit {props.headerName}</Modal.Header>
          <Modal.Body>
            <Form style={props.formStyle} onSubmit={props.saveEditedModelItem}>  
            <FormGroup>
              <FormInput required defaultValue={props.defaultValue} readOnly={false}
                onChange={props.getEditedItem }/>
                <div className="invalid-feedback d-block text-right">                           
                  {props.errorMessage}
                </div>
            </FormGroup>
            <Button block theme="primary" type="submit" >
              Save
            </Button>
            <Button block theme="secondary" onClick={props.hideEditItemModal}>
              Close
            </Button>
            </Form>
          </Modal.Body>
      </Modal>
  );
}

AssetMgmtEditModelItemForm.propTypes = {};

export default AssetMgmtEditModelItemForm;
