/**
 *
 * AssetMgmtAssetTableCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import AssetMgmtItemTable from 'components/AssetMgmtItemTable';
import AssetMgmtPagination from 'components/AssetMgmtPagination';
import { Card, CardBody, Form, FormGroup} from 'shards-react';
import AssetMgmtSearch from '../AssetMgmtSearch';
import AssetMgmtFilterSort from '../AssetMgmtFilterSort';
import AssetMgmtAddAssetModal from '../AssetMgmtAddAssetModal';
import AssetMgmtAlerts from '../AssetMgmtAlerts';

function AssetMgmtAssetTableCard(props) {
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
          <FormGroup className="form-inline d-flex justify-content-between">
            <FormGroup>    
              <AssetMgmtSearch
                searchWidth = {{width:"200px"}}
                placeHolder= {'Keywords(at least 3 characters)'}
                onChangeSearch = {props.onChangeSearch}
                getKeyword = {props.getAssetKeyword}/>
              <div className="ml-2">
              <AssetMgmtSearch
                searchWidth = {{width:"150px"}}
                placeHolder= {'ID Number'}
                onChangeSearch = {props.onChangeSearch}
                getKeyword = {props.getAssetId}/>
                </div>
            </FormGroup>
              <AssetMgmtFilterSort
                allItems = {props.allItems}
                getOrderBy = {props.getOrderBy}
                getOrderType = {props.getOrderType} />
          </FormGroup>        
            <AssetMgmtItemTable
              tableHeaders = {props.tableHeaders}
              modelName = {props.modelName}
              modelItems={props.modelItems}
              OnClickOpenModal={props.OnClickOpenModal}
              GetItemToEdit = {props.GetItemToEdit}
              noItemFound = {props.noItemFound}/>
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

AssetMgmtAssetTableCard.propTypes = {};

export default AssetMgmtAssetTableCard;
