import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen'
import PantryScreen from '../Containers/PantryScreen'


export default AppNavigator = StackNavigator({
    Launch: { screen: LaunchScreen },
    Pantry: { screen: PantryScreen }
  });