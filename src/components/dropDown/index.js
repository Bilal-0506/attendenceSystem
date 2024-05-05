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

export default function DropDown({
  list,
  val,
  setVal,
  visible,
  setVisible,
  title,
  placeholder,
}) {
  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      <Pressable
        onPress={() => setVisible(!visible)}
        style={[
          styles.drop,
          {
            marginTop: title ? heightPixel(8) : heightPixel(0),
            backgroundColor: title
              ? colors.inputColor
              : val == ''
              ? colors.inputColor
              : colors.theme,
          },
        ]}>
        <Text
          style={[
            styles.subTitle,
            {
              fontFamily: title
                ? fontFamily.appTextRegular
                : fontFamily.appTextSemiBold,
              color: title
                ? colors.placeHolderColor
                : val == ''
                ? colors.placeHolderColor
                : colors.white,
            },
          ]}>
          {val ? val : placeholder}
        </Text>
        <Image
          source={appIcons.chevronDownIcon}
          style={[
            styles.imageStyle,
            {
              tintColor: title
                ? colors.placeHolderColor
                : val == ''
                ? colors.placeHolderColor
                : colors.white,
            },
          ]}
        />
      </Pressable>
      {visible && (
        <View style={styles.option}>
          {list?.map((item, index) => (
            <Pressable
              key={index}
              style={{
                paddingBottom:
                  list?.length - 1 == index ? heightPixel(0) : heightPixel(8),
              }}
              onPress={() => [setVal(item), setVisible(!visible)]}>
              <Text
                style={[
                  styles.subTitle,
                  {
                    fontFamily: title
                      ? fontFamily.appTextRegular
                      : fontFamily.appTextSemiBold,
                  },
                ]}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.75),
    color: colors.black,
  },
  drop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
    borderRadius: widthPixel(12),
  },
  option: {
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
    backgroundColor: colors.inputColor,
    marginTop: heightPixel(8),
    borderRadius: widthPixel(12),
  },
  subTitle: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
    color: colors.placeHolderColor,
  },
  imageStyle: {
    height: heightPixel(24),
    width: widthPixel(24),
    resizeMode: 'contain',
  },
});
