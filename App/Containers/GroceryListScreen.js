import React, { Component } from 'react'
import { ScrollView, Image, View, Form, Item, Input, Label, ListView  } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle, List, ListItem, Content, Text, Badge, Fab, Switch} from 'native-base';
import { StackNavigator } from 'react-navigation';
import { SearchBar } from 'react-native-elements'
import { Images } from '../Themes'
import styles from './Styles/PantryScreenStyles'

const datasInventory = [
  {itemName: 'Crix', itemCount: 3, itemPackage: 'Pack', itemPrice: '$23.99'},
  {itemName: 'Cheese', itemCount: 1, itemPackage: 'Single', itemPrice: '$20.00'},
  {itemName: 'Bread', itemCount: 2, itemPackage: 'Single', itemPrice: '$25.00'},
  {itemName: 'Butter', itemCount: 1, itemPackage: 'Single', itemPrice: '$7.99'},
  {itemName: 'Milk', itemCount: 1, itemPackage: 'Single', itemPrice: '$17.99'},
  {itemName: 'Bottled Water ', itemCount: 1, itemPackage: 'Case', itemPrice: '$24.00'}
];

export default class GroceryListScreen extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datasInventory,
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
             <ListItem icon>
               <Left>
               <Button style={styles.bargeButton}>
                <Text style={styles.itemCount}>{data.itemCount}</Text>
                </Button>
               </Left>
               <Body>
                 <Text> {data.itemName}</Text>
               </Body>
               <Right>
               <Text>{data.itemPackage}-{data.itemPrice} </Text>
             </Right>
             </ListItem>}

           renderRightHiddenRow={(data, secId, rowId, rowMap) =>
             <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}style={{flex:1, flexDirection:'row'}}>
             <Icon active name="trash" />
           </Button>}

           renderLeftHiddenRow={data =>
           <View style={{flex:1, flexDirection:'row', marginRight: 10}}>
            <Button success onPress={() => alert(data)} style={{flex:1, flexDirection:'row'}}>
              <Icon active name="add" />
            </Button>

            <Button primary onPress={() => alert(data)} style={{flex:1, flexDirection:'row'}}>
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
