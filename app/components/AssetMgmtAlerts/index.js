/**
 *
 * AssetMgmtAlerts
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Alert } from "react-bootstrap";
function AssetMgmtAlerts(props) {
  return (
    <div  style={{position:'absolute', right:10, top:70, width: 300, zIndex:10}}>     
        <Alert variant="success"
                show={props.alertModalShow} 
                onClose={props.dismissAlertModal} 
                dismissible>
                {props.alertMessage}               
        </Alert>
      </div> 
  );
}

AssetMgmtAlerts.propTypes = {};

export default AssetMgmtAlerts;
