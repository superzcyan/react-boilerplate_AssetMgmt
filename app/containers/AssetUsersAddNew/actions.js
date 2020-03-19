/*
 *
 * AssetUsersAddNew actions
 *
 */

import { SHOW_ADDMODELITEMMODAL, 
  HIDE_ADDMODELITEMMODAL, 
  GET_NEWUSERFULLNAME,
  GET_NEWUSERUSERNAME,
  GET_NEWUSERPASSWORD,
  GET_NEWUSERCONFIRMPASSWORD,
  SAVE_NEWUSER,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
  DISMISS_ALERTMODAL,} from './constants';

export function showAddItemModal() {
  return {
    type: SHOW_ADDMODELITEMMODAL,
  };
}
export function hideAddItemModal() {
  return {
    type: HIDE_ADDMODELITEMMODAL,
  }
}
export function saveNewUser() {
  return {
    type: SAVE_NEWUSER,
  }
}
export function getNewUserFullName(newUserFullName) {
  return {
    type: GET_NEWUSERFULLNAME,
    newUserFullName,
  }
}
export function getNewUserUserName(newUserUserName) {
  return {
    type: GET_NEWUSERUSERNAME,
    newUserUserName,
  }
}
export function getNewUserPassword(newUserPassword) {
  return {
    type: GET_NEWUSERPASSWORD,
    newUserPassword,
  }
}
export function getNewUserConfirmPassword(newUserConfirmPassword) {
  return {
    type: GET_NEWUSERCONFIRMPASSWORD,
    newUserConfirmPassword,
  }
}
export function registrationFailed(responseMessage) {
  return {
    type: REGISTRATION_FAILED,
    responseMessage,
  }
}
export function registrationSuccess(responseMessage) {
  return {
    type: REGISTRATION_SUCCESS,
    responseMessage,
  }
}
export function dismissAlertModal(alertModalShow) {
  return {
    type: DISMISS_ALERTMODAL,
    alertModalShow,
  }
}
