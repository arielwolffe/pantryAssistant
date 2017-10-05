import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({

  FormItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Metrics.doubleSection,
    marginLeft: Metrics.doubleSection
    
  },
  LoginSubmitBtn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Metrics.doubleSection,
    marginLeft: Metrics.doubleSection,
    marginTop: Metrics.baseMargin
  }

})
