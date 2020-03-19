/**
 *
 * AssetMgmtUserTableCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Card, CardBody } from 'shards-react';
import AssetMgmtUserItemTable from 'components/AssetMgmtUserItemTable';
import AssetMgmtPagination from 'components/AssetMgmtPagination';
import AssetMgmtAlerts from '../AssetMgmtAlerts';

function AssetMgmtUserTableCard(props) {
  return (
    <div>
      <AssetMgmtAlerts
        alertModalShow = {props.alertModalShow}
        alertMessage = {props.alertMessage}
        dismissAlertModal = {props.dismissAlertModal}/>  
      <Card small className="mb-4 " style={props.cardStyle}>   
      <CardBody>       
      <div className="text-center card-header m-0">
        {props.cardTitle}
      </div>
        <AssetMgmtUserItemTable
          tableHeaders = {props.tableHeaders}
          modelName = {props.modelName}
          modelItems={props.modelItems}
          editUserModalShow= {props.editUserModalShow}
          showEditUserModal = {props.showEditUserModal}
          hideEditUserModal = {props.hideEditUserModal}/> 
          <AssetMgmtPagination 
            prevPage = {props.prevPage}
            nextPage = {props.nextPage}
            firstPage = {props.firstPage}
            lastPage = {props.lastPage}
            totalPages = {props.totalPages}
            getCurrentPage = {props.getCurrentPage}
            handlePage = {props.handlePage}
            currentPage = {props.currentPage}
            handleFirstAndLastPage = {props.handleFirstAndLastPage}/>   
      </CardBody>
    </Card>
  </div>
  );
}

AssetMgmtUserTableCard.propTypes = {};

export default AssetMgmtUserTableCard;
