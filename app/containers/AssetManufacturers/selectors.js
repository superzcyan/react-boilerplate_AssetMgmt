import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetManufacturers state domain
 */

const selectAssetManufacturersDomain = state =>
  state.assetManufacturers || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetManufacturers
 */
const makeSelectModelTitle = () =>
createSelector(
  selectAssetManufacturersDomain,
  AssetManufacturersState => AssetManufacturersState.modelTitle,
);

const makeSelectModelItems = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.modelItems,
  );
const makeSelectModelId = () =>
  createSelector (
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.modelId
  )
const makeSelectStoredItems = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.storedModelItems,
  );
const makeSelectAllStoredItems = () =>
  createSelector (
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.storedAllModelItems,
  )
//Add

const makeSelectAddItemModalShow = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.addItemModalShow,
  );
const makeSelectNewItemName = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.newItemName,
  )

const makeSelectAddSuccess = () =>
createSelector (
  selectAssetManufacturersDomain,
  assetHomeModalState => assetHomeModalState.successResponse
)
const makeSelectAddFailed = () =>
createSelector (
  selectAssetManufacturersDomain,
  assetHomeModalState => assetHomeModalState.failedResponse
)
//Edit
const makeSelectItemId = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.itemId,
  )
const makeSelectItemToEdit = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.itemToEdit,
  )
const makeSelectItemName = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.itemName,
  )
const makeSelectEditItemModalShow = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.editItemModalShow,
  )
const makeSelectEditedItemName = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.editedItemName,
  )
const makeSelectUpdateSuccess = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.successResponse,
  )
const makeSelectUpdateFailed = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.failedResponse,
  )
const makeSelectErrorMessage = () =>
  createSelector(
    selectAssetManufacturersDomain,
    AssetManufacturersState => AssetManufacturersState.errorMessage,
  )
  //Pagination
  const makeSelectTotalPages = () =>
  createSelector (
    selectAssetManufacturersDomain,
    assetHomeModalState => assetHomeModalState.totalPages
  )
  const makeSelectCurrentpage = () =>
  createSelector (
    selectAssetManufacturersDomain,
    assetHomeModalState => assetHomeModalState.currentPage
  )
  const makeSelectPrevPage = () =>
  createSelector (
    selectAssetManufacturersDomain,
    assetHomeModalState => assetHomeModalState.prevPage
  )
  const makeSelectNextPage = () =>
  createSelector (
    selectAssetManufacturersDomain,
    assetHomeModalState => assetHomeModalState.nextPage
  )
  const makeSelectFirstPage = () =>
  createSelector (
    selectAssetManufacturersDomain,
    assetHomeModalState => assetHomeModalState.firstPage
  )
  const makeSelectLastPage = () =>
  createSelector (
    selectAssetManufacturersDomain,
    assetHomeModalState => assetHomeModalState.lastPage
  )
  const makeSelectPageMove = () =>
  createSelector (
    selectAssetManufacturersDomain,
    assetHomeModalState => assetHomeModalState.pageMove
  )
  const makeSelectAlertMessage = () =>
  createSelector (
    selectAssetManufacturersDomain,
    assetHomeModalState => assetHomeModalState.alertMessage
  )
  const makeSelectAlertModalShow = () =>
  createSelector (
    selectAssetManufacturersDomain,
    assetHomeModalState => assetHomeModalState.alertModalShow
  )
  const makeSelectNotFound = () =>
  createSelector (
    selectAssetManufacturersDomain,
    assetHomeModalState => assetHomeModalState.noItemFound
  )
export { selectAssetManufacturersDomain,
          makeSelectModelTitle,
          makeSelectModelId,
          makeSelectNotFound,
          makeSelectModelItems,
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
