import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';

import {appIcons, heightPixel, widthPixel} from '../../../services';

export default function LoginHeader({navigation, route, isBack}) {
  return (
    <View style={styles.main}>
      {isBack && (
        <Pressable
          onPress={() => (route ? route : navigation.goBack())}
          style={styles.leftView}>
          <Image source={appIcons.chevronLeftIcon} style={styles.iconStyle} />
        </Pressable>
      )}
      <View style={[styles.rightView, {width: isBack ? '94%' : '100%'}]}>
        <Image source={appIcons.appSecLogo} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPixel(45),
    paddingHorizontal: widthPixel(20),
  },
  leftView: {
    width: '6%',
  },
  rightView: {
    width: '94%',
    alignItems: 'center',
  },
  logo: {
    height: heightPixel(50.5),
    width: widthPixel(91),
    resizeMode: 'contain',
  },
  iconStyle: {
    height: heightPixel(24),
    width: widthPixel(24),
    resizeMode: 'contain',
  },
});
