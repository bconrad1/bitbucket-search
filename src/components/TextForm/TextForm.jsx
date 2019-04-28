import React, {
  Component, Fragment,
} from 'react';
import {connect} from 'react-redux';
import * as formActions from '../../redux/actions/formAction';
import {bindActionCreators} from 'redux';
import FileUploader from './FileUploader';
import OptionsBar from './OptionsBar';

class TextForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lineCount: 0,
    };
  }

  handleOnChange = (event) => {
    const formText = event.target.value;
    const lines = formText.split(/\r|\r\n|\n/);
    const lineCount = formText ? lines.length : 0;
    this.setState({
      lineCount,
    });
    this.props.formAction.getFormData(formText);
  };

  render() {
    return (
      <div className={'input-container'}>
        <OptionsBar/>
        <div className={'text-area-container'}>
          <textarea className={'text-area'}
                    spellCheck="false"
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
