import {StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';

export const styles = StyleSheet.create({
  main: {
    justifyContent: 'space-between',
    paddingTop: heightPixel(40),
  },
  headerView: {flexDirection: 'row', marginBottom: heightPixel(24)},
  heading: {
    fontFamily: fontFamily.appTextBold,
    color: colors.white,
    fontSize: responsiveFontSize(3.25),
    marginRight: widthPixel(8),
  },
  iconStyle: {
    height: heightPixel(30),
    width: widthPixel(30),
    resizeMode: 'contain',
  },
  imageStyle: {
    width: widthPixel(269),
    height: heightPixel(50),
    resizeMode: 'contain',
    marginBottom: heightPixel(12),
  },
  textStyle: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.white,
    fontSize: responsiveFontSize(2.0),
  },
});
