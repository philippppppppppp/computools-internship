import {
  SHOW_SIGNUP_MODAL,
  SHOW_SIGNIN_MODAL,
  HIDE_MODAL,
} from './actionTypes';

export const showSignupModalAction = () => ({
  type: SHOW_SIGNUP_MODAL,
});

export const showSigninModalAction = () => ({
  type: SHOW_SIGNIN_MODAL,
});

export const hideModalAction = () => ({
  type: HIDE_MODAL,
});
