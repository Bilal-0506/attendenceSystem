import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  itemCenter: {
    width: '100%',
  },
  flatListStyle: {
    height: '60%',
  },
  onBoardingView: {
    width: width,
    height: '100%',
  },
  textView: {
    flex: 0.4,
    justifyContent: 'flex-end',
  },
  heading: {
    textAlign: 'center',
    color: colors.black,
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(3.4),
    lineHeight: heightPixel(30),
    marginBottom: heightPixel(20),
  },
  des: {
    textAlign: 'center',
    color: colors.placeHolderColor,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
  },
  secContainer: {
    position: 'absolute',
    bottom: 0,
    height: '40.3%',
    backgroundColor: colors.white,
    left: 0,
    right: 0,
    borderTopLeftRadius: widthPixel(26),
    borderTopRightRadius: heightPixel(26),
    overflow: 'hidden',
  },
  innerContainer: {
    paddingHorizontal: widthPixel(20),
    paddingVertical: heightPixel(30),
    flex: 1,
    justifyContent: 'space-between',
  },
  dotView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: heightPixel(30),
  },
  dot: {
    height: heightPixel(8),
    borderRadius: widthPixel(10),
  },
});
