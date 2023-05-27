import {
  SHOW_SIGNUP_MODAL,
  SHOW_SIGNIN_MODAL,
  HIDE_MODAL,
} from '../actions/actionTypes';

export const SIGNUP_MODAL = 'SIGNUP-MODAL';
export const SIGNIN_MODAL = 'SIGNIN-MODAL';

const initialState = null;

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SIGNUP_MODAL:
      return SIGNUP_MODAL;
    case SHOW_SIGNIN_MODAL:
      return SIGNIN_MODAL;
    case HIDE_MODAL:
      return null;
    default:
      return state;
  }
};
