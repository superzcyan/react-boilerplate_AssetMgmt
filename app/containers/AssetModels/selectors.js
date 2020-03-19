import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetModels state domain
 */

const selectAssetModelsDomain = state => state.assetModels || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetModels
 */

const makeSelectModelTitle = () =>
createSelector(
  selectAssetModelsDomain,
  assetModelState => assetModelState.modelTitle,
);

const makeSelectModelItems = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.modelItems,
  );
  
const makeSelectModelId = () =>
  createSelector (
    selectAssetModelsDomain,
    assetModelState => assetModelState.modelId
  )
const makeSelectStoredItems = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.storedModelItems,
  );
const makeSelectAllStoredItems = () =>
  createSelector (
    selectAssetModelsDomain,
    assetModelState => assetModelState.storedAllModelItems,
  )
//Add

const makeSelectAddItemModalShow = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.addItemModalShow,
  );
const makeSelectNewItemName = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.newItemName,
  )

const makeSelectAddSuccess = () =>
createSelector (
  selectAssetModelsDomain,
  assetHomeModalState => assetHomeModalState.successResponse
)
const makeSelectAddFailed = () =>
createSelector (
  selectAssetModelsDomain,
  assetHomeModalState => assetHomeModalState.failedResponse
)
//Edit
const makeSelectItemId = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.itemId,
  )
const makeSelectItemToEdit = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.itemToEdit,
  )
const makeSelectItemName = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.itemName,
  )
const makeSelectEditItemModalShow = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.editItemModalShow,
  )
const makeSelectEditedItemName = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.editedItemName,
  )
const makeSelectUpdateSuccess = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.successResponse,
  )
const makeSelectUpdateFailed = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.failedResponse,
  )
const makeSelectErrorMessage = () =>
  createSelector(
    selectAssetModelsDomain,
    assetModelState => assetModelState.errorMessage,
  )
  //Pagination
  const makeSelectTotalPages = () =>
  createSelector (
    selectAssetModelsDomain,
    assetHomeModalState => assetHomeModalState.totalPages
  )
  const makeSelectCurrentpage = () =>
  createSelector (
    selectAssetModelsDomain,
    assetHomeModalState => assetHomeModalState.currentPage
  )
  const makeSelectPrevPage = () =>
  createSelector (
    selectAssetModelsDomain,
    assetHomeModalState => assetHomeModalState.prevPage
  )
  const makeSelectNextPage = () =>
  createSelector (
    selectAssetModelsDomain,
    assetHomeModalState => assetHomeModalState.nextPage
  )
  const makeSelectFirstPage = () =>
  createSelector (
    selectAssetModelsDomain,
    assetHomeModalState => assetHomeModalState.firstPage
  )
  const makeSelectLastPage = () =>
  createSelector (
    selectAssetModelsDomain,
    assetHomeModalState => assetHomeModalState.lastPage
  )
  const makeSelectPageMove = () =>
  createSelector (
    selectAssetModelsDomain,
    assetHomeModalState => assetHomeModalState.pageMove
  )
  const makeSelectAlertMessage = () =>
  createSelector (
    selectAssetModelsDomain,
    assetHomeModalState => assetHomeModalState.alertMessage
  )
  const makeSelectAlertModalShow = () =>
  createSelector (
    selectAssetModelsDomain,
    assetHomeModalState => assetHomeModalState.alertModalShow
  )
  const makeSelectNotFound = () =>
  createSelector (
    selectAssetModelsDomain,
    assetHomeModalState => assetHomeModalState.noItemFound
  )
export { selectAssetModelsDomain,
          makeSelectModelTitle,
          makeSelectModelItems,
          makeSelectModelId,
          makeSelectNotFound,
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
