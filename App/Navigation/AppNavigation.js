import { StackNavigator, TabNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import GroceryListScreen from '../Containers/GroceryListScreen'
import PantryScreen from '../Containers/PantryScreen'
import InventoryScreen from '../Containers/InventoryScreen'
import MealPlanScreen from '../Containers/MealPlanScreen'
import { Colors} from '../Themes'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  PantryScreen: {screen: MainNav}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})


export default PrimaryNav
