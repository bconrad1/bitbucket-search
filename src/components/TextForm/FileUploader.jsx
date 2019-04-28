import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FileUploader extends Component {
  static propTypes = {
    onSampleClick: PropTypes.func,
    onUploadClick: PropTypes.func
  };

  render() {
    let {onSampleClick, onUploadClick} = this.props;
    return (
        <div className={'form-container'}>
          <div>
              <div className={'chose-btn-container'}>
                <input type='file' name='file' id='file' className={'inputfile'}
                       accept='.mp3'/>
                <label htmlFor='file' className={'btn'}>{'Upload File'}</label>
            </div>
          </div>
        </div>
    );
  }
}

export default FileUploader;

