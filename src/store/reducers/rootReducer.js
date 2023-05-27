import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import currentUserReducer from './currentUserReducer';
import couponsReducer from './couponsReducer';
import categoriesReducer from './categoriesReducer';

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  modal: modalReducer,
  coupons: couponsReducer,
  categories: categoriesReducer,
});
