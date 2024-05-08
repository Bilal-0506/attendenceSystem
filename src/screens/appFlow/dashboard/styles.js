import {StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {
  colors,
  fontFamily,
  heightPixel,
  hp,
  widthPixel,
  wp,
} from '../../../services';

export const styles = StyleSheet.create({
  paddingTop: {
    paddingTop: heightPixel(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    height: heightPixel(48),
    width: widthPixel(48),
    resizeMode: 'cover',
    borderRadius: widthPixel(48),
    marginRight: widthPixel(15),
  },
  mb5: {marginBottom: heightPixel(5)},
  subTitle: {
    fontFamily: fontFamily.appTextLight,
    fontSize: responsiveFontSize(1.75),
    color: colors.lightText,
  },
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
    color: colors.black,
    textTransform: 'capitalize',
  },
  handIcon: {
    height: heightPixel(16),
    width: widthPixel(16),
    resizeMode: 'contain',
    marginLeft: widthPixel(5),
  },
  icon: {
    height: heightPixel(32),
    width: widthPixel(32),
    resizeMode: 'contain',
  },
  heading: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.25),
    color: colors.black,
  },
  subHeading: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
  },
  subTitleOne: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
    color: colors.lightText,
  },
  boxConatiner: {
    width: '48%',
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(16),
    paddingVertical: heightPixel(16),
    marginBottom: heightPixel(12),
    borderRadius: widthPixel(12),
    shadowColor: 'rgba(242, 246, 252, 0.6)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leaveView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(12),
    paddingVertical: heightPixel(14),
    marginBottom: heightPixel(8),
    borderRadius: widthPixel(4),
    shadowColor: 'rgba(242, 246, 252, 0.6)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
