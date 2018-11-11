import React, { Component } from 'react';

import { Segment, Input, Menu, Icon, Button, Container, Image  } from 'semantic-ui-react';

import { Link } from 'react-router-dom'


class AbbHeader extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {

    const { activeItem } = this.state

    return (
        <React.Fragment>
          <Container>
            <Segment basic>

              <Menu text >
                <Image src='images/logo.png' />
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <Button.Group>
                      <Button primary>Login</Button>
                      <Button.Or />
                      <Button positive>Register</Button>
                    </Button.Group>
                  </Menu.Item>

                </Menu.Menu>
                </Menu>



            </Segment>

          </Container>



        </React.Fragment>
    );
  }
}

export default AbbHeader;
