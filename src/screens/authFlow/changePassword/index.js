import React, { useRef, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { GreenSnackbar, RedSnackbar, appIcons, heightPixel, routes } from '../../../services';
import { Global, ModalComponent, MyInput } from '../../../components';
import { styles } from './styles';
import Button from '../../../components/button';
import { isChangePasswordValid, isForgotValid } from '../../../services/validations';
import { getDeviceId } from 'react-native-device-info';
import { api } from '../../../network/Environment';
import { Method, callApi } from '../../../network/NetworkManger';

const ChangePasswordScreen = ({ navigation }) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [newSecure, setNewSecure] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    statusBar.current?.darkContent();
    return () => { };
  }, []);

  const onPressContinue = () => {
    if (isChangePasswordValid(password, newPassword)) {
      changePasswordApi()
    }
  };

  const changePasswordApi = async () => {
    setIsLoading(true);
    let body = {
      password: password,
      device: { id: getDeviceId(), deviceToken: "web" },
    };
    try {
      const endPoint = api.login;
      await callApi(
        Method.POST,
        endPoint,
        body,
        (res) => {
          if (res?.status == 200 && res?.success) {
            navigation.reset({ index: 0, routes: [{ name: routes.login }] });
            GreenSnackbar(res?.message);
            setIsLoading(false);
          }
        },
        (err) => {
          RedSnackbar(err.message);
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  };

  return (
    <Global
      paddingHorizontal={true}
      navigation={navigation}
      header={true}
      isBack={true}
      title={'Reset Your Password'}
      description={'Please set a new password for your account.'}
      ref={statusBar}
      globalStyle={styles.wrapper}>
      <View style={{ marginBottom: heightPixel(60) }}>
        <MyInput
          leftIcon={appIcons.lockIcon}
          value={password}
          placeHolder={'Enter your Password'}
          setValue={setPassword}
          secure={secure}
          onPressRight={() => setSecure(!secure)}
          rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
          title={'Password'}
          disable={!isLoading}
        />
        <MyInput
          leftIcon={appIcons.lockIcon}
          value={newPassword}
          placeHolder={'Re-enter your Password'}
          setValue={setNewPassword}
          secure={newSecure}
          onPressRight={() => setNewSecure(!newSecure)}
          rightIcon={newSecure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
          title={'Confirm password'}
          disable={!isLoading}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.theme} size={'small'} />
      ) : (
        <Button onPress={() => onPressContinue()} children={'Reset Password'} />
      )}
    </Global>
  );
};

export default ChangePasswordScreen;
