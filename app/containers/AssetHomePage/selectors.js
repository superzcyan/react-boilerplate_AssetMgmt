import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetHomePage state domain
 */

const selectAssetHomePageDomain = state => state.assetHomePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetHomePage
 */

const makeSelectAuthToken = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeState => assetHomeState.authToken,
  );
const makeSelectModelTitle = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeState => assetHomeState.modelTitle,
  );
const makeSelectAllItems = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.allItems
  );
const makeSelectAssetItems = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeState => assetHomeState.assetItems,
  );
const makeSelectTotalItems = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.totalItems
)
const makeSelectStoredAssetItems = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeState => assetHomeState.storedAssetItems,
  )
  const makeSelectStoredItems = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeState => assetHomeState.storedItems,
  )
const makeSelectAssetKeyword = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeState => assetHomeState.assetKeyword,
  )
const makeSelectAssetId = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeState => assetHomeState.assetId,
  )
const makeSelectOrderBy = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeState => assetHomeState.orderBy,
  )
const makeSelectOrderType = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeState => assetHomeState.orderType,
  )

const makeSelectOpenAssetInfoModal = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.openAssetInfoModal
  )

const makeSelectShowAddAssetModal = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.showAddAssetModal
  )
const makeSelectAssetItemId = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.itemId
  )
const makeSelectAssetItemsToEdit = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.itemToEdit
  )
const makeSelectEditedItem = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.editedItem
  )
const makeSelectUpdateSuccess = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.successResponse,
  )
const makeSelectUpdateFailed = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.failedResponse,
  )
  //Fields Selector
const makeSelectSupplierId = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.supplierId
  )

const makeSelectModelId = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.modelId
  )
  const makeSelectProcessorId = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.processorId
  )
  const makeSelectMemorylId = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.memoryId
  )
  const makeSelectVideoCardId = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.videoCardId,
  )
  const makeSelectHardDiskId = () =>
  createSelector(
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.hardDiskId
  )
  const makeSelectManufacturerId = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.manufacturerId
  )
  const makeSelectCategoryId = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.categoryId
  )
  const makeSelectSerialNo = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState=> assetHomeModalState.serialNo
  )
  const makeSelectAssetTag = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.assetTag
  )
  const makeSelectBattery = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.battery
  )
  const makeSelectAdapter = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.adapter
  )
  const makeSelectName = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.name
  )
  const makeSelectAssignedTo = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.assignedTo
  )
  const makeSelectDeliveryDate = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.deliveryDate
  )
  const makeSelectPONo = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.poNo
  )
  const makeSelectDRNo = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.drNo,
      )
  const makeSelectSINo = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.siNo
  )
  const  makeSelectMacAdd = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.macAddress
  )
  const makeSelectIpAdd = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.ipAddress
  )
  const makeSelectStatus = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.status
  )
  const makeSelectPurchaseDate = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.purchaseDate
  )
  const makeSelectPurchaseCost = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.purchaseCost
  )
  const makeSelectWarranty = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.warranty
  )
  const makeSelectNotes = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.notes
  )
  //Pagination
  const makeSelectTotalPages = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.totalPages
  )
  const makeSelectCurrentpage = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.currentPage
  )
  const makeSelectPrevPage = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.prevPage
  )
  const makeSelectNextPage = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.nextPage
  )
  const makeSelectFirstPage = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.firstPage
  )
  const makeSelectLastPage = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.lastPage
  )
  const makeSelectPageMove = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.pageMove
  )
  const makeSelectNoItemFound = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.noItemFound
  )
  const makeSelectAlertMessage = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.alertMessage
  )
  const makeSelectAlertModalShow = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.alertModalShow
  )
  const makeSelectErrorMessage = () =>
  createSelector (
    selectAssetHomePageDomain,
    assetHomeModalState => assetHomeModalState.errorMessage
  )

export {  selectAssetHomePageDomain,
          makeSelectAuthToken,
          makeSelectAssetItems,
          makeSelectTotalItems,
          makeSelectStoredAssetItems,
          makeSelectStoredItems,
          makeSelectAssetKeyword,
          makeSelectAssetId,
          makeSelectOrderBy,
          makeSelectOrderType,
          makeSelectModelTitle,
          makeSelectOpenAssetInfoModal,
          makeSelectShowAddAssetModal,
          makeSelectAllItems,
          makeSelectAssetItemId,
          makeSelectAssetItemsToEdit,
          makeSelectSupplierId,
          makeSelectModelId,
          makeSelectProcessorId,
          makeSelectMemorylId,
          makeSelectEditedItem,
          makeSelectVideoCardId,
          makeSelectHardDiskId,
          makeSelectManufacturerId,
          makeSelectCategoryId,
          makeSelectSerialNo,
          makeSelectAssetTag,
          makeSelectBattery,
          makeSelectAdapter,
          makeSelectName,
          makeSelectAssignedTo,
          makeSelectDeliveryDate,
          makeSelectPONo,
          makeSelectDRNo,
          makeSelectSINo,
          makeSelectMacAdd,
          makeSelectIpAdd,
          makeSelectStatus,
          makeSelectPurchaseDate,
          makeSelectPurchaseCost, 
          makeSelectWarranty,       
          makeSelectNotes,
          makeSelectTotalPages,
          makeSelectPrevPage,
          makeSelectNextPage,
          makeSelectFirstPage,
          makeSelectLastPage,
          makeSelectCurrentpage,
          makeSelectPageMove,
          makeSelectUpdateSuccess,
          makeSelectUpdateFailed,
          makeSelectNoItemFound,
          makeSelectAlertMessage,
          makeSelectAlertModalShow,
          makeSelectErrorMessage,};
