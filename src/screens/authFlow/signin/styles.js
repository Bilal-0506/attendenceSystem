import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  heading: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.5),
    color: colors.black,
    marginBottom: heightPixel(20),
  },
  rowSpace: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgot: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.5),
    color: colors.theme,
    marginVertical: heightPixel(12),
  },
});
