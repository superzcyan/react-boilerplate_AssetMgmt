import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetVideoCard state domain
 */

const selectAssetVideoCardDomain = state =>
  state.assetVideoCard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetVideoCard
 */

const makeSelectModelTitle = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.modelTitle
  );
const makeSelectModelItems = () =>
    createSelector(
      selectAssetVideoCardDomain,
      assetVideoCardState => assetVideoCardState.modelItems,
    );
const makeSelectStoredItems = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.storedModelItems,
  );
const makeSelectAllStoredItems = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.storedAllModelItems,
  );
const makeSelectModelId = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.modelId
  )

//Add  
const makeSelectAddItemModalShow = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.addItemModalShow,
  );
const makeSelectNewItemName = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.newItemName,
  )

const makeSelectAddSuccess = () =>
createSelector (
  selectAssetVideoCardDomain,
  assetHomeModalState => assetHomeModalState.successResponse
)
const makeSelectAddFailed = () =>
createSelector (
  selectAssetVideoCardDomain,
  assetHomeModalState => assetHomeModalState.failedResponse
)
//Edit
const makeSelectItemId = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.itemId,
  )
const makeSelectItemToEdit = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.itemToEdit,
  )
const makeSelectItemName = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.itemName,
  )
const makeSelectEditItemModalShow = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.editItemModalShow,
  )
const makeSelectEditedItemName = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.editedItemName,
  )
const makeSelectUpdateSuccess = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.successResponse,
  )
const makeSelectUpdateFailed = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.failedResponse,
  )
const makeSelectErrorMessage = () =>
  createSelector(
    selectAssetVideoCardDomain,
    assetVideoCardState => assetVideoCardState.errorMessage,
  )
  //Pagination
  const makeSelectTotalPages = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetHomeModalState => assetHomeModalState.totalPages
  )
  const makeSelectCurrentpage = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetHomeModalState => assetHomeModalState.currentPage
  )
  const makeSelectPrevPage = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetHomeModalState => assetHomeModalState.prevPage
  )
  const makeSelectNextPage = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetHomeModalState => assetHomeModalState.nextPage
  )
  const makeSelectFirstPage = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetHomeModalState => assetHomeModalState.firstPage
  )
  const makeSelectLastPage = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetHomeModalState => assetHomeModalState.lastPage
  )
  const makeSelectPageMove = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetHomeModalState => assetHomeModalState.pageMove
  )
  const makeSelectAlertMessage = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetHomeModalState => assetHomeModalState.alertMessage
  )
  const makeSelectAlertModalShow = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetHomeModalState => assetHomeModalState.alertModalShow
  )
  const makeSelectNotFound = () =>
  createSelector (
    selectAssetVideoCardDomain,
    assetHomeModalState => assetHomeModalState.noItemFound
  )
  export { selectAssetVideoCardDomain,
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
