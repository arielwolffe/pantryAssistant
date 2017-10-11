import React from 'react'
import { View, Modal,Image } from 'react-native'
import DebugConfig from '../Config/DebugConfig'
import { Container, Header, Content, Button, Text } from 'native-base'
import styles from '../Components/Styles/RoundedButtonStyles'
import PantryScreen from '../Containers/PantryScreen.js'
import { Images } from '../Themes'
import { StackNavigator } from 'react-navigation';

export default class LoginButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  // openPantry = () => {
  //   this.props.navigation.navigate('PantryScreen')
  // }
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {

    if (DebugConfig.showDevScreens) {
      return (
        <View>
            <Button transparent onPress={this.toggleModal}>
            <Image source={Images.facebookLogin} style={styles.facebookButton} resizeMode='contain' />
          </Button>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <PantryScreen screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </View>
      )
    } else {
      return <View />
    }
  }
}
