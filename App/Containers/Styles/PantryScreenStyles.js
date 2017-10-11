import { StyleSheet } from 'react-native'
import { Fonts, Colors,Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },

  centered: {
    alignItems: 'center'
  },

  headerTitle:{
     ...Fonts.base
  },
  badge: {
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin
  },
  listMargin:{
    marginLeft: Metrics.doubleBaseMargin
  },
  fabStyle:{
    backgroundColor: Colors.oceanSpray,
    alignSelf: 'center'
  },
  fabConatinerStyle:{
    alignItems: 'center'
  }

})