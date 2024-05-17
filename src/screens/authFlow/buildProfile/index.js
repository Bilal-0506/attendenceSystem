import React, {useRef, useEffect, useState} from 'react';
import {View, ActivityIndicator, Pressable, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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
import {isEditValid} from '../../../services/validations';
import {api} from '../../../network/Environment';
import {Method, callApi} from '../../../network/NetworkManger';
import {
  accessToken,
  refreshToken,
  userDataSave,
} from '../../../redux/Slices/userDataSlice';
import {getDeviceId} from 'react-native-device-info';

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

  const user = useSelector(state => state.user);

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

  const onPressContinue = () => {
    if (isEditValid(image, firstName, lastName, phoneNumber, address)) {
      updateProfile();
    }
  };

  const updateProfile = async () => {
    setIsLoading(true);
    let body = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: address,
      profileCompleted: true,
      device: {id: getDeviceId(), deviceToken: 'web'},
    };
    try {
      const endPoint = api.updateProfile;
      await callApi(
        Method.PATCH,
        endPoint,
        body,
        res => {
          if (res?.status == 200 && res?.success) {
            dispatch(userDataSave(res?.data?.user));
            GreenSnackbar(res?.message);
            navigation.reset({index: 0, routes: [{name: routes.drawer}]});
            setIsLoading(false);
          }
        },
        err => {
          RedSnackbar(err.message);
          setIsLoading(false);
        },
      );
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
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
            <Pressable
              disabled={!isLoading}
              onPress={() => getImage()}
              style={styles.imageView}>
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
        <ActivityIndicator
          style={{marginBottom: heightPixel(20)}}
          color={colors.theme}
          size={'small'}
        />
      ) : (
        <Button
          onPress={() => {
            onPressContinue();
          }}
          children={'Update Profile'}
        />
      )}
    </Global>
  );
};

export default BuildProfileScreen;
