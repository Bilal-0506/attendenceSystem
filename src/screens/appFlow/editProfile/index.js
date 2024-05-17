import React, {useRef, useState, useEffect} from 'react';
import {View, Pressable, Image, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {getDeviceId} from 'react-native-device-info';

import {Global, MyInput} from '../../../components';
import {styles} from './styles';
import {
  GreenSnackbar,
  RedSnackbar,
  appIcons,
  colors,
  heightPixel,
} from '../../../services';
import Button from '../../../components/button';
import {isEditValid} from '../../../services/validations';
import {imagePicker} from '../../../services/helpingMethods';
import {Method, callApi} from '../../../network/NetworkManger';
import {api} from '../../../network/Environment';
import {userDataSave} from '../../../redux/Slices/userDataSlice';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);
  const statusBar = useRef(null);
  const [image, setImage] = useState(user?.image);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [address, setAddress] = useState(user?.address);
  const [isLoading, setIsLoading] = useState(false);

  console.log(user);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const changeImage = async () => {
    const image = await imagePicker();
    if (image == 'E_PICKER_CANCELLED') {
      setImage(user?.image);
    } else {
      setImage(image.path);
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
            navigation.goBack();
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
      header={true}
      isBack={true}
      headerTitle={'My Profile'}
      navigation={navigation}
      appHeader={true}
      globalStyle={{
        justifyContent: 'space-between',
      }}
      ref={statusBar}>
      <View style={{flex: 1, marginBottom: heightPixel(20)}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.viewOne}>
            <Pressable
              disabled={isLoading}
              onPress={() => changeImage()}
              style={styles.imageView}>
              <Image
                source={{uri: image}}
                style={styles.imageView}
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
          <View style={styles.viewTwo}>
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
          </View>
        </ScrollView>
      </View>
      {isLoading ? (
        <ActivityIndicator
          style={{marginBottom: heightPixel(20)}}
          color={colors.theme}
          size={'small'}
        />
      ) : (
        <Button onPress={() => onPressContinue()} children={'Save Changes'} />
      )}
    </Global>
  );
};

export default EditProfile;
