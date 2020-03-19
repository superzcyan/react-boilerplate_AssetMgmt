import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetProcessors state domain
 */

const selectAssetProcessorsDomain = state =>
  state.assetProcessors || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetProcessors
 */

const makeSelectModelTitle = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.modelTitle
  );
const makeSelectModelItems = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.modelItems,
  );
const makeSelectStoredItems = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.storedModelItems,
  );
const makeSelectAllStoredItems = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.storedAllModelItems,
  )
const makeSelectModelId = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.modelId
  )
//Add

const makeSelectAddItemModalShow = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.addItemModalShow,
  );
const makeSelectNewItemName = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.newItemName,
  )

const makeSelectAddSuccess = () =>
createSelector (
  selectAssetProcessorsDomain,
  assetHomeModalState => assetHomeModalState.successResponse
)
const makeSelectAddFailed = () =>
createSelector (
  selectAssetProcessorsDomain,
  assetHomeModalState => assetHomeModalState.failedResponse
)
//Edit
const makeSelectItemId = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.itemId,
  )
const makeSelectItemToEdit = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.itemToEdit,
  )
const makeSelectItemName = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.itemName,
  )
const makeSelectEditItemModalShow = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.editItemModalShow,
  )
const makeSelectEditedItemName = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.editedItemName,
  )
const makeSelectUpdateSuccess = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.successResponse,
  )
const makeSelectUpdateFailed = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.failedResponse,
  )
const makeSelectErrorMessage = () =>
  createSelector(
    selectAssetProcessorsDomain,
    assetProcessorsState => assetProcessorsState.errorMessage,
  )
  //Pagination
  const makeSelectTotalPages = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetHomeModalState => assetHomeModalState.totalPages
  )
  const makeSelectCurrentpage = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetHomeModalState => assetHomeModalState.currentPage
  )
  const makeSelectPrevPage = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetHomeModalState => assetHomeModalState.prevPage
  )
  const makeSelectNextPage = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetHomeModalState => assetHomeModalState.nextPage
  )
  const makeSelectFirstPage = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetHomeModalState => assetHomeModalState.firstPage
  )
  const makeSelectLastPage = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetHomeModalState => assetHomeModalState.lastPage
  )
  const makeSelectPageMove = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetHomeModalState => assetHomeModalState.pageMove
  )
  const makeSelectAlertMessage = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetHomeModalState => assetHomeModalState.alertMessage
  )
  const makeSelectAlertModalShow = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetHomeModalState => assetHomeModalState.alertModalShow
  )
  const makeSelectNotFound = () =>
  createSelector (
    selectAssetProcessorsDomain,
    assetHomeModalState => assetHomeModalState.noItemFound
  )
export { selectAssetProcessorsDomain,
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