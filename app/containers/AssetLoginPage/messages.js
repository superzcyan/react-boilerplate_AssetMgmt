/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  headerLogin: {
    id: `${scope}.header`,
    defaultMessage: 'Asset Management',
  },
  labelUsername: {
    id: `${scope}.header`,
    defaultMessage: 'Username'
  },
  labelPassword: {
    id: `${scope}.header`,
    defaultMessage: 'Password'
  },
  labelSignIn: {
    id: `${scope}.header`,
    defaultMessage: 'Sign-In'
  }
});
