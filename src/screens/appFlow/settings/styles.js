import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  drop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: widthPixel(12),
    backgroundColor: colors?.white,
    marginBottom: heightPixel(24),
  },
  title: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.placeHolderColor,
    fontSize: responsiveFontSize(2.0),
  },
  rightIcon: {
    height: heightPixel(12),
    width: widthPixel(12),
    resizeMode: 'contain',
  },
});
