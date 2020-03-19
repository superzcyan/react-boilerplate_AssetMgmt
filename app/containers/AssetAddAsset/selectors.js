import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetAddAsset state domain
 */

const selectAssetAddAssetDomain = state => state.assetAddAsset || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetAddAsset
 */

const makeSelectShowAddAssetModal = () =>
  createSelector(
    selectAssetAddAssetDomain,
    assetAddAssetState => assetAddAssetState.showAddAssetModal
  );

const makeSelectAllModelItems = () =>
  createSelector(
    selectAssetAddAssetDomain,
    assetAddAssetState => assetAddAssetState.allItems,
  )
  const makeSelectModelTitle = () =>
  createSelector(
    selectAssetAddAssetDomain,
    assetAddAssetState => assetAddAssetState.modelTitle,
  );
  
const makeSelectSupplierId = () =>
createSelector(
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.supplierId
)

const makeSelectModelId = () =>
createSelector(
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.modelId
)
const makeSelectProcessorId = () =>
createSelector(
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.processorId
)
const makeSelectMemorylId = () =>
createSelector(
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.memoryId
)
const makeSelectVideoCardId = () =>
createSelector(
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.videoCardId,
)
const makeSelectHardDiskId = () =>
createSelector(
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.hardDiskId
)
const makeSelectManufacturerId = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.manufacturerId
)
const makeSelectCategoryId = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.categoryId
)
const makeSelectSerialNo = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState=> assetAddAssetState.serialNo
)
const makeSelectAssetTag = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.assetTag
)
const makeSelectBattery = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.battery
)
const makeSelectAdapter = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.adapter
)
const makeSelectName = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.name
)
const makeSelectAssignedTo = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.assignedTo
)
const makeSelectDeliveryDate = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.deliveryDate
)
const makeSelectPONo = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.poNo
)
const makeSelectDRNo = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.drNo,
    )
const makeSelectSINo = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.siNo
)
const  makeSelectMacAdd = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.macAddress
)
const makeSelectIpAdd = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.ipAddress
)
const makeSelectStatus = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.status
)
const makeSelectPurchaseDate = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.purchaseDate
)
const makeSelectPurchaseCost = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.purchaseCost
)
const makeSelectWarranty = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.warranty
)
const makeSelectNotes = () =>
createSelector (
  selectAssetAddAssetDomain,
  assetAddAssetState => assetAddAssetState.notes
)
export { selectAssetAddAssetDomain,
  makeSelectShowAddAssetModal,
  makeSelectAllModelItems,
  makeSelectModelTitle,
  makeSelectSupplierId,
  makeSelectModelId,
  makeSelectProcessorId,
  makeSelectMemorylId,
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
};
