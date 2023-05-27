import { getCategories } from '../../api';
import { SET_CURRENT_CATEGORY, SET_CATEGORIES } from './actionTypes';

export const setCurrentCategoryAction = (categoryId) => ({
  type: SET_CURRENT_CATEGORY,
  payload: categoryId,
});

export const setCategoriesAction = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const getCategoriesAction = () => (dispatch) =>
  getCategories().then((categories) =>
    dispatch(setCategoriesAction(categories))
  );
