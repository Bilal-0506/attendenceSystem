import React, {useRef, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Pressable, Image} from 'react-native';
import {useDispatch} from 'react-redux';

import {
  GreenSnackbar,
  RedSnackbar,
  appIcons,
  colors,
  heightPixel,
  routes,
} from '../../../services';
import {Global, MyInput} from '../../../components';
import {styles} from './styles';
import Button from '../../../components/button';
import {imagePicker} from '../../../services/helpingMethods';
import {ScrollView} from 'react-native-gesture-handler';

const BuildProfileScreen = ({navigation, route}) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(
    'https://reactnative.dev/img/tiny_logo.png',
  );

  useEffect(() => {
    statusBar.current?.darkContent();
    return () => {};
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
      paddingHorizontal={true}
      navigation={navigation}
      header={true}
      title={'Build Profile'}
      description={'Hello there, enter your information'}
      ref={statusBar}
      globalStyle={styles.wrapper}>
      <View style={{flex: 1, marginBottom: heightPixel(20)}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.viewOne}>
            <Pressable onPress={() => getImage()} style={styles.imageView}>
              <Image
                source={{uri: image}}
                style={styles.imageStyle}
                borderRadius={100}
              />
              <View style={styles.innerImageView}>
                <View style={styles.cameraView}>
                  <Image
                    style={styles.cameraIcon}
                    source={appIcons.cameraIcon}
                  />
                </View>
              </View>
            </Pressable>
          </View>
          <MyInput
            value={firstName}
            placeHolder={'Enter your first name'}
            setValue={setFirstName}
            keyboardType={'email-address'}
            disable={!isLoading}
            title={'First Name'}
            marginTop={heightPixel(6)}
          />
          <MyInput
            value={lastName}
            placeHolder={'Enter your last name'}
            setValue={setLastName}
            keyboardType={'email-address'}
            disable={!isLoading}
            title={'Last Name'}
          />
          <MyInput
            value={phoneNumber}
            placeHolder={'Enter your phone number'}
            setValue={setPhoneNumber}
            keyboardType={'phone-pad'}
            disable={!isLoading}
            title={'Phone Number'}
          />
          <MyInput
            value={address}
            placeHolder={'Enter your address'}
            setValue={setAddress}
            disable={!isLoading}
            title={'Address'}
          />
        </ScrollView>
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.theme} size={'small'} />
      ) : (
        <Button
          onPress={() => {
            navigation.navigate(routes.drawer);
          }}
          children={'Update Profile'}
        />
      )}
    </Global>
  );
};

export default BuildProfileScreen;
