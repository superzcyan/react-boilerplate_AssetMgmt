/**
 *
 * AssetMgmtAssetInfoForms
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Form, FormInput, FormGroup, FormSelect, FormTextarea , Col, Button, Row, } from "shards-react";
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AssetMgmtAssetInfoForms (props) {
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
      <Form style={props.formStyle} onSubmit={props.OnSaveUpdatedAssetInfo} >        
        <FormGroup>
          {/* <Row>
            <Col >
             <label >Asset Id</label>
              <FormInput className="w-25"  name="id" defaultValue={props.itemToEdit.id} readOnly={false}
                  onChange={props.OnChange} />
            </Col>
          </Row> */}
          <Row>
            <Col>
              <label className ="required">Asset Name</label>
                <FormInput required name="name" defaultValue={props.itemToEdit.name} readOnly={false}
                  onChange={props.OnChangeName } />
              <label className ="required">Asset Tag</label>                    
                  <FormInput required name="assetTag" readOnly={false} defaultValue={props.itemToEdit.assetTag}
                    onChange={props.OnChangeAssetTag } />                            
              <label className ="required">Model</label>
                <FormSelect required name="modelId" disabled={props.assetFormsReadOnly}
                  defaultValue={props.itemToEdit.modelName}
                  onChange={props.OnChangeModelId }>
                  {props.allItems[2].data.list.map(list)}
                  </FormSelect> 
            </Col> 
            <Col>                         
              <label className ="required">Status</label>    
              <FormSelect required name="status" defaultValue={props.itemToEdit.statusType}
                  disabled={props.assetFormsReadOnly}
                  onChange={props.OnChangeStatusId }>
                  {props.allItems[9].data.map(list)}
              </FormSelect>    
              <label>Assigned To</label>                                               
              <FormInput  name="assignedTo" defaultValue={props.itemToEdit.assignedTo} readOnly={false}
                  onChange={props.OnChangeAssignedTo } />  
              <label>Category</label>                        
              <FormSelect  name="categoryId" disabled={props.assetFormsReadOnly}                                   
                  defaultValue={props.itemToEdit.categoryName} 
                  onChange={props.OnChangeCategoryId}>
                  <option value="">Select Category</option>
                  {props.allItems[0].data.list.map(list)}                               
              </FormSelect>
            </Col>
          </Row>                                        
        </FormGroup>
        <Accordion>
        <FormGroup> 
         
          <Accordion.Toggle className= "w-100 mb-2" theme="info" as={Button} eventKey="0">
            <a aria-expanded="false">Specification</a>
          </Accordion.Toggle>
         
            <Accordion.Collapse eventKey="0">                                        
              <Row>
                <Col>
                  <label>Manufacturer</label>
                      <FormSelect   name="manufacturerId" defaultValue={props.itemToEdit.manufacturerName}
                          disabled={props.assetFormsReadOnly}
                          onChange={props.OnChangeManufacturerId }>
                          <option value="">Select Manufacturer</option>
                          {props.allItems[1].data.list.map(list)}
                          </FormSelect>
                  <label>Supplier Name</label>
                    <FormSelect name="supplierId" defaultValue={props.itemToEdit.supplierName}
                      disabled={props.assetFormsReadOnly}
                      onChange={props.OnChangeSupplierId}>
                      <option value="">Select Supplier</option>
                      {props.allItems[4].data.list.map(list)}
                    </FormSelect>                                                
                  <label>Warranty</label>
                      <FormInput   name="warranty" defaultValue={props.itemToEdit.warranty} readOnly={false}
                        onChange={props.OnChangeWarranty } />
                  <label>Serial No.</label>
                    <FormInput   name="serialNo" defaultValue={props.itemToEdit.serialNo} readOnly={false}
                    onChange={props.OnChangeSINo } />                 
                </Col>
                <Col>
                  <label>Processor</label>
                      <FormSelect  name="processorId" defaultValue={props.itemToEdit.processorName}
                          disabled={props.assetFormsReadOnly}
                          onChange={props.OnChangeProcessorId }>
                          <option value="">Select Processor</option>
                          {props.allItems[3].data.list.map(list)}
                          </FormSelect>
                  <label>Memory</label>
                      <FormSelect   name="memoryId" defaultValue={props.itemToEdit.memorySize}
                          disabled={props.assetFormsReadOnly}
                          onChange={props.OnChangeMemoryId}>
                          <option value="">Select Memory</option>
                          {props.allItems[7].data.list.map(sizes)}
                          </FormSelect>
                  <label>Video Card</label>
                      <FormSelect   name="videoCardId" defaultValue={props.itemToEdit.videoCardSize}
                          disabled={props.assetFormsReadOnly}
                          onChange={props.OnChangeVideoCardId }>
                          <option value="">Select Video Card</option>
                          {props.allItems[8].data.list.map(sizes)}
                          </FormSelect>
                  <label>Hard Disk</label>
                      <FormSelect   name="hardDiskId" defaultValue={props.itemToEdit.hardDiskSize}
                          disabled={props.assetFormsReadOnly}
                          onChange={props.OnChangeHardDiskId }>
                          <option value="">Select Hard Disk</option>
                          {props.allItems[6].data.list.map(sizes)}
                          </FormSelect>
                </Col>
                <Col>
                  <label>Battery Serial No.</label>
                      <FormInput   name="battery" defaultValue={props.itemToEdit.battery} readOnly={false}
                      onChange={props.OnChangeBattery } />
                  <label>Adapter Serial No.</label>
                      <FormInput  name="adapter" defaultValue={props.itemToEdit.adapter} readOnly={false}
                      onChange={props.OnChangeAdapter } />
                  <label>MAC Address</label>
                      <FormInput   name="macAddress" defaultValue={props.itemToEdit.macAddress} readOnly={false}
                      onChange={props.OnChangeMacAdd } />
                  <label>IP Address</label>
                      <FormInput   name="ipAddress" defaultValue={props.itemToEdit.ipAddress} readOnly={false}
                      onChange={props.OnChangeIPAdd } />
                </Col>                        
              </Row>
            </Accordion.Collapse>
        </FormGroup>                
            
        <FormGroup>                
          <Accordion.Toggle className= "w-100 mb-2" theme="info" as={Button} eventKey="1">
              <a>Accounting</a> 
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">    
            <Row>
              <Col>
                <label>PO No.</label>
                    <FormInput   name="poNo" defaultValue={props.itemToEdit.poNo} readOnly={false}
                    onChange={props.OnChangePONo } />
                <label>DR No.</label>
                    <FormInput   name="drNo" defaultValue={props.itemToEdit.drNo} readOnly={false}
                    onChange={props.OnChangeDRNo } />
                <label>SI No</label>
                    <FormInput   name="siNo" defaultValue={props.itemToEdit.siNo} readOnly={false}
                    onChange={props.handleAssetChangeGetVal} />      
              </Col>               
              <Col>                        
                <label>Purchase Date</label>
                    <FormInput type="datetime-local" name="purchaseDate" defaultValue={props.itemToEdit.purchaseDate} readOnly={false}
                    onChange={props.OnChangePurchaseDate } />
                <label>Delivery Date</label>
                    <FormInput type="datetime-local" name="deliveryDate" defaultValue={props.itemToEdit.deliveryDate} readOnly={false}
                    onChange={props.OnChangeDeliveryDate  } /> 
                <label>Purchase Cost</label>
                    <FormInput   name="purchaseCost" defaultValue={props.itemToEdit.purchaseCost} readOnly={false}
                    onChange={props.OnChangePurchaseCost } />
              </Col>
            </Row>
            </Accordion.Collapse>
          </FormGroup>           
          <Accordion.Toggle className= "w-100 mb-2" theme="info" as={Button} eventKey="2">
            <a aria-expanded="false">Notes</a>   
          </Accordion.Toggle>
          <FormGroup>       
          <Accordion.Collapse eventKey="2"> 
            <FormTextarea name="notes"  placeholder="Notes" defaultValue={props.itemToEdit.notes} readOnly={false}
            onChange={props.handleAssetChangeGetVal}/>
          </Accordion.Collapse>
          </FormGroup>             
       </Accordion>       
            <div className="invalid-feedback d-block text-right mb-2">                           
                  {props.failedResponse}
            </div>
        
        <Button block theme="primary" type="submit" >
          Save
        </Button>
        <Button block theme="secondary" onClick={props.closeModal}>
          Close
        </Button>                         
      </Form>
    </div>
  );
}

AssetMgmtAssetInfoForms.propTypes = {};

export default AssetMgmtAssetInfoForms;
