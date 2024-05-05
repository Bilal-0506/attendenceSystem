import React from 'react';
import {StyleSheet, Image, Pressable, Text} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import DatePicker from 'react-native-date-picker';

import {colors, fontFamily, heightPixel, widthPixel} from '../../services';

export const DateInput = ({
  leftIcon,
  value,
  setValue,
  placeHolder,
  disable,
  textColor,
  fontSize,
  rightIcon,
  height,
  font,
  onPressLeft,
  onPressRight,
  marginTop,
  open,
  setOpen,
  date,
  mode,
}) => {
  return (
    <Pressable
      disabled={disable}
      onPress={() => setOpen(true)}
      style={[
        styles.container,
        {marginTop: marginTop ? marginTop : heightPixel(24)},
      ]}>
      {leftIcon && (
        <Pressable onPress={onPressLeft} style={styles.leftView}>
          <Image source={leftIcon} style={styles.iconStyle} />
        </Pressable>
      )}
      <Text
        style={{
          height: height ? height : heightPixel(40),
          width:
            leftIcon && rightIcon
              ? '82%'
              : leftIcon || rightIcon
              ? '92%'
              : '100%',
          fontFamily: font ? font : fontFamily.appTextRegular,
          color: textColor
            ? textColor
            : value
            ? colors?.black
            : colors.placeHolderColor,
          fontSize: fontSize ? fontSize : responsiveFontSize(1.75),
          verticalAlign: 'middle',
        }}>
        {value == ''
          ? placeHolder
          : mode == 'time'
          ? new Date(value).toLocaleTimeString('en-US', {
              second: '2-digit',
              hour: '2-digit',
              hour12: true,
              minute: '2-digit',
            })
          : new Date(value)
              .toLocaleDateString('en-US', {
                day: 'numeric',
                month: '2-digit',
                year: 'numeric',
              })
              .replace(/\//g, '-')}
      </Text>
      {rightIcon && (
        <Pressable onPress={onPressRight} style={styles.rightView}>
          <Image source={rightIcon} style={styles.iconStyle} />
        </Pressable>
      )}
      <DatePicker
        modal
        open={open}
        date={date}
        mode={mode ? mode : 'date'}
        minimumDate={date}
        onConfirm={date => {
          setOpen(false);
          setValue(date);
        }}
        onCancel={() => {
          setOpen(false);
          setValue('');
        }}
      />
    </Pressable>
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
    marginRight: widthPixel(4),
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
