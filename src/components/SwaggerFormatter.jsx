import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextForm from './TextForm/TextForm';
import Header from './Header/Header';

class SwaggerFormatter extends Component {

  render() {
    console.log(this.props.formData)
    return (
      <div className={'swagger-formatter-container'}>
        <Header/>
        <TextForm/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {formData: state.reducer.formData};
}

export default connect(mapStateToProps)(SwaggerFormatter);