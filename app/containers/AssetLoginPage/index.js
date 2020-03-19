/**
 *
 * Asset Management LoginPage
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
import { makeSelectPassword, makeSelectUsername, makeSelectUserId, makeSelectFullName, makeSelectAuthToken, makeSelectErrorMessage, makeSelectIsAuthorized } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {Card, Form, Button } from 'react-bootstrap';
import { getUsername, getPassword, authenticationRequest, loginFalse} from './actions';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';


export function LoginPage({
    userName = '', 
    password = '',
    errorMessage = 'Error',
    authToken,
    OnChangeUsername,
    OnChangePassword, 
    OnSubmitLogin,
    OnLoginFalse,
    isAuthorized = false,
}) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  useEffect(()=>{
    OnLoginFalse()    
  },[])
  if(isAuthorized){
    return <Redirect to='/Home' />
  }
    return (
      <div className="Login-card" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>      
        <Card border="light" style={{width: '20em', heigth:'35em'}}>
          <Card.Header className="text-center">
            <h5><FormattedMessage {...messages.headerLogin}/></h5>
          </Card.Header>
            <Card.Body>
              <Form onSubmit={OnSubmitLogin}>
                <Form.Label>
                  <FormattedMessage {...messages.labelUsername}/>
                </Form.Label>
                <Form.Group controlId="formUsername">                   
                    <Form.Control name="userName" type="userName" placeholder="Username" required
                      value={userName}
                      onChange={OnChangeUsername} />
                </Form.Group>
                <Form.Label>
                  <FormattedMessage {...messages.labelPassword}/>
                </Form.Label>
                <Form.Group controlId="formPassword">                    
                    <Form.Control name="password" type="password" placeholder="Password" required
                      value={password}
                      onChange={OnChangePassword} />
                        <div className="invalid-feedback d-block text-center">
                          {errorMessage}
                        </div> 
                </Form.Group>         
                <Button variant="primary" type="submit" block>
                  <FormattedMessage {...messages.labelSignIn}/>
                </Button>
              </Form>
            </Card.Body>
        </Card>
      </div>
    );
  
}

LoginPage.propTypes = {
  userName: PropTypes.string,
  password: PropTypes.string,
  userId: PropTypes.number,
  fullName: PropTypes.string,
  authToken: PropTypes.string,
  errorMessage: PropTypes.string,
  isAuthorized: PropTypes.bool,
  OnChangeUsername: PropTypes.func,
  OnChangePassword: PropTypes.func,
  OnLoginFalse: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userName: makeSelectUsername(),
  password: makeSelectPassword(),
  userId: makeSelectUserId(),
  fullName: makeSelectFullName(),
  authToken: makeSelectAuthToken(),  
  errorMessage: makeSelectErrorMessage(),
  isAuthorized: makeSelectIsAuthorized(),
});

function mapDispatchToProps(dispatch) {
  return {
    OnLoginFalse: event => dispatch(loginFalse()),
    OnChangeUsername: event => dispatch(getUsername(event.target.value)),
    OnChangePassword: event => dispatch(getPassword(event.target.value)),
    OnSubmitLogin: event => { 
      event.preventDefault(); 
      dispatch(authenticationRequest());     
    },   
  };  
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
