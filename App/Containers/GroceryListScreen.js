import React, { Component } from 'react'
import { ScrollView, Image, View, Form, Item, Input, Label, ListView  } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle, List, ListItem, Content, Text, Badge, Fab, SwipeRow} from 'native-base';
import { StackNavigator } from 'react-navigation';
import { Images } from '../Themes'
import styles from './Styles/PantryScreenStyles'


export default class GroceryListScreen extends Component {
    static navigationOptions = {
        title : 'My Grocery List',
        tabBarLabel: 'GroceryList',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={Images.groceryListIcon}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
//  openPantry = () => {
//     this.props.navigation.navigate('PantryScreen')
//   }
//   openGroceryList = () => {
//     this.props.navigation.navigate('GroceryListScreen')
//   } 

  render () {
    return (
        <Container>
           <Header>
           <Body>
             <Title style={styles.headerTitle}>My Grocery List</Title>
             <Subtitle>Pantry Assistant</Subtitle>
           </Body>
         </Header>
         <Container>
        <Header />
        <Content scrollEnabled={false}>
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Add')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text>SwipeRow Body Text</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
        </Content>
      </Container>
      </Container>
    )
  }
}
