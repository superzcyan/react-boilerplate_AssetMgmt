/**
 *
 * AssetMgmtItemTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Button } from 'shards-react';
import { Table, } from 'react-bootstrap';


function AssetMgmtItemTable(props,{
  generateModelItemsTableData,
  generateAssetItemsTableData, 
  generateModelItemsTableHeaders, 
  generateUsersItemsTable, 
  generateTableBody,
}) {
  let modelName = props.modelName
  generateModelItemsTableData =() =>{
    console.log( props.modelItems)
    return(
        props.modelItems.map(modelItems=>{  
        return(
          <tr style={{textAlign:'center', fontSize:'12px'}} key={modelItems.id} id={modelItems.id}>
            <td>{modelItems.id}</td>
            <td>{modelItems.name || modelItems.size}</td>
            <td>
              <Button className='mr-1' outline theme="warning"
                 id={modelItems.id} value={modelItems.name||modelItems.size} onClick={props.GetItemToEdit}>Edit</Button>
            </td>
          </tr>
          )       
        }
      )
    );    
  }
  generateAssetItemsTableData =() =>{
    return(
      props.modelItems.map(assets=>{  
        return(
          <tr style={{textAlign:'center', fontSize:'12px'}} key={assets.id} id={assets.id}>
                <td>{assets.id}</td>
                <td>{assets.assetTag}</td>
                <td>{assets.serialNo}</td> 
                <td>{assets.name}</td>
                <td>{assets.statusType}</td>                   
                <td>{assets.manufacturerName}</td>
                <td>{assets.categoryName}</td>
                <td>
                  <Button className='mr-1' theme="info" id={assets.id}
                   onClick = {props.OnClickOpenModal}>
                    Info
                  </Button>
                </td>
            </tr>
            )       
          }
      )
    );    
  }

  generateModelItemsTableHeaders =() =>{
    return(
      props.tableHeaders.map((tableHeaders,i)=>{
        return(
          <th key={i}>{tableHeaders}</th>
        )
      })
    )
  }

  generateTableBody =()=>{
    if (modelName =='Assets' ) {
      return generateAssetItemsTableData()
    }
    else if (modelName =='Users') {
      return generateUsersItemsTable()
    }else{
      return generateModelItemsTableData()
    }
  }

  return (
    <div>
      <Table className="table mb-0" responsive hover >
        <thead className="bg-light">
          <tr className='text-nowrap' style={{textAlign:'center', fontSize:'14px'}}>
            {generateModelItemsTableHeaders()}              
          </tr>
        </thead>
          <tbody>      
            {generateTableBody()} 
                      
            {/* {modelName =='Assets' ? generateAssetItemsTableData() : generateModelItemsTableData()}  */}
          </tbody>               
      </Table> 
      <div className="invalid-feedback d-flex justify-content-center" style={{fontSize:"20px"}}>
        {props.noItemFound}
      </div>
    </div>
  );
}

AssetMgmtItemTable.propTypes = {
 
};

export default AssetMgmtItemTable;
