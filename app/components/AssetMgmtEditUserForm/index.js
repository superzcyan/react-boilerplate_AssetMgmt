/**
 *
 * AssetMgmtEditUserForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Modal} from 'react-bootstrap';
import { FormGroup, Form, Button, FormInput, Container } from 'shards-react';

function AssetMgmtEditUserForm(props) {
  return (
    <div>
      <Modal size={props.modalSize} show={props.editUserModalShow} onHide={props.closeModal} backdrop='static'
        style={props.modalStyle}>
          <Modal.Header>Edit {props.headerName}</Modal.Header>
            <Modal.Body>
              <Form style={props.formStyle} onSubmit={props.saveEditedUser}>  
              <FormGroup>
                <label>Full Name</label>
                  <FormInput required defaultValue={props.defaultValueFullName} readOnly={false}
                    onChange={props.getFullName  } /> 
                <label>Username</label>
                  <FormInput required defaultValue={props.defaultValueUserName} readOnly={false}
                    onChange={props.getUserName } /> 
                <label>Password</label>
                  <FormInput type="password" required defaultValue={props.defaultValuePassword} readOnly={false}
                    onChange={props.getPassword  } />
                <label>Confirm Password</label>
                  <FormInput type="password" required defaultValue={props.defaultValueConfirmPassword} readOnly={false}
                    onChange={props.getConfirmPassword } />
                      <div className="invalid-feedback d-block">
                        {props.errorMessage}                            
                      </div> 
                      <div className="invalid-feedback d-block">                           
                        {props.failedResponse}
                      </div> 
              </FormGroup>
              <Button block theme="primary" type="submit" >
                Save
              </Button>
              <Button block theme="secondary" onClick={props.hideEditUserModal}>
                Close
              </Button> 
              </Form>
            </Modal.Body>        
        </Modal>
    </div>
  );
}

AssetMgmtEditUserForm.propTypes = {};

export default AssetMgmtEditUserForm;
