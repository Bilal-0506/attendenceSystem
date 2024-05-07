import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Pressable,
  Text,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors, fontFamily, heightPixel, widthPixel} from '../../services';

export const MyInput = ({
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
  onPressRight,
  secure,
  marginTop,
  title,
}) => {
  return (
    <View
      style={[
        styles.container,
        {marginTop: marginTop ? marginTop : heightPixel(24)},
      ]}>
      <Text
        style={{
          fontFamily: fontFamily.appTextRegular,
          fontSize: responsiveFontSize(1.5),
          color: colors.theme,
        }}>
        {title}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
        <TextInput
          value={value}
          placeholder={placeHolder}
          onChangeText={setValue}
          style={{
            height: height ? height : heightPixel(35),
            width: rightIcon ? '92%' : '100%',
            textAlignVertical: textAlignVertical,
            fontFamily: font ? font : fontFamily.appTextRegular,
            color: textColor ? textColor : colors.black,
            fontSize: fontSize ? fontSize : responsiveFontSize(1.5),
            paddingHorizontal: 0,
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
    </View>
  );
};

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
  leftView: {
    height: heightPixel(30),
    justifyContent: 'center',
    width: '9%',
  },
  iconStyle: {
    height: heightPixel(24),
    width: widthPixel(24),
    resizeMode: 'contain',
  },
  rightView: {
    height: heightPixel(30),
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '9%',
  },
});
