import React, {
  Component,
} from 'react';
import {connect} from 'react-redux';
import * as formActions from '../../redux/actions/formAction';
import {bindActionCreators} from 'redux';

class TextForm extends Component {
  constructor(props) {
    super(props);
  }

  handleOnChange = (event) => {
    let formText = event.target.value;
    this.props.formAction.getFormData(formText);
  };

  render() {
    return (
      <div className={'text-area-container'}>
        <form className={'text-area-form'}>
          <textarea className={'text-area'}
                    spellCheck="false"
                    onChange={this.handleOnChange}/>
        </form>
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
