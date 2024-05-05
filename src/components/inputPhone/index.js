import { View, StyleSheet, Text } from 'react-native';
import React, { forwardRef } from 'react';
import PhoneInput from 'react-native-phone-number-input';

import {
  colors,
  fontFamily,
  fontPixel,
  heightPixel,
  widthPixel,
} from '../../services';

const PhoneInputWithCountryCode = forwardRef(
  ({ title, value, countryCode, setValue, setValueTwo }, ref) => {
    return (
      <View style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        <PhoneInput
          containerStyle={styles.inputContainer}
          textContainerStyle={styles.inputTextContainer}
          codeTextStyle={styles.codeTextStyle}
          countryPickerButtonStyle={styles.countryButtonStyle}
          textInputStyle={styles.textInputStyle}
          disableArrowIcon
          placeholder={'Enter mobile number'}
          ref={ref}
          defaultValue={value ? value : ''}
          defaultCode={countryCode ? countryCode : 'CA'}
          layout="first"
          onChangeText={text => {
            setValue(text);
          }}
          onChangeCountry={text => {
            console.log(text)
            setValueTwo(text);
            setValueTwo(ref.current?.getCountryCode() || 'CA');
          }}
          autoFocus={false}
          textInputProps={{
            placeholderTextColor: colors.inputColor,
          }}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginBottom: heightPixel(20),
  },
  title: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: fontPixel(16),
    color: colors.white,
    marginBottom: heightPixel(9),
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: widthPixel(20),
  },
  inputTextContainer: {
    height: heightPixel(48),
    backgroundColor: colors.black,
    alignItems: 'center',
    borderWidth: widthPixel(1),
    borderColor: colors.inputColor,
    borderRadius: widthPixel(20),
  },
  codeTextStyle: {
    marginTop: -2,
    fontSize: fontPixel(14),
    fontFamily: fontFamily.appTextRegular,
    color: colors.inputColor,
  },
  countryButtonStyle: {
    borderWidth: widthPixel(1),
    borderColor: colors.inputColor,
    borderRadius: widthPixel(20),
    marginRight: widthPixel(10),
    color: colors.inputColor,
  },
  textInputStyle: {
    height: heightPixel(48),
    alignItems: 'center',
    color: colors.inputColor,
    fontFamily: fontFamily.appTextRegular,
    fontSize: fontPixel(14),
  },
});

export default PhoneInputWithCountryCode;
