import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FaFileUpload} from 'react-icons/fa';

class FileUploader extends Component {
  static propTypes = {
    onSampleClick: PropTypes.func,
    onUploadClick: PropTypes.func,
  };

  render() {
    let {onUploadClick} = this.props;
    return (
      <div className={'form-container'}>
        <div className={'upload-btn-container'}>
          <input type='file' name='file' id='file' className={'inputfile'}
                 accept='.yml' onChange={onUploadClick}/>
          <label htmlFor='file' className={'btn'}><FaFileUpload/></label>
        </div>
        <div className={'upload-btn-label-container'}>
          <span className={'upload-btn-label'}>{'UPLOAD'}</span>
        </div>
      </div>
    );
  }
}

export default FileUploader;

