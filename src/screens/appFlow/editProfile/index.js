import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useDispatch} from 'react-redux';

import {Global, MyInput} from '../../../components';
import {styles} from './styles';
import {GreenSnackbar, appIcons, heightPixel} from '../../../services';
import Button from '../../../components/button';
import {isEditValid} from '../../../services/validations';
import {imagePicker} from '../../../services/helpingMethods';

const EditProfile = ({navigation}) => {
  const statusBar = useRef(null);
  const [image, setImage] = useState(appIcons.carImage);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

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
      title={'My Profile'}
      navigation={navigation}
      appHeader={true}
      globalStyle={{
        justifyContent: 'space-between',
      }}
      ref={statusBar}>
      <View>
        <View style={styles.viewOne}>
          <Pressable onPress={() => changeImage()} style={styles.imageView}>
            <Image source={image} style={styles.imageView} borderRadius={100} />
            <View style={styles.innerImageView}>
              <View style={styles.cameraView}>
                <Image style={styles.cameraIcon} source={appIcons.cameraIcon} />
              </View>
            </View>
          </Pressable>
        </View>
        <View style={styles.viewTwo}>
          <Text style={styles.heading}>Name</Text>
          <MyInput
            marginTop={heightPixel(8)}
            value={name}
            placeHolder={'Name'}
            setValue={setName}
          />
        </View>
        <View style={styles.viewTwo}>
          <Text style={styles.heading}>Address</Text>
          <MyInput
            marginTop={heightPixel(8)}
            value={address}
            placeHolder={'Address'}
            setValue={setAddress}
          />
        </View>
      </View>
      <Button onPress={() => onPress()} children={'Save Changes'} />
    </Global>
  );
};

export default EditProfile;
