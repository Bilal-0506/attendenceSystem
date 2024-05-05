import React, { useRef, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Pressable, Image } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  GreenSnackbar,
  RedSnackbar,
  appIcons,
  colors,
  heightPixel,
  routes,
} from '../../../services';
import { Global, MyInput } from '../../../components';
import { styles } from './styles';
import Button from '../../../components/button';
import { imagePicker } from '../../../services/helpingMethods';

const BuildProfileScreen = ({ navigation, route }) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState(
    'https://reactnative.dev/img/tiny_logo.png',
  );

  useEffect(() => {
    statusBar.current?.darkContent();
    return () => { };
  }, []);

  const getImage = async () => {
    var image = await imagePicker();
    if (image == 'E_PICKER_CANCELLED') {
      setImage('https://reactnative.dev/img/tiny_logo.png');
    } else {
      setImage(image);
    }
  };

  return (
    <Global
      isBack={true}
      navigation={navigation}
      loginHeader={true}
      globalStyle={styles.wrapper}
      ref={statusBar}>
      <View style={{ marginBottom: heightPixel(100) }}>
        <Text style={styles.heading}>Create Account</Text>
        <View style={styles.viewOne}>
          <Pressable onPress={() => getImage()} style={styles.imageView}>
            <Image
              source={{ uri: image }}
              style={styles.imageStyle}
              borderRadius={100}
            />
            <View style={styles.innerImageView}>
              <View style={styles.cameraView}>
                <Image style={styles.cameraIcon} source={appIcons.cameraIcon} />
              </View>
            </View>
          </Pressable>
        </View>
        <MyInput
          leftIcon={appIcons.mailIcon}
          value={name}
          placeHolder={'Enter your name'}
          setValue={setName}
          keyboardType={'email-address'}
          disable={!isLoading}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.theme} size={'small'} />
      ) : (
        <Button onPress={() => { }} children={'Update Profile'} />
      )}
    </Global>
  );
};

export default BuildProfileScreen;
