import React, { Component } from 'react';

import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'

class Copyright extends Component {

  render() {

    return (
        <React.Fragment>

          <Segment vertical style={{ padding: '1em 0em' }}  textAlign='center'>

                  Copyright &copy; 2018. AirBnb Inc.

          </Segment>


        </React.Fragment>
    );
  }
}

export default Copyright;
