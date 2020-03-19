/*
 *
 * AssetUsers reducer
 *
 */
import produce from 'immer';
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
  DISMISS_ALERTMODAL,  } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const assetUsersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USERITEMS:
        draft.modelTitle = 'Users'
        draft.currentPage = draft.currentPage || 1;
        break;
      case LOAD_USERITEMS:
        draft.userItems = action.userItems
        draft.totalPages = action.totalPages;
        if(draft.currentPage == 1){
          draft.prevPage = true
          draft.firstPage = true 
        }
        if(draft.currentPage < draft.totalPages){
          draft.nextPage = false
          draft.lastPage = false 
        }
        if(draft.currentPage == draft.totalPages){
          draft.nextPage = true
          draft.lastPage = true
        }
        if(draft.totalPages == 1 ){
          draft.nextPage = true
          draft.lastPage = true
          draft.prevPage = true
          draft.firstPage = true 
        }
        if(draft.currentPage>1){
          draft.prevPage = false
          draft.firstPage = false 
        }
        break;
        //Edit
      case SHOW_EDITUSERMODAL:
        draft.editUserModalShow = true;
        draft.errorMessage = "";        
        break;
      case HIDE_EDITUSERMODAL:
        draft.editUserModalShow = false;
        break;
      case GET_USERID:
        draft.userId = action.userId
        console.log(draft.userId)
        break;
      case GET_USERNAME:
        draft.userName = action.userName
        console.log(draft.userName)
        break;
      case GET_FULLNAME:
        draft.fullName = action.fullName
        console.log(draft.fullName)
        break;
      case GET_PASSWORD:
        draft.password = action.password
        if(draft.password === draft.confirmPassword){
          draft.passwordMatched = true;
          draft.errorMessage = ''
          console.log("Password Matched: "+ draft.passwordMatched)
        }else{
          draft.passwordMatched = false;
          draft.errorMessage = 'Password do\'nt match'
          console.log("Password Matched: "+ draft.passwordMatched)
        }
        break;        
      case GET_CONFIRMPASSWORD:
        draft.confirmPassword = action.confirmPassword
        if(draft.confirmPassword === draft.password){
          draft.passwordMatched = true;
          draft.errorMessage = ''
          console.log("Password Matched: "+ draft.passwordMatched)
        }else{
          draft.passwordMatched = false;
          draft.errorMessage = 'Password do\'nt match'
          console.log("Password Matched: "+ draft.passwordMatched)
        }
        break;
      case SAVE_EDITEDUSER:
        draft.loading = true
        break;
      case EDITUSER_SUCCESSS:
        draft.successResponse = action.successResponse
        draft.editUserModalShow = false   
        draft.alertMessage = 'Successfully Updated!'
        draft.alertModalShow = true 
        break;
      case EDITUSER_FAIL:
        draft.failedResponse = action.failedResponse
        draft.editUserModalShow = true   
        break;
      case GET_ERRORMESSAGE:
        draft.errorMessage = action.errorMessage
        console.log(draft.errorMessage)
        break;
      case DISMISS_ALERTMODAL:
        draft.alertModalShow = false;
        break;
        //Pagination
      case GET_CURRENTPAGE:
        draft.currentPage = parseInt(action.currentPage);
        console.log(draft.currentPage)        
        break;
      case HANDLE_PAGE:
        draft.pageMove = action.pageMove;        
        draft.currentPage = (draft.pageMove == 'prev')?draft.currentPage-1:draft.currentPage+1;
        console.log(draft.pageMove)
        console.log(draft.currentPage)
        break;
      case HANDLE_FIRST_LASTPAGE:
        draft.pageMove = action.pageMove;
        draft.currentPage = (draft.pageMove == 'first')?draft.currentPage=1:draft.currentPage=draft.totalPages;
        break;
      //End of Pagination
    }
  });

export default assetUsersReducer;
