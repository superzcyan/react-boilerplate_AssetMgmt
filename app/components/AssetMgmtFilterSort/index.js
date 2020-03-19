/**
 *
 * AssetMgmtFilterSort
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Form, FormInput, FormGroup, FormSelect } from "shards-react";

function AssetMgmtFilterSort(props) {
  const filterOrder = value =>(
    <React.Fragment key={value.value}>
      <option id={value.value}>{value.name}</option>
    </React.Fragment> 
  );
  return (
    <FormGroup className="form-inline">
      <label className="ml-2 mr-1" style={{fontSize:'13px'}}>Order by:</label>
        <FormSelect as="select" 
          onChange={props.getOrderBy}
          onClick={props.getOrderBy}>
            <option id = {0}>---</option>
            {props.allItems[10].data.map(filterOrder)}
        </FormSelect>
      <label className="ml-2 mr-1" style={{fontSize:'13px'}}>Order Type:</label>
        <FormSelect as="select"  
          name="orderType"
          onChange={props.getOrderType}
          onClick={props.getOrderType}>
            <option id = {0}>---</option>
            {props.allItems[11].data.map(filterOrder)}
        </FormSelect> 
    </FormGroup>
  );
}

AssetMgmtFilterSort.propTypes = {};

export default AssetMgmtFilterSort;
