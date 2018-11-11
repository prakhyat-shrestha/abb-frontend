import React, { Component } from 'react';
import './../../App.css';
import 'semantic-ui-css/semantic.min.css';

import AbbHeader from './../AbbHeader';
import Pane from './../Pane';
import AbbFooter from './../AbbFooter';
import Copyright from './../Copyright';


class Home extends Component {

  render() {


    return (
        <React.Fragment>

            <Pane />
            <AbbFooter />
            <Copyright />

        </React.Fragment>
    );
  }
}

export default Home;
