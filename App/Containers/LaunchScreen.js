import React, { Component } from 'react'
// import { ScrollView, Text, Image, View, Container, Header, Content, Form, Item, Input, Label, Button  } from 'react-native'
import { ScrollView, Image, View } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Icon, Button, Text } from 'native-base';
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import LoginButton from '../Components/LoginButton'
import SignupButton from '../Components/SignupButton'
import LoginForm from '../Components/LoginForm'
import { Images } from '../Themes'


// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  // static navigationOptions = {
  //   tabBarLabel: 'Launch',
  //   tabBarVisible: false
  // };

  render () {
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
