import { SET_COUPONS } from '../actions/actionTypes';

const initialState = [];

const couponsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUPONS:
      return action.payload;
    default:
      return state;
  }
};

export default couponsReducer;
