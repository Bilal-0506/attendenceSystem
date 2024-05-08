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
      <View style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        <Pressable
          onPress={() => setVisible(!visible)}
          style={[
            styles.drop,
            {
              marginTop: title ? heightPixel(8) : heightPixel(0),
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
                  ? colors.black
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
      </View>
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
  container: {
    marginTop: heightPixel(24),
    width: '100%',
    borderRadius: widthPixel(10),
    paddingHorizontal: widthPixel(12),
    borderWidth: widthPixel(1),
    borderColor: colors.theme,
    paddingTop: heightPixel(12),
    paddingBottom: heightPixel(4),
  },
  title: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
    color: colors.theme,
  },
  drop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: heightPixel(35),
  },
  option: {
    marginTop: heightPixel(8),
    backgroundColor: colors.lightBackground,
    paddingHorizontal: widthPixel(12),
    paddingVertical: heightPixel(12),
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
