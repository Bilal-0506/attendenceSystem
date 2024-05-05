import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.5),
    color: colors.black,
    marginBottom: heightPixel(20),
  },
  title: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.0),
    color: colors.placeHolderColor,
    marginBottom: heightPixel(20),
  },
});
