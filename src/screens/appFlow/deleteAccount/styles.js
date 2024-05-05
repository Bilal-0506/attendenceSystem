import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  viewOne: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightPixel(10),
  },
  viewTwo: {
    marginTop: heightPixel(24),
  },
  iconStyle: {
    height: heightPixel(23),
    width: widthPixel(23),
    resizeMode: 'contain',
    marginRight: widthPixel(10),
  },
  title: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.0),
    color: colors?.black,
    lineHeight: heightPixel(25),
  },
  para: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
    color: colors?.placeHolderColor,
    lineHeight: heightPixel(25),
    marginBottom: heightPixel(4),
  },
  input: {
    marginTop: heightPixel(24),
  },
  heading: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.75),
    color: colors.black,
  },
});
