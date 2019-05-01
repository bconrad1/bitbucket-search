import React from 'react';
import {FaCopy, FaEraser} from 'react-icons/fa';
import {connect} from 'react-redux';
import FileUploader from './FileUploader';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const OptionsBar = ({formData, onUploadClick, onClearClick}) => {
  return (<div className={'options-bar'}>
    <FileUploader onUploadClick={onUploadClick}/>
    <CopyToClipboard text={formData}>
      <div className={formData ? 'options-copy' : 'options-copy-disabled'}>
        <FaCopy/>
      </div>
    </CopyToClipboard>
    <div className={formData ? 'options-clear' : 'options-clear-disabled'} onClick={onClearClick}>
      <FaEraser/>
    </div>
  </div>);
};

function mapStateToProps(state) {
  return {formData: state.reducer.formData};
}

export default connect(mapStateToProps)(OptionsBar);