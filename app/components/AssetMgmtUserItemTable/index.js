/**
 *
 * AssetMgmtUserItemTable
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Button } from 'shards-react';
import { Table } from 'react-bootstrap';

function AssetMgmtUserItemTable(props,{
  generateUsersItemsTable,
  generateModelItemsTableHeaders,
}) {
  
  generateUsersItemsTable =() =>{
    return(
      props.modelItems.map(users=>{
        return(
          <tr style={{textAlign:'center', fontSize:'12px'}} key={users.id} id={users.id}>
            <td>{users.id}</td>
            <td>{users.fullName}</td>
            <td>{users.userName}</td>
            <td>
              <Button className='mr-1' outline theme="warning"
                id = {users.id}
                title = {users.fullName}
                name = {users.userName}
                onClick = {props.showEditUserModal}>
                Edit
              </Button>
            </td>
          </tr>
        )
      })
    )
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

  return (
    <Table className="table mb-0" responsive hover >
      <thead className="bg-light">
        <tr className='text-nowrap' style={{textAlign:'center', fontSize:'14px'}}>
          {generateModelItemsTableHeaders()}              
        </tr>
      </thead>
        <tbody>      
          {generateUsersItemsTable()}                   
        </tbody>               
    </Table>  
  );
}

AssetMgmtUserItemTable.propTypes = {};

export default AssetMgmtUserItemTable;
