import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as formActions from '../../redux/actions/formAction';
import {bindActionCreators} from 'redux';
import OptionsBar from './OptionsBar';

let fileReader = null;

class TextForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineCount: 0,
    };
  }

  getLineCount = (value) => {
    const lines = value.split(/\r|\r\n|\n/);
    return value ? lines.length : 0;
  };

  handleOnChange = (event) => {
    const formText = event.target.value;
    const lineCount = this.getLineCount(formText);
    this.setState({
      lineCount,
    });
    this.props.formAction.getFormData(formText);
  };

  handleFileLoaded = (e) => {
    const fileData = fileReader.result;
    this.setState({
      fileData,
      lineCount: this.getLineCount(fileData)
    })
  };

  onUploadClick = (e) => {
    const file = e.target.files[0];
    fileReader = new FileReader();
    fileReader.onloadend = this.handleFileLoaded;
    fileReader.readAsText(file);
  };

  render() {
    let {fileData} = this.state;
    return (
      <div className={'input-container'}>
        <OptionsBar onUploadClick={this.onUploadClick}/>
        <div className={'text-area-container'}>
          <textarea className={'text-area'}
                    spellCheck="false"
                    value={fileData ? fileData : null }
                    onChange={this.handleOnChange}/>
          <div className={'line-count'}>
            <span>LINES: {this.state.lineCount}</span>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    formAction: bindActionCreators(formActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextForm);
