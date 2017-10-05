import React from 'react'
import { View, Modal, Image } from 'react-native'
import DebugConfig from '../Config/DebugConfig'
import PresentationScreen from '../../ignite/DevScreens/PresentationScreen.js'
import { Container, Header, Content, Button, Text } from 'native-base'
import styles from '../Components/Styles/RoundedButtonStyles'
import { Images } from '../Themes'

export default class SignupButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    if (DebugConfig.showDevScreens) {
      return (
        <View>

           <Button transparent onPress={this.toggleModal}>
           <Image source={Images.facebookLogin} style={styles.facebookButton} />

          </Button>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <PresentationScreen screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </View>
      )
    } else {
      return <View />
    }
  }
}
