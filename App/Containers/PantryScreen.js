import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Container, Header, Content, Form, Item, Input, Label  } from 'react-native'
import { StackNavigator } from 'react-navigation';
import { Images } from '../Themes'
import  AppNavigator from '../Components/AppNavigator'

import styles from './Styles/PantryScreenStyles'

export default class PantryScreen extends Component {
  static navigationOptions = {
    title: 'My Pantry',
  };
  render () {
    return (
        <View>
        <Text>Chat with Lucy</Text>
      </View>
    )
  }
}
