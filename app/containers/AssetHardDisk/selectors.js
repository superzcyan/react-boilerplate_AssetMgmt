import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetHardDisk state domain
 */

const selectAssetHardDiskDomain = state => state.assetHardDisk || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetHardDisk
 */
const makeSelectModelTitle = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.modelTitle
  );
const makeSelectModelItems = () =>
    createSelector(
      selectAssetHardDiskDomain,
      assetSizesHardDiskState => assetSizesHardDiskState.modelItems,
    );
const makeSelectModelId = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.modelId
)
const makeSelectStoredItems = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.storedModelItems,
  );
const makeSelectAllStoredItems = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.storedAllModelItems,
  )
//Add  
const makeSelectAddItemModalShow = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.addItemModalShow,
  );
const makeSelectNewItemName = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.newItemName,
  )

const makeSelectAddSuccess = () =>
createSelector (
  selectAssetHardDiskDomain,
  assetHomeModalState => assetHomeModalState.successResponse
)
const makeSelectAddFailed = () =>
createSelector (
  selectAssetHardDiskDomain,
  assetHomeModalState => assetHomeModalState.failedResponse
)
//Edit
const makeSelectItemId = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.itemId,
  )
const makeSelectItemToEdit = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.itemToEdit,
  )
const makeSelectItemName = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.itemName,
  )
const makeSelectEditItemModalShow = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.editItemModalShow,
  )
const makeSelectEditedItemName = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.editedItemName,
  )
const makeSelectUpdateSuccess = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.successResponse,
  )
const makeSelectUpdateFailed = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.failedResponse,
  )
const makeSelectErrorMessage = () =>
  createSelector(
    selectAssetHardDiskDomain,
    assetSizesHardDiskState => assetSizesHardDiskState.errorMessage,
  )
  //Pagination
  const makeSelectTotalPages = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetHomeModalState => assetHomeModalState.totalPages
  )
  const makeSelectCurrentpage = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetHomeModalState => assetHomeModalState.currentPage
  )
  const makeSelectPrevPage = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetHomeModalState => assetHomeModalState.prevPage
  )
  const makeSelectNextPage = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetHomeModalState => assetHomeModalState.nextPage
  )
  const makeSelectFirstPage = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetHomeModalState => assetHomeModalState.firstPage
  )
  const makeSelectLastPage = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetHomeModalState => assetHomeModalState.lastPage
  )
  const makeSelectPageMove = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetHomeModalState => assetHomeModalState.pageMove
  )
  const makeSelectAlertMessage = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetHomeModalState => assetHomeModalState.alertMessage
  )
  const makeSelectAlertModalShow = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetHomeModalState => assetHomeModalState.alertModalShow
  )
  const makeSelectNotFound = () =>
  createSelector (
    selectAssetHardDiskDomain,
    assetHomeModalState => assetHomeModalState.noItemFound
  )
  export { selectAssetHardDiskDomain,
            makeSelectModelTitle,
            makeSelectModelItems,
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
            makeSelectAlertModalShow,
            makeSelectNotFound,};