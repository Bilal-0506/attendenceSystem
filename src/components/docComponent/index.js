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

export default function DocComponent({title, subTitle, menu, without}) {
  return (
    <View
      style={[
        styles.container,
        {borderRadius: without ? widthPixel(6) : widthPixel(16)},
      ]}>
      <View style={styles.imageView}>
        <Image
          source={appIcons.noImageIcon}
          borderRadius={6}
          style={styles.imageStyle}
        />
      </View>
      <View
        style={[
          styles.viewOne,
          {
            justifyContent: without ? 'center' : 'flex-start',
            width: without ? '80%' : '65%',
          },
        ]}>
        <Text
          numberOfLines={1}
          style={[
            styles.title,
            {marginBottom: without ? heightPixel(4) : heightPixel(8)},
          ]}>
          {title}
        </Text>
        <Text numberOfLines={1} style={[styles.subTitle]}>
          {subTitle}
        </Text>
      </View>
      {!without && (
        <View style={styles.viewTwoInner}>
          {!menu ? (
            <Pressable onPress={() => {}}>
              <Image
                source={appIcons.lockIconOne}
                style={[styles.secondIconStyle]}
              />
            </Pressable>
          ) : (
            <Pressable onPress={() => {}}>
              <Image
                source={appIcons.menuIcon}
                style={[styles.thirdIconStyle, {tintColor: colors?.black}]}
              />
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthPixel(16),
    paddingVertical: heightPixel(10),
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: heightPixel(16),
    elevation: 5,
    backgroundColor: colors?.white,
    flexDirection: 'row',
    marginBottom: heightPixel(10),
    overflow: 'hidden',
  },
  imageView: {
    height: heightPixel(52),
    width: widthPixel(52),
    borderRadius: widthPixel(6),
    marginRight: widthPixel(10),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  viewOne: {
    width: '65%',
  },
  title: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.5),
    color: colors.black,
    marginBottom: heightPixel(8),
  },
  subTitle: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.5),
    color: colors.placeHolderColor,
  },
  iconStyle: {
    height: heightPixel(14),
    width: widthPixel(14),
    resizeMode: 'contain',
    marginRight: widthPixel(5),
  },
  viewTwoInner: {
    width: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  secondIconStyle: {
    height: heightPixel(24),
    width: widthPixel(24),
    resizeMode: 'contain',
  },
  thirdIconStyle: {
    height: heightPixel(18),
    width: widthPixel(18),
    resizeMode: 'contain',
  },
});
