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
  searchAndFabView:{ flexDirection:'row', marginTop: 30, marginBottom: 10, marginLeft: 20},
  badge: {
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin
  },
  listMargin:{
    marginLeft: Metrics.doubleBaseMargin
  },
  fabStyle:{
    flex: .5, flexDirection: 'column', backgroundColor: Colors.oceanSpray, marginBottom: -20, height:45, width:45
  },
  fabConatinerStyle:{
    alignItems: 'center'
  },
  bargeButton:{
    width: 25,
    height: 25,
    backgroundColor: Colors.oceanSpray,
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  itemCount:{
    textAlign: 'center',
    flexDirection: 'row',
    lineHeight: Metrics.horizontalSmallLineHeight,
    fontSize: Fonts.size.medium,
    alignSelf: 'center',
    marginLeft: -8

  }

})