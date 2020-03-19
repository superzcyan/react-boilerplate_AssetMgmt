import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetMemory state domain
 */

const selectAssetMemoryDomain = state => state.assetMemory || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetMemory
 */

const makeSelectModelTitle = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.modelTitle,
  );

const makeSelectModelItems = () =>
    createSelector(
      selectAssetMemoryDomain,
      assetMemoryState => assetMemoryState.modelItems,
    );
const makeSelectStoredItems = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.storedModelItems,
  );
const makeSelectAllStoredItems = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.storedAllModelItems,
  )
const makeSelectModelId = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.modelId
  )

//Add  
const makeSelectAddItemModalShow = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.addItemModalShow,
  );
const makeSelectNewItemName = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.newItemName,
  )

const makeSelectAddSuccess = () =>
createSelector (
  selectAssetMemoryDomain,
  assetHomeModalState => assetHomeModalState.successResponse
)
const makeSelectAddFailed = () =>
createSelector (
  selectAssetMemoryDomain,
  assetHomeModalState => assetHomeModalState.failedResponse
)
//Edit
const makeSelectItemId = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.itemId,
  )
const makeSelectItemToEdit = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.itemToEdit,
  )
const makeSelectItemName = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.itemName,
  )
const makeSelectEditItemModalShow = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.editItemModalShow,
  )
const makeSelectEditedItemName = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.editedItemName,
  )
const makeSelectUpdateSuccess = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.successResponse,
  )
const makeSelectUpdateFailed = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.failedResponse,
  )
const makeSelectErrorMessage = () =>
  createSelector(
    selectAssetMemoryDomain,
    assetMemoryState => assetMemoryState.errorMessage,
  )
  //Pagination
  const makeSelectTotalPages = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetHomeModalState => assetHomeModalState.totalPages
  )
  const makeSelectCurrentpage = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetHomeModalState => assetHomeModalState.currentPage
  )
  const makeSelectPrevPage = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetHomeModalState => assetHomeModalState.prevPage
  )
  const makeSelectNextPage = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetHomeModalState => assetHomeModalState.nextPage
  )
  const makeSelectFirstPage = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetHomeModalState => assetHomeModalState.firstPage
  )
  const makeSelectLastPage = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetHomeModalState => assetHomeModalState.lastPage
  )
  const makeSelectPageMove = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetHomeModalState => assetHomeModalState.pageMove
  )
  const makeSelectAlertMessage = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetHomeModalState => assetHomeModalState.alertMessage
  )
  const makeSelectAlertModalShow = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetHomeModalState => assetHomeModalState.alertModalShow
  )
  const makeSelectNotFound = () =>
  createSelector (
    selectAssetMemoryDomain,
    assetHomeModalState => assetHomeModalState.noItemFound
  )
  export { selectAssetMemoryDomain,
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
