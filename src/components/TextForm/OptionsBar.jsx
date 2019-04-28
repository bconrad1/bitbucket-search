import React from 'react';
import {FaCopy} from 'react-icons/fa';
import {connect} from 'react-redux';
import FileUploader from './FileUploader';

const OptionsBar = ({formData, onUploadClick}) => {
  console.log(formData)
  return (<div className={'options-bar'}>
    <FileUploader onUploadClick={onUploadClick}/>
    <div className={formData ? 'options-copy' : 'options-copy-disabled'}>
      <FaCopy/>
    </div>
  </div>);
};

function mapStateToProps(state) {
  console.log(state);
  return {formData: state.reducer.formData};
}

export default connect(mapStateToProps)(OptionsBar);