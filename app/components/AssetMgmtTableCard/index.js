/**
 *
 * AssetMgmtTableCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import AssetMgmtItemTable from 'components/AssetMgmtItemTable';
import AssetMgmtPagination from 'components/AssetMgmtPagination';
import AssetMgmtAddModelItemForm from 'components/AssetMgmtAddModelItemForm';
import { Card, CardBody, Form, FormGroup} from 'shards-react';
import AssetMgmtSearch from '../AssetMgmtSearch';
import AssetMgmtFilterSort from '../AssetMgmtFilterSort';
import AssetMgmtAlerts from '../AssetMgmtAlerts';

function AssetMgmtTableCard(props) {  
  
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
      <div className="d-flex justify-content-between">
        <FormGroup className="form-inline">
          <AssetMgmtSearch
            searchWidth = {{width:"100px"}}
            placeHolder= {'ID Number'}
            getKeyword = {props.getModelId}/>
        </FormGroup>
        <AssetMgmtAddModelItemForm
          headerName = {props.headerName}
          placeHolder = {props.placeHolder}
          showAddItemModal = {props.showAddItemModal}
          addItemModalShow = {props.addItemModalShow}
          hideAddItemModal = {props.hideAddItemModal}
          getNewItemName = {props.getNewItemName}
          saveNewModelItem = {props.saveNewModelItem}
          errorMessage = {props.errorMessage}
          alertModalShow = {props.alertModalShow}
          alertMessage = {props.alertMessage}
          dismissAlertModal = {props.dismissAlertModal} />
        </div>
        <AssetMgmtItemTable
          tableHeaders = {props.tableHeaders}
          modelName = {props.modelName}
          modelItems={props.modelItems}
          OnClickOpenModal={props.OnClickOpenModal}
          GetItemToEdit = {props.GetItemToEdit}
          noItemFound ={props.noItemFound}/>
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
AssetMgmtTableCard.propTypes = {
 
};

export default AssetMgmtTableCard;
