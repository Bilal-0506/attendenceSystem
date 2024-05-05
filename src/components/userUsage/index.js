import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

import {appIcons, colors, fontFamily} from '../../services/utilities';
import {heightPixel, widthPixel} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default function UserUsage({onPress, flag, title, icon, selected}) {
  return (
    <Pressable onPress={onPress} style={[styles.container]}>
      <View style={styles.banner}>
        <Image style={styles.imageView} source={flag} />
        <Text style={[styles.texttwo]}>{title}</Text>
      </View>
      <View style={styles.iconView}>
        {icon == true &&
          (selected ? (
            <Image style={styles.imageFiller} source={appIcons.filledIcon} />
          ) : (
            <Image style={styles.imageFiller} source={appIcons.unfilledIcon} />
          ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: heightPixel(24),
    borderRadius: widthPixel(12),
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: colors?.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
  },
  banner: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    height: heightPixel(24),
    width: widthPixel(24),
    resizeMode: 'contain',
  },
  iconView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  texttwo: {
    fontSize: responsiveFontSize(2.0),
    color: colors.black,
    fontFamily: fontFamily.appTextMedium,
    marginLeft: widthPixel(12),
  },
  imageFiller: {
    height: heightPixel(20),
    width: widthPixel(20),
    resizeMode: 'contain',
  },
});
