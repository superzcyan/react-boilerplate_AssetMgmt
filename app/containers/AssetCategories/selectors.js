import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetCategories state domain
 */

const selectAssetCategoriesDomain = state =>
  state.assetCategories || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetCategories
 */
const makeSelectModelTitle = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.modelTitle,
  );
const makeSelectModelItems = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.modelItems,
  );
const makeSelectStoredItems = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.storedModelItems,
  );
const makeSelectAllStoredItems = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.storedAllModelItems,
  )
const makeSelectModelId = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.modelId
  )
const makeSelectNotFound = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.noItemFound
  )
//Add

const makeSelectAddItemModalShow = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.addItemModalShow,
  );
const makeSelectNewItemName = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.newItemName,
  )

const makeSelectAddSuccess = () =>
createSelector (
  selectAssetCategoriesDomain,
  assetHomeModalState => assetHomeModalState.successResponse
)
const makeSelectAddFailed = () =>
createSelector (
  selectAssetCategoriesDomain,
  assetHomeModalState => assetHomeModalState.failedResponse
)
//Edit
const makeSelectItemId = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.itemId,
  )
const makeSelectItemToEdit = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.itemToEdit,
  )
const makeSelectItemName = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.itemName,
  )
const makeSelectEditItemModalShow = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.editItemModalShow,
  )
const makeSelectEditedItemName = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.editedItemName,
  )
const makeSelectUpdateSuccess = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.successResponse,
  )
const makeSelectUpdateFailed = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.failedResponse,
  )
const makeSelectErrorMessage = () =>
  createSelector(
    selectAssetCategoriesDomain,
    assetCategoriesState => assetCategoriesState.errorMessage,
  )
  //Pagination
  const makeSelectTotalPages = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetHomeModalState => assetHomeModalState.totalPages
  )
  const makeSelectCurrentpage = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetHomeModalState => assetHomeModalState.currentPage
  )
  const makeSelectPrevPage = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetHomeModalState => assetHomeModalState.prevPage
  )
  const makeSelectNextPage = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetHomeModalState => assetHomeModalState.nextPage
  )
  const makeSelectFirstPage = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetHomeModalState => assetHomeModalState.firstPage
  )
  const makeSelectLastPage = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetHomeModalState => assetHomeModalState.lastPage
  )
  const makeSelectPageMove = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetHomeModalState => assetHomeModalState.pageMove
  )
  const makeSelectAlertMessage = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetHomeModalState => assetHomeModalState.alertMessage
  )
  const makeSelectAlertModalShow = () =>
  createSelector (
    selectAssetCategoriesDomain,
    assetHomeModalState => assetHomeModalState.alertModalShow
  )
export { selectAssetCategoriesDomain,
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
