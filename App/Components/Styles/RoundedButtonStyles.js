import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({

  facebookButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.images.medium,
    width: Metrics.images.medium,
    paddingTop: Metrics.smallMargin,
    marginBottom: Metrics.doubleBaseMargin,
    resizeMode: 'center',
  }

})
