import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {colors, fontFamily, heightPixel, widthPixel, wp} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Button = ({
  style,
  disable,
  containerStyle,
  onPress,
  themeColor,
  payoutButton,
  bidButton,
  shadow,
  children,
  marginBottom,
}) => {
  return (
    <View style={{marginBottom: marginBottom ? marginBottom : wp(5)}}>
      <TouchableOpacity
        disabled={disable}
        style={[
          shadow && styles.shadow,
          {
            ...styles.container,
            ...containerStyle,
            borderRadius: payoutButton
              ? widthPixel(12)
              : bidButton
              ? widthPixel(10)
              : widthPixel(10),
            backgroundColor: themeColor
              ? themeColor
              : disable
              ? colors?.placeHolderColor
              : colors.theme,
          },
        ]}
        onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...styles.label, ...style}}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: heightPixel(50),
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 4,
  },
  label: {
    color: colors.white,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
  },
});

export default Button;
