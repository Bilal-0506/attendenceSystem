import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, hp, wp} from '../../../services';
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
    fontSize: responsiveFontSize(2),
    textDecorationLine: 'underline',
    textDecorationColor: colors.theme,
  },
  attendenceContainer: {
    // flex: 1,
    height: hp(45),
    // backgroundColor: 'pink',
    marginBottom: hp(2),
  },
  attendenceHeadingText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
    marginBottom: 10,
  },
  item: {
    backgroundColor: colors.white,
    height: hp(17),
    justifyContent: 'center',
    width: hp(20),
    borderRadius: 20,
    marginLeft: hp(1),
    marginRight: hp(2),
    marginBottom: hp(3),
    padding: hp(2),
    // alignItems: 'center',
  },
  itemRequest: {
    backgroundColor: colors.white,
    marginTop: hp(1),
    height: hp(5),
    flexDirection: 'row',
    // justifyContent: 'center',
    // width: hp(20),
    // // borderRadius: 20,
    // marginLeft: hp(1),
    // marginRight: hp(2),
    // marginBottom: hp(3),
    // padding: hp(2),
    alignItems: 'center',
  },
  title: {
    marginLeft: hp(2),
    color: colors.black,
    fontSize: 14,
    fontWeight: '500',
  },
  time: {
    marginTop: hp(2),
    color: colors.black,
    fontSize: 17,
    fontWeight: '700',
  },
  status: {
    marginTop: hp(1),
    color: colors.black,
    fontSize: 14,
    fontWeight: '500',
  },
  status1: {
    // marginTop: hp(1),
    color: colors.black,
    fontSize: 14,
    fontWeight: '500',
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: hp(2),
  },
  requestHeading: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '600',
  },
  // viewButton
  // viewText
});
