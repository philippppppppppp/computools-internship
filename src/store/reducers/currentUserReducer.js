import { REMOVE_CURRENT_USER, SET_CURRENT_USER } from '../actions/actionTypes';

const initialState = null;

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload.user;
    case REMOVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default currentUserReducer;
