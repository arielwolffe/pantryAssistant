import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation';
import GroceryListScreen from '../Containers/GroceryListScreen'
import PantryScreen from '../Containers/PantryScreen'
import InventoryScreen from '../Containers/InventoryScreen'
import MealPlanScreen from '../Containers/MealPlanScreen'
import { Colors} from '../Themes'


const AppNavigator = TabNavigator({
     Pantry: { screen: PantryScreen },
     Inventory: { screen: InventoryScreen },
     GroceryList: { screen: GroceryListScreen },
     MealPlan: { screen: MealPlanScreen },
    }, {
      tabBarPosition: 'bottom',
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: Colors.oceanSpray,
      },
    
  });

  export default AppNavigator 