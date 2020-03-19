/**
 *
 * AssetMgmtAddUserForm
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

function AssetMgmtAddUserForm(props) {
  return (
    <div className="main-content-container container-fluid">
      <div className="pt-2"> 
        <AssetMgmtAlerts
          alertModalShow = {props.alertModalShow}
          alertMessage = {props.alertMessage}
          dismissAlertModal = {props.dismissAlertModal}/>  
        <Container className="d-flex justify-content-end" style={{maxWidth: '32em'}}>
          <Button onClick={props.showAddItemModal}>+ New {props.headerName}</Button>
          <Modal size={props.modalSize} show={props.addItemModalShow} onHide={props.closeModal} backdrop='static'
            style={props.modalStyle}>
              <Modal.Header>Add New {props.headerName}</Modal.Header>
                <Modal.Body>
                  <Form style={props.formStyle} onSubmit={props.saveNewUser}>  
                  <FormGroup>
                    <label>Full Name</label>
                      <FormInput required placeholder={props.placeHolderFullName} readOnly={false}
                        onChange={props.getNewUserFullName  } /> 
                    <label>UserName</label>
                      <FormInput required placeholder={props.placeHolderUserName} readOnly={false}
                        onChange={props.getNewUserUserName  } /> 
                    <label>Password</label>
                      <FormInput type="password" required placeholder={props.placeHolderPassword} readOnly={false}
                        onChange={props.getNewUserPassword  } />
                    <label>Confirm Password</label>
                      <FormInput type="password" required placeholder={props.placeHolderConfirmPassword} readOnly={false}
                        onChange={props.getNewUserConfirmPassword } />
                         <div className="invalid-feedback d-block">
                            {props.errorMessage}                            
                         </div> 
                         <div className="invalid-feedback d-block">                           
                            {props.responseMessage}
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
          </Container>
        </div>
    </div>
  );
}

AssetMgmtAddUserForm.propTypes = {};

export default AssetMgmtAddUserForm;
