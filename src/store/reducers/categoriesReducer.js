import { SET_CATEGORIES, SET_CURRENT_CATEGORY } from '../actions/actionTypes';

const initialState = {
  currentCategory: null,
  categories: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
