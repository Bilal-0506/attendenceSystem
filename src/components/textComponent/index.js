import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors, fontFamily, heightPixel, widthPixel} from '../../services';

export const TextComponent = ({val}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{val}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: heightPixel(24),
    width: '100%',
    borderRadius: widthPixel(12),
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(16),
    paddingVertical: heightPixel(16),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: widthPixel(1),
    borderColor: colors.darkgrey,
  },
  title: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.75),
    color: colors.loanText,
  },
});
