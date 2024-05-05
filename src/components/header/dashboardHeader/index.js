import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';

import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  routes,
  widthPixel,
} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default function DashboardHeader({navigation, route}) {
  return (
    <View style={styles.main}>
      <View>
        <View style={styles.row}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Image style={styles.icon} source={appIcons.handIconOne} />
        </View>
        <Text style={styles.subTitle}>Ken Tung</Text>
      </View>
      <Pressable onPress={() => navigation.navigate(routes.notification)}>
        <Image source={appIcons.notificationIcon} style={styles.iconStyle} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPixel(16),
    paddingHorizontal: widthPixel(20),
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
    color: colors.placeHolderColor,
    marginRight: widthPixel(4),
    marginBottom: heightPixel(8),
  },
  icon: {
    height: heightPixel(16),
    width: widthPixel(16),
    resizeMode: 'contain',
    marginRight: widthPixel(4),
    marginBottom: heightPixel(8),
  },
  subTitle: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.0),
    color: colors.black,
  },
  iconStyle: {
    height: heightPixel(32),
    width: widthPixel(32),
    resizeMode: 'contain',
  },
});
