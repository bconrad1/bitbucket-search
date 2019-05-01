import initialState from '../initialState';
import {
  GET_DATA,
  RECEIVE_FILE_DATA,
  RECEIVE_FORM_DATA,
} from '../actions/actionTypes';

export default function formData(state = initialState.formData, action) {
  let newState;
  switch (action.type) {
    case GET_DATA:
      return action;
    case RECEIVE_FORM_DATA:
      newState = {formData: action.formData, fileType: state.fileType};
      return newState;
    case RECEIVE_FILE_DATA:
      newState = {formData: state.formData, fileType: action.fileType};
      return newState;
    default:
      return state;
  }
}