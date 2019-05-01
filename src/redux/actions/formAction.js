import * as types from './actionTypes';

export function receiveFormData(json) {
  return {type: types.RECEIVE_FORM_DATA, formData: json};
}

export function receiveFileType(json) {
  return {type: types.RECEIVE_FILE_DATA, fileType: json};
}

export function getFormData(formData) {
  return dispatch => {
    const inputData = formData ? formData : '';
    dispatch(receiveFormData({formData: inputData}));
  };
}

export function getFileType(fileType) {
  return dispatch => {
    console.log(fileType)
    dispatch(receiveFileType({fileType}));
  };
}
