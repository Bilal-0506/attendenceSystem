import {Platform, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontPixel,
  heightPixel,
  widthPixel,
} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  notifiView: {
    marginBottom: heightPixel(20.24),
  },
  notiInnerOne: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: heightPixel(10.28),
  },
  notiInnerTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    height: heightPixel(42),
    width: widthPixel(42),
    marginRight: widthPixel(16),
    resizeMode: 'contain',
  },
  heading: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(1.75),
    color: colors.black,
    marginBottom: heightPixel(5.14),
  },
  time: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
    color: '#838383',
  },
  des: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
    color: '#666',
  },
});
