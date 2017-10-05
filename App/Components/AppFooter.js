import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';


export default class AppFooter extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="cart" />
              <Text>Pantry</Text>
            </Button>
            <Button vertical>
              <Icon name="pint" />
              <Text>Inventory</Text>
            </Button>
            <Button vertical active>
              <Icon active name="paper" />
              <Text>Grocery List</Text>
            </Button>
            <Button vertical>
              <Icon name="nutrition" />
              <Text>Meal Plan</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}