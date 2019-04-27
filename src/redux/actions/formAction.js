import * as types from './actionTypes';

export function receiveFormData(json) {
  return {type: types.RECEIVE_DATA, formData: json};
}

export function getFormData(formData) {
  return dispatch => {
    const inputData = formData ? formData : '';
    dispatch(receiveFormData({formData: inputData}));
  };
}
