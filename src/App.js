import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import AbbHeader from './components/AbbHeader';
import Main from './Main';


class App extends Component {

  render() {
    
    return (
        <React.Fragment>
          <AbbHeader />
          <Main />
        </React.Fragment>
    );
  }
}

export default App;
