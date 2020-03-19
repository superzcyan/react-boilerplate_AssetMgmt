import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetSuppliers state domain
 */

const selectAssetSuppliersDomain = state =>
  state.assetSuppliers || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetSuppliers
 */

const makeSelectModelTitle = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.modelTitle,
  );
const makeSelectModelItems = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.modelItems,
  );
const makeSelectModelId = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.modelId
  )
const makeSelectStoredItems = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.storedModelItems,
  );
const makeSelectAllStoredItems = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.storedAllModelItems,
  )
//Add

const makeSelectAddItemModalShow = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.addItemModalShow,
  );
const makeSelectNewItemName = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.newItemName,
  )

const makeSelectAddSuccess = () =>
createSelector (
  selectAssetSuppliersDomain,
  assetHomeModalState => assetHomeModalState.successResponse
)
const makeSelectAddFailed = () =>
createSelector (
  selectAssetSuppliersDomain,
  assetHomeModalState => assetHomeModalState.failedResponse
)
//Edit
const makeSelectItemId = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.itemId,
  )
const makeSelectItemToEdit = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.itemToEdit,
  )
const makeSelectItemName = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.itemName,
  )
const makeSelectEditItemModalShow = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.editItemModalShow,
  )
const makeSelectEditedItemName = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.editedItemName,
  )
const makeSelectUpdateSuccess = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.successResponse,
  )
const makeSelectUpdateFailed = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.failedResponse,
  )
const makeSelectErrorMessage = () =>
  createSelector(
    selectAssetSuppliersDomain,
    assetSupplierState => assetSupplierState.errorMessage,
  )
  //Pagination
  const makeSelectTotalPages = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetHomeModalState => assetHomeModalState.totalPages
  )
  const makeSelectCurrentpage = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetHomeModalState => assetHomeModalState.currentPage
  )
  const makeSelectPrevPage = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetHomeModalState => assetHomeModalState.prevPage
  )
  const makeSelectNextPage = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetHomeModalState => assetHomeModalState.nextPage
  )
  const makeSelectFirstPage = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetHomeModalState => assetHomeModalState.firstPage
  )
  const makeSelectLastPage = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetHomeModalState => assetHomeModalState.lastPage
  )
  const makeSelectPageMove = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetHomeModalState => assetHomeModalState.pageMove
  )
  const makeSelectAlertMessage = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetHomeModalState => assetHomeModalState.alertMessage
  )
  const makeSelectAlertModalShow = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetHomeModalState => assetHomeModalState.alertModalShow
  )
  const makeSelectNotFound = () =>
  createSelector (
    selectAssetSuppliersDomain,
    assetHomeModalState => assetHomeModalState.noItemFound
  )
export { selectAssetSuppliersDomain,
          makeSelectModelTitle,
          makeSelectModelItems,
          makeSelectNotFound,
          makeSelectModelId,
          makeSelectStoredItems,
          makeSelectAllStoredItems,
          makeSelectAddItemModalShow,
          makeSelectNewItemName,
          makeSelectAddSuccess,
          makeSelectAddFailed,
          makeSelectItemId,
          makeSelectItemToEdit,
          makeSelectItemName,
          makeSelectEditItemModalShow,
          makeSelectEditedItemName,
          makeSelectTotalPages,
          makeSelectPrevPage,
          makeSelectNextPage,
          makeSelectFirstPage,
          makeSelectLastPage,
          makeSelectCurrentpage,
          makeSelectPageMove,
          makeSelectUpdateSuccess,
          makeSelectUpdateFailed,
          makeSelectErrorMessage,
          makeSelectAlertMessage,
          makeSelectAlertModalShow,};
