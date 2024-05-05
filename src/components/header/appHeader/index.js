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

export default function AppHeader({
  navigation,
  route,
  title,
  notification,
  isBack,
}) {
  return (
    <View style={styles.main}>
      {isBack && (
        <Pressable
          onPress={route ? route : () => navigation.goBack()}
          style={{width: '8%'}}>
          <Image source={appIcons.chevronLeftIcon} style={styles.iconStyle} />
        </Pressable>
      )}
      <View
        style={{
          width: isBack && notification ? '84%' : '92%',
          alignItems:
            isBack && notification
              ? 'center'
              : !isBack
              ? 'flex-start'
              : 'center',
        }}>
        <Text
          style={[
            styles.title,
            {
              textAlign:
                isBack && notification ? 'center' : !isBack ? 'left' : 'center',
            },
          ]}>
          {title}
        </Text>
      </View>
      {notification && (
        <Pressable
          onPress={() => {
            navigation.navigate(routes.notification);
          }}
          style={{width: '8%'}}>
          <Image source={appIcons.notificationIcon} style={styles.notifIcon} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPixel(24),
    paddingHorizontal: widthPixel(20),
  },
  title: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.25),
    color: colors.black,
    marginRight: widthPixel(4),
    marginBottom: heightPixel(8),
    textAlign: 'center',
  },
  iconStyle: {
    height: heightPixel(24),
    width: widthPixel(24),
    resizeMode: 'contain',
  },
  notifIcon: {
    height: heightPixel(32),
    width: widthPixel(32),
    resizeMode: 'contain',
  },
});
