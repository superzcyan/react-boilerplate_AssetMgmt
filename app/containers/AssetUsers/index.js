/**
 *
 * AssetUsers
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectUserItems,
    makeSelectModelTitle,
    makeSelectTotalPages,
    makeSelectPageMove,
    makeSelectPrevPage,
    makeSelectFirstPage,
    makeSelectLastPage,
    makeSelectNextPage,
    makeSelectCurrentpage, 
    makeSelectEditModalShow,
    makeSelectUsername,
    makeSelectFullName,
    makeSelectErrorMessage,
    makeSelectSuccessResponse,
    makeSelectFailedResponse,
    makeSelectAlertModalShow,
    makeSelectAlertMessage,} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Container} from 'shards-react';
import AssetMgmtUserTableCard from 'components/AssetMgmtUserTableCard';
import { userTableHeader } from '../../components/AssetMgmtItemTable/tableHeaders';
import { getUserItems,
  getCurrentPage,
  handlePage,
  handleFirstAndLastPage,
  editUserModalShow,
  showEditUserModal,
  hideEditUserModal,
  getUserId,
  getUserName,
  getFullName,
  getPassword,
  getConfirmPassword, 
  saveEditedUser,
  dismissAlertModal} from './actions';
import AssetMgmtEditUserForm from '../../components/AssetMgmtEditUserForm';


export function AssetUsers({
  userItems = [],
  onLoadUserItems,
  totalPages = 1,
  currentPage = 1,
  prevPage = false,
  nextPage = false,
  firstPage = false,
  lastPage = false,
  getCurrentPage,
  handlePage,
  handleFirstAndLastPage,
  editUserModalShow,
  showEditUserModal,
  hideEditUserModal,
  getUserId,
  getUserName,
  getFullName,
  getPassword,
  getConfirmPassword,
  userName,
  fullName,
  saveEditedUser,
  failedResponse,
  errorMessage,
  alertModalShow = false,
  alertMessage = '',
  dismissAlertModal,
}) {
  useInjectReducer({ key: 'assetUsers', reducer });
  useInjectSaga({ key: 'assetUsers', saga });
  useEffect(()=>{
    onLoadUserItems()
  },[])

  return (
    <div className="main-content-container px-2 py-2 container-fluid">      
        <Container className="d-flex justify-content-center">  
          <AssetMgmtUserTableCard
            cardStyle = {{width: '30em'}}
            cardTitle = "Users"           
            modelItems = {userItems}
            tableHeaders = {userTableHeader}     
            totalPages = {totalPages}
            currentPage = {currentPage}
            prevPage = {prevPage}
            nextPage = {nextPage}
            firstPage = {firstPage}
            lastPage = {lastPage}
            getCurrentPage= {getCurrentPage}
            handlePage={handlePage}
            handleFirstAndLastPage={handleFirstAndLastPage}
            showEditUserModal = {showEditUserModal}
            alertModalShow = {alertModalShow}
            alertMessage = {alertMessage}
            dismissAlertModal = {dismissAlertModal}/>
            <AssetMgmtEditUserForm
              editUserModalShow= {editUserModalShow}
              hideEditUserModal = {hideEditUserModal}
              headerName = {userName}
              defaultValueUserName = {userName}
              defaultValueFullName = {fullName}
              getUserId = {getUserId}
              getUserName = {getUserName}
              getFullName = {getFullName}
              getPassword = {getPassword}
              getConfirmPassword = {getConfirmPassword}
              saveEditedUser = {saveEditedUser}
              errorMessage = {errorMessage}
              failedResponse = {failedResponse} />
        </Container>      
    </div>
  );
}

AssetUsers.propTypes = {
  onLoadUserItems: PropTypes.func.isRequired,
  userItems: PropTypes.array,
  editUserModalShow: PropTypes.bool,
  showEditUserModal: PropTypes.func,
  hideEditUserModal: PropTypes.func,
  getUserId: PropTypes.func,
  getUserName: PropTypes.func,
  getFullName: PropTypes.func,
  getPassword: PropTypes.func,
  getConfirmPassword: PropTypes.func,
  saveEditedUser: PropTypes.func,
  errorMessage: PropTypes.any,  
  totalPages: PropTypes.number,
  getCurrentPage: PropTypes.func,
  firstPage: PropTypes.bool,
  nextPage: PropTypes.bool,
  lastPage: PropTypes.bool,
  prevPage: PropTypes.bool,
  handlePage: PropTypes.func,
  handleFirstAndLastPage: PropTypes.func,
  dismissAlertModal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userItems: makeSelectUserItems(),
  modelTitle: makeSelectModelTitle(),
  totalPages: makeSelectTotalPages(),
  currentPage: makeSelectCurrentpage(),
  nextPage: makeSelectNextPage(),
  prevPage: makeSelectPrevPage(),
  firstPage: makeSelectFirstPage(),
  lastPage: makeSelectLastPage(),
  pageMove: makeSelectPageMove(),
  editUserModalShow: makeSelectEditModalShow(),
  userName: makeSelectUsername(),
  fullName: makeSelectFullName(),
  errorMessage: makeSelectErrorMessage(),
  successResponse: makeSelectSuccessResponse(),
  failedResponse: makeSelectFailedResponse(),
  alertModalShow: makeSelectAlertModalShow(),
  alertMessage: makeSelectAlertMessage(), 
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadUserItems: event => dispatch(getUserItems()),
    //Edit
    showEditUserModal: event => {dispatch(showEditUserModal()),                       
                        dispatch(getUserName(event.target.name)),
                        dispatch(getFullName(event.target.title)),
                        dispatch(getUserId(event.target.id))},
    hideEditUserModal: event => dispatch(hideEditUserModal()),
    getUserId: event => dispatch(getUserId(event.target.id)),
    getUserName: event => dispatch(getUserName(event.target.value)),
    getFullName: event => dispatch(getFullName(event.target.value)),
    getPassword: event => dispatch(getPassword(event.target.value)),
    getConfirmPassword: event => dispatch(getConfirmPassword(event.target.value)),
    saveEditedUser: event => {event.preventDefault(); dispatch(saveEditedUser())},
    dismissAlertModal: event => dispatch(dismissAlertModal()),
    //Pagination Functions
    getCurrentPage: event => dispatch(getCurrentPage(event.target.value)),
    handlePage: event => dispatch(handlePage(event.target.name)),
    handleFirstAndLastPage: event => dispatch(handleFirstAndLastPage(event.target.name)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AssetUsers);
