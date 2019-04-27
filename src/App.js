import React, {Component} from 'react';
import SwaggerFormatter from './components/SwaggerFormatter';

class App extends Component {

  render() {
    return (
      <div className={'swagger-formatter'}>
        <SwaggerFormatter/>
      </div>
    );
  }
}

export default App;
