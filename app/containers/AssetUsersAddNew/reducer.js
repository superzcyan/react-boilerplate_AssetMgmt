/*
 *
 * AssetUsersAddNew reducer
 *
 */
import produce from 'immer';
import { SHOW_ADDMODELITEMMODAL,
  HIDE_ADDMODELITEMMODAL,
  SAVE_NEWUSER,
  GET_NEWUSERFULLNAME,
  GET_NEWUSERUSERNAME,
  GET_NEWUSERPASSWORD,
  GET_NEWUSERCONFIRMPASSWORD,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
  DISMISS_ALERTMODAL,} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const assetUsersAddNewReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_ADDMODELITEMMODAL:
        draft.addItemModalShow = true
        draft.modelTitle = "Users"
        draft.errorMessage = ''        
        break;
      case HIDE_ADDMODELITEMMODAL:
        draft.addItemModalShow = false
        break;
      case GET_NEWUSERFULLNAME:
        draft.newUserFullName = action.newUserFullName
        console.log(draft.newUserFullName)
        break;
      case GET_NEWUSERUSERNAME:
        draft.newUserUserName = action.newUserUserName
        console.log(draft.newUserUserName)
        break;
      case GET_NEWUSERPASSWORD:
        draft.newUserPassword = action.newUserPassword
        console.log(draft.newUserPassword)
        if(draft.newUserPassword === draft.newUserConfirmPassword){
          draft.passwordMatched = true;
          draft.errorMessage = ''
          console.log(draft.passwordMatched)
        }else{
          draft.passwordMatched = false;
          draft.errorMessage = 'Password do\'nt match'
          console.log(draft.passwordMatched)
        }
        break;
      case GET_NEWUSERCONFIRMPASSWORD:
        draft.newUserConfirmPassword = action.newUserConfirmPassword
        if(draft.newUserConfirmPassword === draft.newUserPassword){
          draft.passwordMatched = true;
          draft.errorMessage = ''
          console.log(draft.passwordMatched)
        }else{
          draft.passwordMatched = false;
          draft.errorMessage = 'Password do\'nt match'
          console.log(draft.passwordMatched)
        }
        console.log(draft.newUserConfirmPassword)
        break;      
      case SAVE_NEWUSER:
        draft.loading = true;          
        // if(draft.passwordMatched){
        //   draft.addItemModalShow = false   
        // }     
        break;
      case REGISTRATION_SUCCESS:        
        draft.responseMessage = action.responseMessage
        console.log(draft.responseMessage)
        draft.addItemModalShow = false   
        draft.alertMessage = 'Successfully Added!'
        draft.alertModalShow = true 
        break;
      case REGISTRATION_FAILED:       
        draft.responseMessage =  action.responseMessage   
        draft.alertModalShow = false
        console.log('ErrorMessage: '+ draft.responseMessage)
        break;
      case DISMISS_ALERTMODAL:
        draft.alertModalShow = false
        break;
    }
  });

export default assetUsersAddNewReducer;
