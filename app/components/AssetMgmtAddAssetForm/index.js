/**
 *
 * AssetMgmtAddAssetForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Form, FormInput, FormGroup, FormSelect, FormTextarea , Col, Button, Row, } from "shards-react";
import { Accordion } from 'react-bootstrap';

function AssetMgmtAddAssetForm(props) {
 
  const list = value =>(
    <React.Fragment key={value.id||value.value}>
      <option id={value.id||value.value}>{value.name}</option>
    </React.Fragment> 
  );
  const sizes = value =>(
    <React.Fragment key={value.id}>
      <option id={value.id}>{value.size}</option>
    </React.Fragment> 
  );
  
  return (
    <div>      
      <Form style={props.formStyle} >        
        <FormGroup>
          <Row>
            <Col>
              <label className ="required">Asset Name</label>
              <FormInput required name="name" placeholder="Asset Name" readOnly={false}
                  onChange={props.OnChangeName } />                                        
              <label className ="required">Asset Tag</label>                    
                  <FormInput required name="assetTag" readOnly={false} placeholder="IT Asset Tag"
                    onChange={props.OnChangeAssetTag } />                                              
              <label className ="required">Model</label>
                  <FormSelect required name="modelId" disabled={props.assetFormsReadOnly}                         
                      onChange={props.OnChangeModelId }>
                      {props.allItems[2].data.list.map(list)}
                      </FormSelect>            
            </Col> 
            <Col>                         
              <label className ="required">Status</label>    
              <FormSelect required name="status" 
                  disabled={props.assetFormsReadOnly}
                  onChange={props.OnChangeStatusId }>
                  {props.allItems[9].data.map(list)}
              </FormSelect>    
              <label>Assigned To</label>                                               
              <FormInput  name="assignedTo" placeholder="Assigned To" readOnly={false}
                  onChange={props.OnChangeAssignedTo } />
              <label>Category</label>                        
                  <FormSelect  name="categoryId" disabled={props.assetFormsReadOnly}     
                      onChange={props.OnChangeCategoryId}>
                      <option value="">Select Category</option>
                      {props.allItems[0].data.list.map(list)}                               
                  </FormSelect> 
            </Col>
          </Row>                                        
        </FormGroup>
        <FormGroup>  
              <Row>
                <Col>                
                  <label>Manufacturer</label>
                    <FormSelect   name="manufacturerId" 
                      disabled={props.assetFormsReadOnly}
                      onChange={props.OnChangeManufacturerId }>
                      <option value="">Select Manufacturer</option>
                      {props.allItems[1].data.list.map(list)}
                      </FormSelect>                                                 
                  <label>Supplier Name</label>
                    <FormSelect name="supplierId" 
                      disabled={props.assetFormsReadOnly}
                      onChange={props.OnChangeSupplierId}>
                      <option value="">Select Supplier</option>
                      {props.allItems[4].data.list.map(list)}
                    </FormSelect>                                                  
                  <label>Warranty</label>
                    <FormInput   name="warranty" placeholder="Warranty" readOnly={false}
                      onChange={props.OnChangeWarranty } />                  
                  <label>Serial No.</label>
                    <FormInput   name="serialNo" placeholder="Serial No "readOnly={false}
                      onChange={props.OnChangeSINo } />             
                </Col>                
                <Col>
                  <label>Battery Serial No.</label>
                      <FormInput   name="battery" placeholder="Battery Serial No" readOnly={false}
                      onChange={props.OnChangeBattery } />
                  <label>Adapter Serial No.</label>
                      <FormInput  name="adapter" placeholder="Adapter Serial No." readOnly={false}
                      onChange={props.OnChangeAdapter } />
                  <label>MAC Address</label>
                      <FormInput   name="macAddress" placeholder="192.168.0.0"readOnly={false}
                      onChange={props.OnChangeMacAdd } />
                  <label>IP Address</label>
                      <FormInput   name="ipAddress" placeholder="192.168.0.0" readOnly={false}
                      onChange={props.OnChangeIPAdd } />
                </Col>
                <Col>
                  <label>Processor</label>
                      <FormSelect  name="processorId" 
                          disabled={props.assetFormsReadOnly}
                          onChange={props.OnChangeProcessorId }>
                          <option value="">Select Processor</option>
                          {props.allItems[3].data.list.map(list)}
                          </FormSelect>
                  <label>Memory</label>
                      <FormSelect   name="memoryId" 
                          disabled={props.assetFormsReadOnly}
                          onChange={props.OnChangeMemoryId}>
                          <option value="">Select Memory</option>
                          {props.allItems[7].data.list.map(sizes)}
                          </FormSelect>
                  <label>Video Card</label>
                      <FormSelect   name="videoCardId"
                          disabled={props.assetFormsReadOnly}
                          onChange={props.OnChangeVideoCardId }>
                          <option value="">Select Video Card</option>
                          {props.allItems[8].data.list.map(sizes)}
                          </FormSelect>
                  <label>Hard Disk</label>
                      <FormSelect   name="hardDiskId" 
                          disabled={props.assetFormsReadOnly}
                          onChange={props.OnChangeHardDiskId }>
                          <option value="">Select Hard Disk</option>
                          {props.allItems[6].data.list.map(sizes)}
                          </FormSelect>
                </Col>                        
              </Row>           
        </FormGroup>  
        <FormGroup>     
            <Row>
              <Col>
                <label>PO No.</label>
                    <FormInput   name="poNo" placeholder="PO No" readOnly={false}
                    onChange={props.OnChangePONo } />
                <label>DR No.</label>
                    <FormInput   name="drNo" placeholder="DR No"readOnly={false}
                    onChange={props.OnChangeDRNo } />
                <label>SI No</label>
                    <FormInput   name="siNo" placeholder="SI No" readOnly={false}
                    onChange={props.handleAssetChangeGetVal} />          
              </Col>               
              <Col>                        
                <label>Purchase Date</label>
                    <FormInput type="datetime-local" name="purchaseDate" readOnly={false}
                    onChange={props.OnChangePurchaseDate } />
                <label>Delivery Date</label>
                    <FormInput type="datetime-local" name="deliveryDate"  readOnly={false}
                    onChange={props.OnChangeDeliveryDate  } /> 
                <label>Purchase Cost</label>
                    <FormInput   name="purchaseCost" placeholder="0.00" readOnly={false}
                    onChange={props.OnChangePurchaseCost } />
              </Col>
            </Row>
          <label>Notes</label>
            <FormTextarea name="notes"  placeholder="Notes" placeholder="Notes" readOnly={false}
            onChange={props.handleAssetChangeGetVal}/>
            <div className="invalid-feedback d-block text-right">                           
              {props.errorMessage}
            </div>
          </FormGroup> 
          
        <Button block theme="primary" type="submit" onClick={props.saveNewAssetItem} >
          Save
        </Button>
        <Button block theme="secondary" onClick={props.hideAddAssetModalView}>
          Close
        </Button>                         
      </Form>
    </div>
  );
}

AssetMgmtAddAssetForm.propTypes = {};

export default AssetMgmtAddAssetForm;
