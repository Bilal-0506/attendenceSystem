import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
  },
});
