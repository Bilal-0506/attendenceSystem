import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default function UploadImageGallery({setGallery, gallery, marginTop}) {
  const openGallary = () => {
    ImagePicker.openPicker({
      multiple: false,
      cropping: false,
      mediaType: 'photo',
    }).then(async image => {
      const images = [...gallery, image];
      setGallery(images);
    });
  };

  const deleteGallery = idx => {
    const index = idx;
    const arr = [...gallery];
    if (index > -1) {
      arr.splice(index, 1); // 2nd parameter means remove one item only
      setGallery(arr);
    }
  };

  return (
    <View>
      {gallery?.length != 0 && (
        <View
          style={[
            styles.container,
            {
              marginTop: marginTop ? marginTop : heightPixel(24),
            },
          ]}>
          {gallery?.map((item, index) => {
            return (
              <View style={styles.flatView}>
                <Image
                  key={index}
                  borderRadius={20}
                  source={{uri: item.path}}
                  style={[styles.flatImage]}
                />
                <View style={styles.crossPosition}>
                  <TouchableOpacity
                    style={styles.crossIconView}
                    onPress={() => deleteGallery(index)}>
                    <Image
                      style={styles.crossIcon}
                      source={appIcons.crossIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      )}
      <TouchableOpacity
        style={[
          styles.button,
          {marginTop: marginTop ? marginTop : heightPixel(24)},
        ]}
        onPress={() => openGallary()}>
        <Image source={appIcons.cameraIconOne} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Choose Images</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
    borderRadius: widthPixel(10),
    borderColor: colors?.theme,
    borderWidth: widthPixel(1),
  },
  buttonIcon: {
    height: heightPixel(18),
    width: widthPixel(18),
    resizeMode: 'contain',
    marginRight: widthPixel(10),
  },
  buttonText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.0),
    color: colors?.theme,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: heightPixel(13),
  },
  flatView: {
    marginBottom: heightPixel(10),
    marginRight: widthPixel(12),
  },
  flatImage: {
    height: heightPixel(100),
    width: widthPixel(100),
    borderWidth: widthPixel(2),
    borderColor: colors?.theme,
  },
  crossPosition: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  crossIconView: {
    width: widthPixel(17),
    height: heightPixel(17),
    borderRadius: widthPixel(17),
    borderColor: colors?.theme,
    borderWidth: widthPixel(1),
  },
  crossIcon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
