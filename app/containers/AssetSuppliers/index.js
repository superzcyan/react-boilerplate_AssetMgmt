/**
 *
 * AssetSuppliers
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectModelItems, 
  makeSelectModelTitle,
  makeSelectModelId,
  makeSelectStoredItems,
  makeSelectAllStoredItems,
  makeSelectAddItemModalShow, 
  makeSelectNewItemName, 
  makeSelectAddSuccess,
  makeSelectItemId,
  makeSelectItemName,
  makeSelectItemToEdit,
  makeSelectEditItemModalShow,
  makeSelectTotalPages,
  makeSelectPageMove,
  makeSelectPrevPage,
  makeSelectFirstPage,
  makeSelectLastPage,
  makeSelectNextPage,
  makeSelectCurrentpage,
  makeSelectUpdateSuccess,
  makeSelectUpdateFailed,
  makeSelectErrorMessage,
  makeSelectAlertModalShow,
  makeSelectAlertMessage,
  makeSelectNotFound, } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Container} from 'shards-react';
import AssetMgmtTableCard from 'components/AssetMgmtTableCard';
import AssetMgmtEditModelItemForm from 'components/AssetMgmtEditModelItemForm';
import { modelTableHeader } from '../../components/AssetMgmtItemTable/tableHeaders';
import { getModelItems,
  getModelId,
  saveNewModelItem,
  showAddItemModal,
  hideAddItemModal, 
  getNewItemName, 
  getItemId, 
  getItemName, 
  showEditItemModal, 
  hideEditItemModal, 
  getEditedItemName, 
  saveEditedItem,
  getCurrentPage,
  handlePage,
  handleFirstAndLastPage,
  dismissAlertModal,} from './actions';

export function AssetSuppliers({
  modelItems = [],
  noItemFound,
  getModelId,
  addItemModalShow = false,
  headerName = "Suppliers",
  placeHolder = "Supplier Name",
  showAddItemModal,
  hideAddItemModal,
  getNewItemName,
  saveNewCategoryItem,
  itemName = '',
  getItemId,
  GetItemToEdit,
  OnLoadModelItems,
  HideEditItemModal,
  editItemModalShow = false,
  errorMessage = '',
  GetEditedItemName,
  SaveEditedModelItem,
  totalPages = 0,
  currentPage = 1,
  prevPage = false,
  nextPage = false,
  firstPage = false,
  lastPage = false,
  getCurrentPage,
  handlePage,
  handleFirstAndLastPage,
  alertModalShow = false,
  alertMessage = '',
  dismissAlertModal,
}) {
  useInjectReducer({ key: 'assetSuppliers', reducer });
  useInjectSaga({ key: 'assetSuppliers', saga });
  useEffect(()=>{
    OnLoadModelItems();
  },[])

  return (
    <div className="main-content-container px-2 py-2 container-fluid">      
      <Container className="d-flex justify-content-center"> 
        <AssetMgmtTableCard 
          cardStyle = {{width: '30em'}}
          cardTitle = "Suppliers"
          modelName = "Suppliers"
          modelItems = {modelItems}
          tableHeaders = {modelTableHeader}
          getModelId = {getModelId}
          noItemFound = {noItemFound}
          //Add modal
          headerName = {headerName}
          placeHolder = {placeHolder}
          showAddItemModal = {showAddItemModal}
          addItemModalShow = {addItemModalShow}
          hideAddItemModal = {hideAddItemModal}
          getNewItemName = {getNewItemName}
          saveNewModelItem = {saveNewCategoryItem}
          errorMessage = {errorMessage}
          //Edit
          getItemId = {getItemId}
          GetItemToEdit = {GetItemToEdit}
          //Pagination
          totalPages = {totalPages}
          currentPage = {currentPage}
          prevPage = {prevPage}
          nextPage = {nextPage}
          firstPage = {firstPage}
          lastPage = {lastPage}
          getCurrentPage= {getCurrentPage}
          handlePage={handlePage}
          handleFirstAndLastPage={handleFirstAndLastPage}
          //Alerts
          alertModalShow = {alertModalShow}
          alertMessage = {alertMessage}
          dismissAlertModal = {dismissAlertModal}/>  
          <AssetMgmtEditModelItemForm  
            headerName = {itemName}
            editItemModalShow = {editItemModalShow}              
            defaultValue = {itemName}
            getEditedItem = {GetEditedItemName}
            saveEditedModelItem = {SaveEditedModelItem}
            hideEditItemModal = {HideEditItemModal}
            errorMessage = {errorMessage}/>             
        </Container>      
    </div>
  );
}

AssetSuppliers.propTypes = {  
  modelItems: PropTypes.array,
  modelTitle: PropTypes.string,
  OnLoadModelItems: PropTypes.func,
  showAddItemModal: PropTypes.func,
  hideAddItemModal: PropTypes.func,
  getNewItemName: PropTypes.func,
  saveNewModelItem: PropTypes.func,  
  GetItemToEdit: PropTypes.func,
  itemId: PropTypes.string,
  itemToEdit: PropTypes.array,
  getItemId: PropTypes.func,
  errorMessage: PropTypes.any,
  itemName: PropTypes.string,
  HideEditItemModal: PropTypes.func,
  SaveEditedItem: PropTypes.func,
  totalPages: PropTypes.number,
  getCurrentPage: PropTypes.func,
  firstPage: PropTypes.bool,
  nextPage: PropTypes.bool,
  lastPage: PropTypes.bool,
  prevPage: PropTypes.bool,
  handlePage: PropTypes.func,
  handleFirstAndLastPage: PropTypes.func,
  dismissAlertModal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  modelItems: makeSelectModelItems(),
  modelTitle: makeSelectModelTitle(),
  modelId: makeSelectModelId(),
  storedModelItems: makeSelectStoredItems(),
  storedAllModelItems: makeSelectAllStoredItems(),
  addItemModalShow: makeSelectAddItemModalShow(),
  newItemName: makeSelectNewItemName(),
  successResponse: makeSelectAddSuccess(),
  itemId: makeSelectItemId(),
  itemToEdit: makeSelectItemToEdit(),
  itemName: makeSelectItemName(),
  editItemModalShow: makeSelectEditItemModalShow(),
  successResponse: makeSelectUpdateSuccess(),
  failedResponse: makeSelectUpdateFailed(),
  errorMessage: makeSelectErrorMessage(),
  totalPages: makeSelectTotalPages(),
  currentPage: makeSelectCurrentpage(),
  nextPage: makeSelectNextPage(),
  prevPage: makeSelectPrevPage(),
  firstPage: makeSelectFirstPage(),
  lastPage: makeSelectLastPage(),
  pageMove: makeSelectPageMove(),
  alertModalShow: makeSelectAlertModalShow(),
  alertMessage: makeSelectAlertMessage(),
  noItemFound: makeSelectNotFound(),
});

function mapDispatchToProps(dispatch) {
  return {
    OnLoadModelItems: event => dispatch(getModelItems()),
    getModelId: event => dispatch(getModelId(event.target.value)),
    //Add
    showAddItemModal: event => dispatch(showAddItemModal()),
    hideAddItemModal: event => dispatch(hideAddItemModal()),
    getNewItemName: event => dispatch(getNewItemName(event.target.value)),
    saveNewCategoryItem: event => {event.preventDefault(), dispatch(saveNewModelItem()), dispatch(getModelItems())},
    //Edit
    GetItemToEdit: event => {dispatch(getItemId(event.target.id)),
      dispatch(getItemName(event.target.value)),
      dispatch(showEditItemModal())},   
    getItemId: event => dispatch(getItemId(event.target.value)),
    GetEditedItemName: event => dispatch(getEditedItemName(event.target.value)),
    HideEditItemModal: event => {dispatch(hideEditItemModal())},
    SaveEditedModelItem: event => {event.preventDefault(), dispatch(saveEditedItem())},
    //Pagination Functions
    getCurrentPage: event => dispatch(getCurrentPage(event.target.value)),
    handlePage: event => dispatch(handlePage(event.target.name)),
    handleFirstAndLastPage: event => dispatch(handleFirstAndLastPage(event.target.name)),
    dismissAlertModal: event => dispatch(dismissAlertModal()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AssetSuppliers);
