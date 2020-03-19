import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectUsername = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.userName,
  );

const makeSelectPassword = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.password,
  );

const makeSelectUserId = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.userId,
  );

const makeSelectFullName = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.fullName,
  );

const makeSelectAuthToken = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.authToken,
  );
const makeSelectIsAuthorized = () =>
  createSelector (
    selectLoginPageDomain,
    loginState => loginState.isAuthorized
  )
const makeSelectErrorMessage = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.errorMessage,
  );


export {  selectLoginPageDomain,
          makeSelectPassword,
          makeSelectUsername,
          makeSelectUserId,
          makeSelectFullName,
          makeSelectAuthToken,
          makeSelectErrorMessage,
          makeSelectIsAuthorized
        };
