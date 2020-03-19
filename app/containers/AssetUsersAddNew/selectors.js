import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetUsersAddNew state domain
 */

const selectAssetUsersAddNewDomain = state =>
  state.assetUsersAddNew || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetUsersAddNew
 */
const makeSelectModelTitle = () =>
  createSelector(
    selectAssetUsersAddNewDomain,
    addUserState => addUserState.modelTitle,
  )
const makeSelectAddItemModalShow = () =>
  createSelector(
    selectAssetUsersAddNewDomain,
    addUserState => addUserState.addItemModalShow,
  );
const makeSelectNewUserFullName = () =>
  createSelector(
    selectAssetUsersAddNewDomain,
    addUserState => addUserState.newUserFullName,
  );
const makeSelectNewUserUsername = () =>
  createSelector(
    selectAssetUsersAddNewDomain,
    addUserState => addUserState.newUserUserName
  )
const makeSelectNewUserPassword = () =>
  createSelector(
    selectAssetUsersAddNewDomain,
    addUserState => addUserState.newUserPassword,
  )
const makeSelectNewuserConfirmPassword = () =>
  createSelector(
    selectAssetUsersAddNewDomain,
    addUserState => addUserState.newUserConfirmPassword,
  )
const makeSelectPasswordMatched = () =>
  createSelector(
    selectAssetUsersAddNewDomain,
    addUserState => addUserState.passwordMatched
  )
const makeSelectResponseMessage = () =>
  createSelector(
    selectAssetUsersAddNewDomain,
    addUserState => addUserState.responseMessage,
  )
const makeSelectErrorMessage = () =>
  createSelector(
    selectAssetUsersAddNewDomain,
    addUserState => addUserState.errorMessage,
  )
const makeSelectAlertMessage = () =>
  createSelector (
    selectAssetUsersAddNewDomain,
    addUserState => addUserState.alertMessage
  )

const makeSelectAlertModalShow = () =>
  createSelector (
    selectAssetUsersAddNewDomain,
    addUserState => addUserState.alertModalShow
  )

export { selectAssetUsersAddNewDomain,
  makeSelectAddItemModalShow,
  makeSelectNewUserFullName,
  makeSelectNewUserUsername,
  makeSelectNewUserPassword,
  makeSelectNewuserConfirmPassword,
  makeSelectModelTitle,
  makeSelectPasswordMatched,
  makeSelectResponseMessage,
  makeSelectErrorMessage,
  makeSelectAlertModalShow,
  makeSelectAlertMessage,
};
