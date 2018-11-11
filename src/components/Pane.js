import React, { Component } from 'react';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import AdsHome from './AdsHome';


class Pane extends Component {

  render() {

    return (
        <React.Fragment>

          <Segment style={{ padding: '2em 0em', backgroundColor: '#f7f7f7' }} vertical>


                   <Segment textAlign='center' vertical inverted className="landing-hero" >
                     <div className="transbg">
                       <Header as='h1' textAlign='center' className="landing-hero-header1 color-white">
                        World’s Largest Classifieds Portal
                        </Header>
                        <Header as='h3' textAlign='center'  className="landing-hero-header2 color-white">
                         Search from over 15,00,000 classifieds & Post unlimited classifieds free!
                         </Header>


                    </div>

                   </Segment>










              <AdsHome />


          </Segment>


        </React.Fragment>
    );
  }
}

export default Pane;
