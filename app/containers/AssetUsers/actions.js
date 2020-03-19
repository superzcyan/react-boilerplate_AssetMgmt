/*
 *
 * AssetUsers actions
 *
 */

import { GET_USERITEMS, 
  LOAD_USERITEMS,
  SHOW_EDITUSERMODAL,
  HIDE_EDITUSERMODAL,
  GET_USERID,
  GET_USERNAME,
  GET_FULLNAME,
  GET_PASSWORD,
  GET_CONFIRMPASSWORD,
  GET_EDITEDUSERDETAILS,
  SAVE_EDITEDUSER,
  EDITUSER_SUCCESSS,
  EDITUSER_FAIL,
  GET_CURRENTPAGE,
  HANDLE_PAGE,
  HANDLE_FIRST_LASTPAGE,
  GET_ERRORMESSAGE,
  DISMISS_ALERTMODAL } from './constants';
import { func } from 'prop-types';

export function getUserItems() {
  return {
    type: GET_USERITEMS,
  };
}
export function loadUserItems(userItems, totalPages) {
  return {
    type: LOAD_USERITEMS,
    userItems,
    totalPages,
  }
}
//Edit
export function showEditUserModal() {
  return { 
    type: SHOW_EDITUSERMODAL
  }
}
export function hideEditUserModal() {
  return {
    type: HIDE_EDITUSERMODAL
  }
}
export function getUserId(userId) {
  return {
    type: GET_USERID,
    userId,
  }
}
export function getUserName(userName) {
  return {
    type: GET_USERNAME,
    userName,
  }
}
export function getFullName(fullName) {
  return {
    type: GET_FULLNAME,
    fullName,
  }
}
export function getPassword(password) {
  return {
    type: GET_PASSWORD,
    password,
  }
}
export function getConfirmPassword(confirmPassword) {
  return {
    type: GET_CONFIRMPASSWORD,
    confirmPassword
  }
}
export function getEditedUserDetails(editedUserDetails) {
  return {
    type: GET_EDITEDUSERDETAILS,
  }
}
export function saveEditedUser() {
  return {
    type: SAVE_EDITEDUSER,
  }
}
export function editUserSuccess(successResponse) {
  return {
    type: EDITUSER_SUCCESSS,
    successResponse,
  }
}
export function editUserFailed(failedResponse){
  return {
    type: EDITUSER_FAIL,
    failedResponse
  }
}
export function getErrorMessage(errorMessage){
  return {
    type: GET_ERRORMESSAGE,
    errorMessage,
  }
}
//Alert
export function dismissAlertModal(alertModalShow) {
  return {
    type: DISMISS_ALERTMODAL,
    alertModalShow,
  }
}
//Pagination
export function getCurrentPage(currentPage) {
  return {
    type: GET_CURRENTPAGE,
    currentPage,
  }
}
export function handlePage(pageMove, currentPage){
  return {
    type: HANDLE_PAGE,
    pageMove,
    currentPage,
  }
}
export function handleFirstAndLastPage(pageMove, currentPage){
  return {
    type: HANDLE_FIRST_LASTPAGE,
    pageMove,
    currentPage,
  }
}
