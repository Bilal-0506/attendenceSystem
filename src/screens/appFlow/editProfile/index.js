import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useDispatch} from 'react-redux';

import {Global, MyInput} from '../../../components';
import {styles} from './styles';
import {GreenSnackbar, appIcons, heightPixel} from '../../../services';
import Button from '../../../components/button';
import {isEditValid} from '../../../services/validations';
import {imagePicker} from '../../../services/helpingMethods';
import {ScrollView} from 'react-native-gesture-handler';

const EditProfile = ({navigation}) => {
  const statusBar = useRef(null);
  const [image, setImage] = useState(appIcons.carImage);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const changeImage = async () => {
    const image = await imagePicker();
    if (image == 'E_PICKER_CANCELLED') {
      setImage(appIcons.carImage);
    } else {
      setImage(image.path);
    }
  };

  const onPress = () => {
    if (isEditValid(image, name, address)) {
      navigation.goBack();
      GreenSnackbar('Sucessfully updated');
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
            <Pressable onPress={() => changeImage()} style={styles.imageView}>
              <Image
                source={image}
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
      <Button onPress={() => onPress()} children={'Save Changes'} />
    </Global>
  );
};

export default EditProfile;
