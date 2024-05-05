import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  title: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.0),
    color: colors.placeHolderColor,
    lineHeight: heightPixel(24),
  },
  viewOne: {
    marginBottom: heightPixel(20),
    marginTop: heightPixel(50),
  },
  viewTwo: {
    marginBottom: heightPixel(20),
  },
  heading: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.75),
    color: colors.black,
  },
});
