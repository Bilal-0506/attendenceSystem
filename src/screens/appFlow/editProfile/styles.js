import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  viewOne: {
    alignItems: 'center',
    marginBottom: heightPixel(32),
  },
  viewTwo: {
    marginBottom: heightPixel(20),
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
  heading: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.75),
    color: colors.black,
  },
});
