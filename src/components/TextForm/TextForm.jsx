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
      currentText: formText,
      lineCount,
    });
    this.props.formAction.getFormData(formText);
  };

  handleFileLoaded = (e) => {
    const fileData = fileReader.result;
    if (fileData) {
      this.props.formAction.getFormData(fileData);
      this.setState({
        currentText: fileData,
        lineCount: this.getLineCount(fileData),
      });
    }
  };

  onClearClick = () => {
    const emptyText = '';
    this.setState({
      currentText: emptyText,
      lineCount: 0
    });
    this.props.formAction.getFormData(emptyText);
  };

  onUploadClick = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const fileType = file['name'].split('.').slice(-1)[0];
    this.props.formAction.getFileType(fileType);
    fileReader = new FileReader();
    fileReader.onloadend = this.handleFileLoaded;
    fileReader.readAsText(file);
  };

  render() {
    let {currentText} = this.state;
    return (
      <div className={'input-container'}>
        <OptionsBar onUploadClick={this.onUploadClick}
                    onClearClick={this.onClearClick}/>
        <div className={'text-area-container'}>
          <textarea className={'text-area'}
                    spellCheck="false"
                    value={currentText}
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
