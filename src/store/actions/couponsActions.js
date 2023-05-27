import { getCoupons } from '../../api';
import { SET_COUPONS } from './actionTypes';

export const setCouponstAction = (coupons) => ({
  type: SET_COUPONS,
  payload: coupons,
});

export const getCouponsAction = () => (dispatch) =>
  getCoupons().then((coupons) => dispatch(setCouponstAction(coupons)));
