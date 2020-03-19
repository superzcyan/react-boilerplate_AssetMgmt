import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetUsers state domain
 */

const selectAssetUsersDomain = state => state.assetUsers || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetUsers
 */

const makeSelectModelTitle = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.modelTitle,
  );
const makeSelectUserItems = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.userItems,
  )
//Edit
const makeSelectEditModalShow = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.editUserModalShow,
  )
const makeSelectUserId = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.userId,
  )
const makeSelectUsername = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.userName,
  )
const makeSelectFullName = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.fullName,
  )
const makeSelectPassword = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.password,
  )
const makeSelectConfirmPasswod = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.confirmPassword
  )
const makeSelectSuccessResponse = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.successResponse
  )
const makeSelectFailedResponse = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.failedResponse
  )
const makeSelectErrorMessage = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.errorMessage
  )
const makeSelectPasswordMatched = () =>
  createSelector (
    selectAssetUsersDomain,
    assetUsersState => assetUsersState.passwordMatched
  )
//Pagination
const makeSelectTotalPages = () =>
createSelector (
  selectAssetUsersDomain,
  assetUsersState => assetUsersState.totalPages
)
const makeSelectCurrentpage = () =>
createSelector (
  selectAssetUsersDomain,
  assetUsersState => assetUsersState.currentPage
)
const makeSelectPrevPage = () =>
createSelector (
  selectAssetUsersDomain,
  assetUsersState => assetUsersState.prevPage
)
const makeSelectNextPage = () =>
createSelector (
  selectAssetUsersDomain,
  assetUsersState => assetUsersState.nextPage
)
const makeSelectFirstPage = () =>
createSelector (
  selectAssetUsersDomain,
  assetUsersState => assetUsersState.firstPage
)
const makeSelectLastPage = () =>
createSelector (
  selectAssetUsersDomain,
  assetUsersState => assetUsersState.lastPage
)
const makeSelectPageMove = () =>
createSelector (
  selectAssetUsersDomain,
  assetUsersState => assetUsersState.pageMove
)
const makeSelectAlertMessage = () =>
createSelector (
  selectAssetUsersDomain,
  assetUsersState => assetUsersState.alertMessage
)
const makeSelectAlertModalShow = () =>
createSelector (
  selectAssetUsersDomain,
  assetUsersState => assetUsersState.alertModalShow
)

export { selectAssetUsersDomain,
          makeSelectUserItems,
          makeSelectModelTitle,
          makeSelectEditModalShow,
          makeSelectUserId,
          makeSelectUsername,
          makeSelectFullName,
          makeSelectPassword,
          makeSelectConfirmPasswod,
          makeSelectSuccessResponse,
          makeSelectFailedResponse,
          makeSelectErrorMessage,
          makeSelectPasswordMatched,
          makeSelectTotalPages,
          makeSelectPrevPage,
          makeSelectNextPage,
          makeSelectFirstPage,
          makeSelectLastPage,
          makeSelectCurrentpage,
          makeSelectPageMove,
          makeSelectAlertMessage,
          makeSelectAlertModalShow};
