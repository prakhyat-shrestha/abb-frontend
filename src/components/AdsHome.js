import React, { Component } from 'react';

import {
  Container,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react'

import { List, Image , Divider} from 'semantic-ui-react'
class AdsHome extends Component {

  render() {

    return (
        <React.Fragment>
          <Container>
            <Segment vertical style={{ padding: '1em 0em', backgroundColor: '#ffffff' }} >
              <Header as='h3' style={{padding: '10px 30px'}}>Trending Ads</Header>
              <Divider style={{margin: '0 30px'}} />
              <List size={'big'} style={{padding: 30}}>
                 <List.Item style={{border: '1px solid #e2e2e2',borderRadius: 5,paddingTop: 0, paddingBottom: 0,margin: '20px 0'}}>
                   <Image  src='https://via.placeholder.com/270x150' />
                   <List.Content style={{padding:25}} >
                     <List.Header as='a'>$50.00</List.Header>
                     <List.Description>
                        Apple TV - Everything you need to know!
                     </List.Description>
                     <div style={{fontSize: '1rem',color: '#a0a0a0'}}>Electronics & Gedgets / Tv & Video</div>
                      <div style={{fontSize: '1rem',color: '#a0a0a0',backgroundColor: '#f6f6f6'}}>7 Jan, 16 10:10 pm </div>
                   </List.Content>

                 </List.Item>
                 <List.Item style={{border: '1px solid #e2e2e2',borderRadius: 5,paddingTop: 0, paddingBottom: 0,margin: '20px 0'}}>
                   <Image  src='https://via.placeholder.com/270x150' />
                   <List.Content style={{padding:25}} >
                     <List.Header as='a'>$50.00</List.Header>
                     <List.Description>
                        Apple TV - Everything you need to know!
                     </List.Description>
                     <div style={{fontSize: '1rem',color: '#a0a0a0'}}>Electronics & Gedgets / Tv & Video</div>
                      <div style={{fontSize: '1rem',color: '#a0a0a0',backgroundColor: '#f6f6f6'}}>7 Jan, 16 10:10 pm </div>
                   </List.Content>

                 </List.Item>

                 <List.Item style={{border: '1px solid #e2e2e2',borderRadius: 5,paddingTop: 0, paddingBottom: 0,margin: '20px 0'}}>
                   <Image  src='https://via.placeholder.com/270x150' />
                   <List.Content style={{padding:25}} >
                     <List.Header as='a'>$50.00</List.Header>
                     <List.Description>
                        Apple TV - Everything you need to know!
                     </List.Description>
                     <div style={{fontSize: '1rem',color: '#a0a0a0'}}>Electronics & Gedgets / Tv & Video</div>
                      <div style={{fontSize: '1rem',color: '#a0a0a0',backgroundColor: '#f6f6f6'}}>7 Jan, 16 10:10 pm </div>
                   </List.Content>

                 </List.Item>

               </List>
            </Segment>
          </Container>
        </React.Fragment>
    );
  }
}

export default AdsHome;
