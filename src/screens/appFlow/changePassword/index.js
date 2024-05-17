import React, {useRef, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {Global, MyInput} from '../../../components';
import {styles} from './styles';
import {
  GreenSnackbar,
  RedSnackbar,
  appIcons,
  colors,
  heightPixel,
} from '../../../services';
import {isPasswordValid} from '../../../services/validations';
import Button from '../../../components/button';
import {ScrollView} from 'react-native-gesture-handler';
import {getDeviceId} from 'react-native-device-info';
import {api} from '../../../network/Environment';
import {Method, callApi} from '../../../network/NetworkManger';
import {ActivityIndicator} from 'react-native-paper';
import {userDataSave} from '../../../redux/Slices/userDataSlice';

const ChangePassord = ({navigation}) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [newSecure, setNewSecure] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmSecure, setConfirmSecure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    statusBar.current?.darkContent();
    return () => {};
  }, []);

  const onPress = () => {
    if (isPasswordValid(password, newPassword, confirmPassword)) {
      ChangePassord();
    }
  };

  const ChangePassord = async () => {
    setIsLoading(true);
    let body = {
      currentPassword: password,
      password: newPassword,
      device: {id: getDeviceId(), deviceToken: 'web'},
    };
    try {
      const endPoint = api.userPasswordUpdate;
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
      headerTitle={'Change Password'}
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
          <Text style={styles.title}>
            To change your password please provide the fill the following
            details
          </Text>
          <MyInput
            value={password}
            placeHolder={'Enter your current password'}
            setValue={setPassword}
            secure={secure}
            onPressRight={() => setSecure(!secure)}
            rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
            title={'Current Password'}
            disable={!isLoading}
          />
          <MyInput
            value={newPassword}
            placeHolder={'Enter your new password'}
            setValue={setNewPassword}
            secure={newSecure}
            onPressRight={() => setNewSecure(!newSecure)}
            rightIcon={newSecure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
            title={'New Password'}
            disable={!isLoading}
          />
          <MyInput
            value={confirmPassword}
            placeHolder={'Re-enter your password'}
            setValue={setConfirmPassword}
            secure={confirmSecure}
            onPressRight={() => setConfirmSecure(!newSecure)}
            rightIcon={confirmSecure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
            title={'Confrim Password'}
            disable={!isLoading}
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
        <Button onPress={() => onPress()} children={'Save Changes'} />
      )}
    </Global>
  );
};

export default ChangePassord;
