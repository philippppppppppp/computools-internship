import {
  authenticateUser,
  registerUser,
  authenticateUserWithProvider,
} from '../../api';
import { REMOVE_CURRENT_USER, SET_CURRENT_USER } from './actionTypes';
import { hideModalAction } from './modalActions';

export const setCurrentUserAction = (user) => ({
  type: SET_CURRENT_USER,
  payload: { user },
});

export const removeCurrentUserAction = () => {
  localStorage.removeItem('jwt');
  return { type: REMOVE_CURRENT_USER };
};

export const registerUserAction = (user) => (dispatch) =>
  registerUser(user).then((res) => {
    localStorage.setItem('jwt', res.jwt);
    dispatch(setCurrentUserAction(res.user));
    dispatch(hideModalAction());
  });

export const authenticateUserAction = (user) => (dispatch) =>
  authenticateUser(user).then((res) => {
    localStorage.setItem('jwt', res.jwt);
    dispatch(setCurrentUserAction(res.user));
    dispatch(hideModalAction());
  });

export const authenticateUserWithProviderAction =
  (provider, searchParams, history) => (dispatch) =>
    authenticateUserWithProvider(provider, searchParams)
      .then((res) => {
        localStorage.setItem('jwt', res.jwt);
        dispatch(setCurrentUserAction(res.user));
      })
      .finally(() => history.push('/'));
