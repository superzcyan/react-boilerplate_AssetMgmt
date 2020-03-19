/**
 *
 * AssetUsersAddNew
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import AssetMgmtAddUserForm from '../../components/AssetMgmtAddUserForm';
import { getNewUserFullName, 
  getNewUserUserName,
  getNewUserPassword, 
  getNewUserConfirmPassword,
  saveNewUser,
  showAddItemModal, 
  hideAddItemModal,
  dismissAlertModal,
  } from './actions';
import { makeSelectAddItemModalShow,
  makeSelectNewUserFullName, 
  makeSelectNewUserUsername, 
  makeSelectNewUserPassword, 
  makeSelectNewuserConfirmPassword, 
  makeSelectPasswordMatched,
  makeSelectResponseMessage,
  makeSelectErrorMessage,
  makeSelectAlertModalShow,
  makeSelectAlertMessage} from './selectors';

export function AssetUsersAddNew({
  addItemModalShow = false,
  headerName = "User",
  placeHolderFullName = "Full Name",
  placeHolderUserName = "Username",
  placeHolderPassword = "Password",
  placeHolderConfirmPassword = "Confirm Password",
  showAddItemModal,
  hideAddItemModal,
  getNewUserFullName,
  getNewUserUserName,
  getNewUserPassword,
  getNewUserConfirmPassword,
  saveNewUser,
  errorMessage = '',
  responseMessage = '',
  alertModalShow = false,
  alertMessage = '',
  dismissAlertModal,
}) {
  useInjectReducer({ key: 'assetUsersAddNew', reducer });
  useInjectSaga({ key: 'assetUsersAddNew', saga });

  return (
    <div>
      <AssetMgmtAddUserForm 
        headerName = {headerName}
        placeHolderFullName = {placeHolderFullName}
        placeHolderUserName = {placeHolderUserName}
        placeHolderPassword = {placeHolderPassword}
        placeHolderConfirmPassword = {placeHolderConfirmPassword}
        showAddItemModal = {showAddItemModal}
        addItemModalShow = {addItemModalShow}
        hideAddItemModal = {hideAddItemModal}
        getNewUserFullName = {getNewUserFullName}
        getNewUserUserName = {getNewUserUserName}
        getNewUserPassword = {getNewUserPassword}
        getNewUserConfirmPassword = {getNewUserConfirmPassword}
        errorMessage = {errorMessage}
        responseMessage = {responseMessage}
        saveNewUser = {saveNewUser}
        alertModalShow = {alertModalShow}
        alertMessage = {alertMessage}
        dismissAlertModal = {dismissAlertModal}/>
    </div>
  );
}

AssetUsersAddNew.propTypes = {
  saveNewUser : PropTypes.func,
  responseMessage: PropTypes.any,
  errorMessage: PropTypes.any,
  alertModalShow: PropTypes.bool,
  alertMessage: PropTypes.string,
  dismissAlertModal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  addItemModalShow: makeSelectAddItemModalShow(),
  newUserFullName : makeSelectNewUserFullName(),
  newUserUsername : makeSelectNewUserUsername(),
  newUserPassword : makeSelectNewUserPassword(),
  newUserConfirmPassword : makeSelectNewuserConfirmPassword(),
  passwordMatched: makeSelectPasswordMatched(),
  responseMessage: makeSelectResponseMessage(),
  errorMessage: makeSelectErrorMessage(),
  alertModalShow : makeSelectAlertModalShow(),
  alertMessage: makeSelectAlertMessage(),
});

function mapDispatchToProps(dispatch) {
  return {
    showAddItemModal: event => dispatch(showAddItemModal()),
    hideAddItemModal: event => dispatch(hideAddItemModal()),
    getNewUserFullName: event => dispatch(getNewUserFullName(event.target.value)),
    getNewUserUserName: event => dispatch(getNewUserUserName(event.target.value)),
    getNewUserPassword: event => dispatch(getNewUserPassword(event.target.value)),
    getNewUserConfirmPassword: event => dispatch(getNewUserConfirmPassword(event.target.value)),
    saveNewUser: event => {event.preventDefault(); dispatch(saveNewUser())},
    dismissAlertModal: event => dispatch(dismissAlertModal()),

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AssetUsersAddNew);
