import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {colors, fontFamily, heightPixel, widthPixel} from '../../services';

export default function CustomSilder({val, setVal, title}) {
  const multiSliderAgeChange = values => {
    setVal(values);
  };

  return (
    <View style={{marginBottom: heightPixel(6)}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.titleOne}>{val}%</Text>
      </View>
      <View style={styles.sliderView}>
        <MultiSlider
          customMarker={data => (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 50,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: widthPixel(1),
                borderColor: colors.theme,
              }}></View>
          )}
          unselectedStyle={styles.unSelectedSilde}
          selectedStyle={styles.selectedSilde}
          trackStyle={{
            marginTop: heightPixel(-2),
          }}
          touchDimensions={{
            height: 40,
            width: 40,
            borderRadius: 20,
            slipDisplacement: 40,
          }}
          sliderLength={Dimensions.get('screen').width - widthPixel(55)}
          values={[val?.[0]]}
          onValuesChange={multiSliderAgeChange}
          min={1}
          max={100}
          allowOverlap={false}
          minMarkerOverlapDistance={1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
    color: colors.placeHolderColor,
  },
  titleOne: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.75),
    color: colors.placeHolderColor,
  },
  sliderView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: heightPixel(40),
  },
  unSelectedSilde: {
    backgroundColor: '#E6E6E6',
    height: heightPixel(5),
    borderRadius: widthPixel(10),
  },
  selectedSilde: {
    backgroundColor: colors.theme,
    height: heightPixel(5),
    borderRadius: widthPixel(10),
  },
  tooltipText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
    color: colors.placeHolderColor,
  },
});
