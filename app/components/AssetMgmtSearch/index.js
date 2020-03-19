/**
 *
 * AssetMgmtSearch
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Form, FormInput, FormGroup } from "shards-react";

function AssetMgmtSearch(props) {
  return (
    <FormGroup className="form-inline">
      <label className="mr-1" style={{fontSize:'13px'}}>Search by:</label>
        <FormInput style={props.searchWidth}               
        placeholder={props.placeHolder}
        onChange={props.getKeyword}/>
    </FormGroup>
  );
}

AssetMgmtSearch.propTypes = {};

export default AssetMgmtSearch;
