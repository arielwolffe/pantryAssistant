import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Icon, Button, Text } from 'native-base';
// Styles
import styles from './Styles/LoginFormStyles'

export default class LoginForm extends Component {
 
    render() {
    return (
          <Form >
          {/* // Text input box with icon aligned to the left */}
            <Item style={styles.FormItem}>
                <Icon active name='mail' />
                <Input placeholder='Email'/>
            </Item>
            {/* // Text input box with icon aligned to the right */}
            <Item style={styles.FormItem}>
                <Icon active name='unlock' />
                <Input placeholder='Password'/>
            </Item>

                <Button small success style={styles.LoginSubmitBtn}>
                    <Text>Sign In</Text>
                </Button>

           
          </Form>

    );
  }
}