import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  viewOne: {
    alignItems: 'center',
    marginBottom: heightPixel(32),
  },
  imageView: {
    alignItems: 'center',
    height: heightPixel(100),
    width: widthPixel(100),
    backgroundColor: colors.inActiveSlide,
    borderRadius: 50,
  },
  imageStyle: {
    height: heightPixel(100),
    width: widthPixel(100),
  },
  dropView: {
    paddingVertical: heightPixel(10),
    borderRadius: widthPixel(12),
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    paddingHorizontal: widthPixel(15),
    borderRadius: widthPixel(12),
    backgroundColor: colors.white,
    marginBottom: heightPixel(24),
  },
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
    color: colors.secBlack,
    marginBottom: heightPixel(12),
  },
  rowSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: heightPixel(10),
    borderBottomWidth: widthPixel(1),
    borderBottomColor: colors.inActiveSlide,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    height: heightPixel(24),
    width: widthPixel(24),
    resizeMode: 'contain',
    marginRight: widthPixel(8),
  },
  subTitle: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.75),
    color: colors.placeHolderColor,
  },
  rightIcon: {
    height: heightPixel(12),
    width: widthPixel(12),
    resizeMode: 'contain',
  },
  langText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
    marginRight: widthPixel(12),
    color: colors.placeHolderColor,
  },
});
