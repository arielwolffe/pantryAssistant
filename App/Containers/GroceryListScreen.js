import React, { Component } from 'react'
import { ScrollView, Image, View, Form, Item, Input, Label, ListView  } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle, List, ListItem, Content, Text, Badge, Fab, Switch} from 'native-base';
import { StackNavigator } from 'react-navigation';
import { SearchBar } from 'react-native-elements'
import { Images } from '../Themes'
import styles from './Styles/PantryScreenStyles'

const datasInventory = [
  'Crix',
  'Cheese',
  'Bread',
  'Butter',
  'Milk',
  'Bottles water',
  'Sausages',
  'Dog Chow',
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
                <Text style={styles.itemCount}>2</Text>
                </Button>
               </Left>
               <Body>
                 <Text> {data} </Text>
               </Body>
               <Right>
               <Text> $15.99 </Text>
             </Right>
             </ListItem>}

           renderLeftHiddenRow={(data, secId, rowId, rowMap) =>
             <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}style={{flex:1, flexDirection:'row'}}>
             <Icon active name="trash" />
           </Button>}

           renderRightHiddenRow={data =>
           <View style={{flex:1, flexDirection:'row'}}>


            
             </View>
              }
           leftOpenValue={75}
           rightOpenValue={-155}
           disableLeftSwipe={true}
         />
       </Content>
     </Container>
    )
  }
}
