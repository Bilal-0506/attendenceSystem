import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.5),
    color: colors.black,
    marginBottom: heightPixel(16),
  },
  title: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.0),
    color: colors.placeHolderColor,
    marginBottom: heightPixel(20),
  },
  imageStyle: {
    height: heightPixel(103),
    width: widthPixel(160),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  otpView: {
    width: '100%',
    height: heightPixel(48),
    marginBottom: heightPixel(48),
  },
  underlineStyleBase: {
    width: widthPixel(60),
    height: heightPixel(60),
    borderColor: colors.theme,
    borderWidth: widthPixel(1),
    borderRadius: widthPixel(8),
    color: colors.black,
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.0),
  },
  timerStyle: {
    paddingVertical: heightPixel(10),
    width: widthPixel(120),
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: responsiveFontSize(2.0),
    color: colors.black,
    letterSpacing: 0.25,
    fontFamily: fontFamily.appTextRegular,
  },
  resend: {
    fontSize: responsiveFontSize(2.0),
    fontFamily: fontFamily.appTextRegular,
    color: colors.placeHolderColor,
    textAlign: 'center',
  },
});
