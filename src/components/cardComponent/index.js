import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../services';

export default function CardComponent({
  title,
  subTitle,
  cal,
  meter,
  location,
  isDoc,
  menu,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={appIcons.carImageTwo} style={styles.imageStyle} />
      </View>
      <View style={styles.viewOne}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text
          numberOfLines={1}
          style={[
            styles.subTitle,
            {
              color:
                isDoc == undefined && subTitle == 'Completed'
                  ? colors.completedColor
                  : colors.theme,
            },
          ]}>
          {subTitle}
        </Text>
        <View
          style={[
            styles.viewOneInner,
            {marginBottom: cal && meter ? heightPixel(12) : heightPixel(2)},
          ]}>
          {cal && (
            <View style={styles.viewChildOne}>
              <Image source={appIcons.calendarIcon} style={styles.iconStyle} />
              <Text numberOfLines={1} style={styles.numText}>
                {cal}
              </Text>
            </View>
          )}
          {meter && (
            <View style={styles.childViewTwo}>
              <Image source={appIcons.speedIcon} style={styles.iconStyle} />
              <Text numberOfLines={1} style={styles.numText}>
                {meter}
              </Text>
            </View>
          )}
        </View>
        <Text style={styles.locationText}>{location}</Text>
        {isDoc && (
          <View
            style={[
              styles?.isDocView,
              {
                backgroundColor:
                  isDoc == 'Bill Uploaded' ? colors?.theme : colors?.white,
              },
            ]}>
            <Text
              style={[
                styles?.isDocTitle,
                {
                  color:
                    isDoc == 'Bill Uploaded' ? colors?.white : colors?.theme,
                },
              ]}>
              {isDoc}
            </Text>
          </View>
        )}
      </View>
      {menu && (
        <View style={styles.viewTwoInner}>
          <Pressable style={{height: heightPixel(80)}} onPress={() => {}}>
            <Image source={appIcons.menuIcon} style={styles.secondIconStyle} />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthPixel(11),
    paddingVertical: heightPixel(11),
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: heightPixel(16),
    elevation: 5,
    borderRadius: widthPixel(16),
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginBottom: heightPixel(10),
  },
  imageView: {
    height: heightPixel(80),
    width: widthPixel(105),
    borderRadius: widthPixel(12),
    marginRight: widthPixel(13),
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  viewOne: {
    width: '47%',
  },
  title: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.5),
    color: colors.darkgrey,
  },
  subTitle: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(1.75),
    color: colors.theme,
  },
  viewOneInner: {
    marginTop: heightPixel(6),
    marginBottom: heightPixel(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewChildOne: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
  },
  iconStyle: {
    height: heightPixel(14),
    width: widthPixel(14),
    resizeMode: 'contain',
    marginRight: widthPixel(5),
  },
  numText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.75),
    color: colors.darkgrey,
  },
  childViewTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '56%',
  },
  locationText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.0),
    color: colors.inActiveTab,
  },
  viewTwoInner: {
    width: '15%',
    alignItems: 'flex-end',
  },
  secondIconStyle: {
    height: heightPixel(14),
    width: widthPixel(14),
    resizeMode: 'contain',
  },
  isDocView: {
    paddingHorizontal: widthPixel(6),
    paddingVertical: heightPixel(3),
    borderRadius: 14,
    borderColor: colors?.theme,
    borderWidth: widthPixel(1),
    alignItems: 'center',
    marginTop: heightPixel(7),
  },
  isDocTitle: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.11),
  },
});
