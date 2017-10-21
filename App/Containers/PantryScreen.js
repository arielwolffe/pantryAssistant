import React, { Component } from 'react'
import { ScrollView, Image, View, Form, Item, Input, Label , ListView, TouchableOpacity, Alert, TouchableHighlight } from 'react-native'
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
  {itemName: 'Crix', itemCount: 3, itemPackage: 'Pack', itemPrice: '$23.99'},
  {itemName: 'Cheese', itemCount: 1, itemPackage: 'Single', itemPrice: '$20.00'},
  {itemName: 'Bread', itemCount: 2, itemPackage: 'Single', itemPrice: '$25.00'},
  {itemName: 'Butter', itemCount: 1, itemPackage: 'Single', itemPrice: '$7.99'},
  {itemName: 'Milk', itemCount: 1, itemPackage: 'Single', itemPrice: '$17.99'},
  {itemName: 'Bottled Water ', itemCount: 1, itemPackage: 'Case', itemPrice: '$24.00'},
  {itemName: 'Bacon', itemCount: 2, itemPackage: 'Pack', itemPrice: '$15.00'},
  {itemName: 'Purina Dog Chow', itemCount: 1, itemPackage: 'Single', itemPrice: '$140.00'}

];

 class PantryScreen extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
      active: true, 
      toggle: false
    };
  }
//   getInitialState(){
//     return { toggle: false };
// }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  addItemCount(secId, rowId, rowMap, data){
    const newData = [...this.state.listViewData];
    newData[rowId].itemCount += 1;
    this.setState({ listViewData: newData });
  }

  minusItemCount(secId, rowId, rowMap, data){
    const newData = [...this.state.listViewData];
    var tempNewCount= newData[rowId].itemCount - 1;
    if(tempNewCount<1){
      Alert.alert(
        'Item Will Be deleted',
        'The item quantity is now at zero, the item will be removed from the List!',
        [
          {text: 'Okay', onPress: ()=>this.deleteRow(secId, rowId, rowMap)},
          {text: 'Cancel'}
        ],
        { cancelable: true }
      );}
      else{
        newData[rowId].itemCount = tempNewCount;
      }
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
         placeholder='Search your inventory items...' />
       </View>
       <Content>
       <List style={styles.listMargin}
         dataSource={this.ds.cloneWithRows(this.state.listViewData)}
         renderRow={data =>
         <TouchableHighlight
         onPress={()=> this.setState({toggle: !this.state.toggle})}>
         {/* style={styles.button}> */}
     
           <ListItem icon style={[styles.listLineItem, this.state.toggle && styles.listLineItemStrike]}>
             <Left>
             <Button style={styles.bargeButton}>
              <Text style={styles.itemCount}>{data.itemCount}</Text>
              </Button>
             </Left>
             <Body>
               <Text> {data.itemName} </Text>
             </Body>
             <Right>
             <Text> {data.itemPackage}</Text>
           </Right>
           </ListItem>
           </TouchableHighlight>}

         renderRightHiddenRow={(data, secId, rowId, rowMap) =>
           <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}style={{flex:1, flexDirection:'row'}}>
            <Icon active name="trash" />
           </Button>
          }

         renderLeftHiddenRow={(data, secId, rowId, rowMap) =>
         <View style={{flex:1, flexDirection:'row', marginRight: 10}}>
            <Button success onPress={_ => this.addItemCount(secId, rowId, rowMap, data)} style={{flex:1, flexDirection:'row'}}>
              <Icon active name="add" />
            </Button>

            <Button primary onPress={_ => this.minusItemCount(secId, rowId, rowMap, data)} style={{flex:1, flexDirection:'row'}}>
            <Icon active name="remove" />
            </Button>
          </View>
          }
         leftOpenValue={120}
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
