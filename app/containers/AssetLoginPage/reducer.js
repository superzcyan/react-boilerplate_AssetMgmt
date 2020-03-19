/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { GET_USERNAME, GET_PASSWORD, AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESSFUL, AUTHENTICATION_ERROR, LOGIN_FALSE } from './constants';

export const initialState = {
  userId: null,
  userName: '',
  password: '',
  fullName: '',
  authToken: '',
  loading: false,
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_FALSE:          
          draft.isAuthorized = false
          console.log(draft.authToken)
          console.log(draft.isAuthorized)
          break;
      case GET_USERNAME:
          draft.userName = action.userName;          
          console.log(action.userName)
        break;
      case GET_PASSWORD:
          draft.password = action.password;
          console.log(action.password)
        break;
      case AUTHENTICATION_REQUEST:
          draft.loading = true; 
          draft.isAuthorized = false;
        break;
      case AUTHENTICATION_SUCCESSFUL:
          draft.userId = action.userId;
          draft.userName = action.userName;
          draft.fullName = action.fullName;
          draft.authToken = action.authToken;          
          draft.isAuthorized = true;
        break;
      case AUTHENTICATION_ERROR:
          draft.loading = false; 
          draft.errorMessage = action.errorMessage;
        break;
    }
  });

export default loginPageReducer;
