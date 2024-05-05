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

export default function ProfileHeader({
  navigation,
  route,
  title,
  notification,
}) {
  return (
    <View style={styles.main}>
      <View style={{width: '8%'}}></View>
      <View style={{width: notification ? '84%' : '92%', alignItems: 'center'}}>
        <View
          style={{
            height: heightPixel(100),
            width: widthPixel(100),
            borderRadius: widthPixel(100),
            overflow: 'hidden',
            marginBottom: heightPixel(12),
          }}>
          <Image
            source={appIcons.carImage}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <Text style={styles.title}>Goher Ayub</Text>
        <Text style={styles.subTitle}>goher87hl@gmail.com</Text>
      </View>
      {notification && (
        <Pressable
          onPress={() => {
            navigation.navigate(routes.notification);
          }}
          style={{width: '8%'}}>
          <Image source={appIcons.notificationIcon} style={styles.iconStyle} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    // alignItems: 'center',
    paddingVertical: heightPixel(24),
    paddingHorizontal: widthPixel(20),
  },
  title: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.0),
    color: colors.black,
    marginBottom: heightPixel(4),
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.75),
    color: colors.placeHolderColor,
    marginBottom: heightPixel(4),
    textAlign: 'center',
  },
  iconStyle: {
    height: heightPixel(32),
    width: widthPixel(32),
    resizeMode: 'contain',
  },
});
