import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, wp} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightPixel(20),
  },
  heading: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
    fontSize: responsiveFontSize(2.0),
  },
  viewText: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.theme,
    fontSize: responsiveFontSize(1.5),
    textDecorationLine: 'underline',
    textDecorationColor: colors.theme,
  },
});
