import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {
  appIcons,
  colors,
  fontFamily,
  fontPixel,
  heightPixel,
  widthPixel,
} from '../../services';

const sliderRadius = widthPixel(3);
const width = widthPixel(37);

export default function SliderComponent({val, setVal, title, type, range}) {
  const [rmValue, setRMValue] = useState([1000, 30880]);

  const multiSliderAgeChange = values => {
    setVal(values);
  };

  const CustomLabel = item => {
    return (
      <View
        style={{
          position: 'relative',
        }}>
        {Number.isFinite(item.twoMarkerLeftPosition) &&
          Number.isFinite(item.twoMarkerValue) && (
            <View
              style={[
                styles.sliderLabel,
                {
                  left:
                    item.twoMarkerLeftPosition <= 300
                      ? item.twoMarkerLeftPosition -
                        width / widthPixel(1) +
                        sliderRadius
                      : item.twoMarkerLeftPosition - width - 28,
                },
              ]}>
              <View style={styles.triangle} />
              <Text style={styles.sliderLabelText}>
                {item.twoMarkerValue} {type}
              </Text>
            </View>
          )}
      </View>
    );
  };

  return (
    <View style={{marginBottom: heightPixel(12)}}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.sliderView}>
        <MultiSlider
          markerStyle={styles.markerView}
          pressedMarkerStyle={styles.pressMarkerView}
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
          values={[val?.[0], val?.[1]]}
          onValuesChange={multiSliderAgeChange}
          min={1000}
          max={200000}
          allowOverlap={false}
          minMarkerOverlapDistance={50}
          enableLabel={true}
          customLabel={CustomLabel}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{width: '50%', alignItems: 'flex-start'}}>
          <View style={[styles.markerContainer]}>
            <Text style={styles.tooltipText}>{val?.[0]} RM</Text>
          </View>
        </View>
        <View
          style={{
            width: '50%',
            alignItems: 'flex-end',
          }}>
          <View style={[styles.markerContainer]}>
            <Text style={styles.tooltipText}>{range} RM</Text>
          </View>
        </View>
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
    paddingTop: heightPixel(20),
    justifyContent: 'flex-end',
    marginTop: heightPixel(20),
    marginHorizontal: widthPixel(6),
  },
  markerView: {
    backgroundColor: colors.theme,
    height: heightPixel(14),
    width: widthPixel(14),
    borderRadius: widthPixel(14),
  },
  pressMarkerView: {
    backgroundColor: colors.theme,
    height: heightPixel(16),
    width: widthPixel(16),
    borderRadius: widthPixel(16),
  },
  unSelectedSilde: {
    backgroundColor: colors.placeHolderColor,
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
    fontSize: responsiveFontSize(1.75),
    color: colors.placeHolderColor,
  },
  sliderLabel: {
    position: 'absolute',
    bottom: 0,
    minWidth: width,
    padding: 10,
    backgroundColor: 'rgba(250, 55, 11, 0.80)',
    borderRadius: 16,
  },
  sliderLabelText: {
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: responsiveFontSize(1.25),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.white,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 8,
    borderBottomWidth: 12,
    borderLeftWidth: 8,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(250, 55, 11, 0.80)',
    borderLeftColor: 'transparent',
    transform: [{rotate: '180deg'}],
    alignSelf: 'center',
    position: 'absolute',
    bottom: -11.5,
  },
});
