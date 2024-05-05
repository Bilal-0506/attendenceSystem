import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
  },
  viewOne: {
    alignItems: 'center',
    marginTop: heightPixel(50),
    marginBottom: heightPixel(32),
  },
  heading: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.5),
    color: colors.black,
  },
  title: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
    color: colors.placeHolderColor,
    marginBottom: heightPixel(20),
  },
  imageView: {
    alignItems: 'center',
    height: heightPixel(100),
    width: widthPixel(100),
    backgroundColor: colors.inActiveSlide,
    borderRadius: widthPixel(100) / 2,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  innerImageView: {
    position: 'absolute',
    bottom: 0,
    right: 4,
  },
  cameraView: {
    height: heightPixel(26),
    width: widthPixel(26),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.theme,
    borderColor: colors.white,
    borderWidth: widthPixel(1),
  },
  cameraIcon: {
    height: heightPixel(13),
    width: widthPixel(13),
    resizeMode: 'contain',
  },
});
