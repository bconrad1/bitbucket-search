import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextForm from './TextForm/TextForm';
import Header from './Header/Header';
import {formatConfig} from './formatConfig';

class SwaggerFormatter extends Component {

  checkFormValidity = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  handleOnClick = () => {
    const {formData} = this.props;
    if (this.checkFormValidity(formData)) {
      console.log('valid');
      const formattedConfig = formatConfig(this.props.formData);
    }else{
      console.log('invalid')
    }

  };

  render() {
    return (
      <div className={'swagger-formatter-container'}>
        <Header/>
        <div className={'format-options-container'}>
          <div className={this.props.formData
            ? 'format-btn-enabled format-btn'
            : 'format-btn-disabled format-btn'}
               onClick={this.handleOnClick}>
            Format
          </div>
        </div>
        <TextForm/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {formData: state.reducer.formData};
}

export default connect(mapStateToProps)(SwaggerFormatter);