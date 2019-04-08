import initialState from '../initialState';
import {GET_DATA, RECEIVE_DATA} from '../actions/actionTypes';

export default function launchInfo(state = initialState.data, action) {
  let newState;
  switch (action.type) {
    case GET_DATA:
      return action;
    case RECEIVE_DATA:
      newState = action.data;
      return newState;
    default:
      return state;
  }
}