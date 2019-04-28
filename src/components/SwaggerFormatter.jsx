import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextForm from './TextForm/TextForm';
import Header from './Header/Header';
import FileUploader from './TextForm/FileUploader';

class SwaggerFormatter extends Component {
  render() {
    return (
      <div className={'swagger-formatter-container'}>
        <Header/>
        <TextForm/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {formData: state.formData};
}

export default connect(mapStateToProps)(SwaggerFormatter);