import React, { Component } from 'react'
import { ScrollView, Image, View, Form, Item, Input, Label , ListView, TouchableOpacity } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle, List, ListItem, Content, Text, Badge, Fab} from 'native-base';
import { StackNavigator, TabNavigator} from 'react-navigation'
import { SearchBar } from 'react-native-elements'
import { Images } from '../Themes'
import styles from './Styles/PantryScreenStyles'
import {Colors} from '../Themes/'
import GroceryListScreen from '../Containers/GroceryListScreen'
import InventoryScreen from '../Containers/InventoryScreen'
//import MealPlanScreen from '../Containers/MealPlanScreen'

const datas = [
  'Crix',
  'Cheese',
  'Bread',
  'Butter',
  'Milk',
  'Bottles water',
  'Sausages',
  'Dog Chow',
];

 class PantryScreen extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
      active: true
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  static navigationOptions = {
    title : 'My Pantry',
    tabBarLabel: 'Pantry',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.pantryIcon}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render () {
   
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
        <Container>
           <Header>

           <Body>
             <Title style={styles.headerTitle}>My Pantry</Title>
             <Subtitle>Pantry Assistant</Subtitle>
           </Body>
           {/* <Right style={{flex: 1}}>
            <Button transparent>
              <Icon name='settings' />
            </Button>
          </Right> */}
         </Header>
           <View style={styles.searchAndFabView}>
         <Fab small
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={styles.fabStyle}
            text="Add Items to your pantry..."
            position="bottomRight"
            onPress={() => {
              this.setState({ active: !this.state.active }) 
                alert('Add a new Item Here!')
                }}>
            <Icon name="add" />
          </Fab>
          <SearchBar round
            lightTheme
            //onChangeText={someMethod}
            placeholder='Search current pantry items...' />
          </View>
          
          <Content>
         <List style={styles.listMargin}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
              <Button style={styles.bargeButton}>
                <Text style={styles.itemCount}>2</Text>
                </Button>

                <Text> {data} </Text>
                              
              </ListItem>}
              
              renderRightHiddenRow ={data =>
              <Button success onPress={() => alert(data)}>
                <Icon active name="add" />
              </Button>}

              renderLeftHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
       
          />
         
        </Content>
      </Container>
    )
  }
}

export default MainNav = TabNavigator({
  Pantry: { screen: PantryScreen },
  Inventory: { screen: InventoryScreen },
  GroceryList: { screen: GroceryListScreen },
  //MealPlan: { screen: MealPlanScreen },
 }, {
   tabBarPosition: 'bottom',
   animationEnabled: true,
   tabBarOptions: {
     activeTintColor: Colors.oceanSpray,
   },
 
});
