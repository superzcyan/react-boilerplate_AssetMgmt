/**
 *
 * AssetMgmtPagination
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Form, Pagination, Card} from 'react-bootstrap';


function AssetMgmtPagination(props,{
  generatePageNumber,
}) {
  generatePageNumber=()=>{
    const pageNumbers = []; 
    for (let i = 1; i <= props.totalPages; i++) {           
            pageNumbers.push(i)           
      }           
      return(
        pageNumbers.map(number=>{
          return(                 
              <option key={number} id={number}>{number}</option>
              )
          })
      )
    }
    console.log(props.nextPage)
  return (
    <div className="">   
      <Pagination className="d-flex justify-content-center align-items-center mt-2">
        <Pagination.Item title={props.modelTitle}  disabled = {props.firstPage} onClick = {props.handleFirstAndLastPage} name="first">First</Pagination.Item> 
        <Pagination.Item title={props.modelTitle}  disabled = {props.prevPage} onClick = {props.handlePage} name="prev">Prev</Pagination.Item>  
        <Form.Control style={{maxWidth:'100px'}} title={props.modelTitle} value={props.currentPage} onChange={props.getCurrentPage} className= "w-25" as="select">{generatePageNumber()}</Form.Control>
        <Pagination.Item title={props.modelTitle}  disabled = {props.nextPage} onClick = {props.handlePage} name="next">Next</Pagination.Item>
        <Pagination.Item title={props.modelTitle}  disabled = {props.lastPage} onClick = {props.handleFirstAndLastPage} name="last">Last</Pagination.Item>
      </Pagination>
    </div>   
  );
}

AssetMgmtPagination.propTypes = {};

export default AssetMgmtPagination;
