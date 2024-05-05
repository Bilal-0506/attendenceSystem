import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

import {appIcons, colors, fontFamily} from '../../services/utilities';
import {heightPixel, widthPixel} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default function RepairCheck({
  onPress,
  title,
  icon,
  selected,
  border,
  onLongPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={[
        styles.container,
        {
          backgroundColor: selected ? colors?.theme : colors?.white,
          borderWidth: border && widthPixel(1),
          borderColor: border && colors.inActiveTab,
        },
      ]}>
      <View style={styles.banner}>
        <Text
          style={[
            styles.texttwo,
            {color: selected ? colors?.white : colors.placeHolderColor},
          ]}>
          {title}
        </Text>
      </View>
      <View style={styles.iconView}>
        {icon == true &&
          (selected ? (
            <Image
              style={styles.imageFiller}
              source={appIcons.iconFilledColor}
            />
          ) : (
            <Image
              style={[
                styles.imageFiller,
                {tintColor: colors?.placeHolderColor},
              ]}
              source={appIcons.unfilledIcon}
            />
          ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // marginBottom: heightPixel(24),
    borderRadius: widthPixel(12),
    backgroundColor: colors?.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(10),
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  banner: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    height: heightPixel(24),
    width: widthPixel(24),
    resizeMode: 'contain',
  },
  iconView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  texttwo: {
    fontSize: responsiveFontSize(2.0),
    color: colors.black,
    fontFamily: fontFamily.appTextMedium,
  },
  imageFiller: {
    height: heightPixel(18),
    width: widthPixel(18),
    resizeMode: 'contain',
  },
});
