import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextForm from './TextForm/TextForm';

class SwaggerFormatter extends Component {
  render() {
    return (
      <div className={'swagger-formatter-container'}>
        <TextForm/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {formData: state.formData};
}

export default connect(mapStateToProps)(SwaggerFormatter);