/*
 *
 * LoginPage actions
 *
 */

import { GET_USERNAME, GET_PASSWORD, AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESSFUL, AUTHENTICATION_ERROR, LOGIN_FALSE } from './constants';

export function getUsername(userName) {
  return {
    type: GET_USERNAME,
    userName,
  };
}

export function getPassword(password) {
  return {
    type: GET_PASSWORD,
    password,
  };
}

export function authenticationRequest(loading) {
  return {
    type: AUTHENTICATION_REQUEST,
    loading,      
  };
  
}

export function authenticationSuccess(userId,userName,fullName,authToken,) {
  return {
    type: AUTHENTICATION_SUCCESSFUL,
    userId,
    userName,
    fullName,
    authToken,  
  }  
}

export function authenticationError(errorMessage) {
  return {
    type: AUTHENTICATION_ERROR,
    errorMessage,
  }
}

export function loginFalse(authToken, isAuthorized) {
  return {
    type: LOGIN_FALSE,
    authToken,
    isAuthorized,
  }
}