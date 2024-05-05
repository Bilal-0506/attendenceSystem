import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {colors, fontFamily, heightPixel, widthPixel} from '../../services';

export default function YearSlider({val, setVal, title, list}) {
  const multiSliderAgeChange = values => {
    setVal(values);
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: heightPixel(19),
          justifyContent: 'space-between',
        }}>
        {list &&
          list?.map((item, index) => (
            <View key={index} style={[styles.markerContainer]}>
              <Text style={styles.tooltipText}>{item.val} Year</Text>
            </View>
          ))}
      </View>
      <View style={styles.sliderView}>
        <MultiSlider
          customMarker={data => (
            <View
              style={{
                height: data.pressed ? 16 : 14,
                width: data.pressed ? 16 : 14,
                borderRadius: 50,
                backgroundColor: colors.theme,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: data.pressed ? 12 : 8,
                  width: data.pressed ? 12 : 8,
                  borderWidth: widthPixel(1.5),
                  borderColor: colors.white,
                  borderRadius: 50,
                  backgroundColor: colors.theme,
                }}></View>
            </View>
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
          max={7}
          allowOverlap={false}
          minMarkerOverlapDistance={1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.75),
    color: colors.black,
  },
  sliderView: {
    alignItems: 'flex-start',
    marginTop: heightPixel(11),
    justifyContent: 'flex-end',
    marginHorizontal: widthPixel(6),
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
