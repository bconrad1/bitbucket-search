import * as types from './actionTypes';

export function receiveLaunches(json) {
  return {type: types.RECEIVE_DATA, data: json};
}

export function getData() {
  return dispatch => {
    return {};
  };
}
