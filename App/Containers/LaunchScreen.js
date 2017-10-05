import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Container, Header, Content, Form, Item, Input, Label  } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import LoginButton from '../Components/LoginButton'
import SignupButton from '../Components/SignupButton'
import LoginForm from '../Components/LoginForm'
import PantryScreen from './PantryScreen'
import { StackNavigator } from 'react-navigation';
import { Images } from '../Themes'


// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          
          <View style={styles.centered}>
            <Image source={Images.pantryLogo} style={styles.logo} />
          </View>

          <View style={styles.sections} >

              <Text style={styles.sectionText}>
              Managing your kitchen made easy!
              </Text>
          </View>
          <LoginButton />
          
          <View style={styles.sections} >
              <Text style={styles.subtitle}>
                or Login with your account Info!
              </Text>
          </View>
          
          <LoginForm/>
          <View style={styles.sections} >
              <Text style={styles.subtitle}>
                Don't have an account? Sign Up here!
              </Text>
              <Button
          onPress={() => navigate('Pantry')}
          title="My Pantry"
        />
          </View>
         
        </ScrollView>
      </View>
    )
  }
}
export const AppNavigator = StackNavigator({
  Launch: { screen: LaunchScreen },
  Pantry: { screen: PantryScreen }
});
