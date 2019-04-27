import initialState from '../initialState';
import {GET_DATA, RECEIVE_DATA} from '../actions/actionTypes';

export default function formData(state = initialState.formData, action) {
  let newState;
  switch (action.type) {
    case GET_DATA:
      return action;
    case RECEIVE_DATA:
      newState = action.formData;
      return newState;
    default:
      return state;
  }
}