import React from 'react';
import {StyleSheet, TextInput, View, Image, Pressable} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors, fontFamily, heightPixel, widthPixel} from '../../services';

export const MyInput = ({
  leftIcon,
  value,
  setValue,
  placeHolder,
  disable,
  textColor,
  placeholderColor,
  font,
  keyboardType,
  multiline,
  fontSize,
  textAlignVertical,
  numberOfLines,
  maxLength,
  onSubmitEditing,
  rightIcon,
  height,
  onPressLeft,
  onPressRight,
  secure,
  marginTop,
}) => {
  return (
    <View
      style={[
        styles.container,
        {marginTop: marginTop ? marginTop : heightPixel(24)},
      ]}>
      {leftIcon && (
        <Pressable onPress={onPressLeft} style={styles.leftView}>
          <Image source={leftIcon} style={styles.iconStyle} />
        </Pressable>
      )}
      <TextInput
        value={value}
        placeholder={placeHolder}
        onChangeText={setValue}
        style={{
          height: height ? height : heightPixel(40),
          width:
            leftIcon && rightIcon
              ? '82%'
              : leftIcon || rightIcon
              ? '92%'
              : '100%',
          textAlignVertical: textAlignVertical,
          fontFamily: font ? font : fontFamily.appTextRegular,
          color: textColor ? textColor : colors.black,
          fontSize: fontSize ? fontSize : responsiveFontSize(1.75),
        }}
        placeholderTextColor={
          placeholderColor ? placeholderColor : colors.placeHolderColor
        }
        keyboardType={keyboardType ? keyboardType : 'default'}
        editable={disable}
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secure}
      />
      {rightIcon && (
        <Pressable onPress={onPressRight} style={styles.rightView}>
          <Image source={rightIcon} style={styles.iconStyle} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: heightPixel(24),
    width: '100%',
    borderRadius: widthPixel(10),
    backgroundColor: '#F0F2F3',
    paddingHorizontal: widthPixel(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftView: {
    height: heightPixel(40),
    justifyContent: 'center',
    width: '9%',
  },
  iconStyle: {
    height: heightPixel(24),
    width: widthPixel(24),
    resizeMode: 'contain',
  },
  rightView: {
    height: heightPixel(40),
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '9%',
  },
});
