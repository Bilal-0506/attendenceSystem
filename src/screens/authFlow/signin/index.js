import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { getDeviceId } from 'react-native-device-info';

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
import { isLoginValid } from '../../../services/validations';
import { accessToken, refreshToken, userDataSave } from '../../../redux/Slices/userDataSlice';
import { api } from '../../../network/Environment';
import { Method, callApi } from '../../../network/NetworkManger';

const LoginScreen = ({ navigation }) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const onPressLogin = () => {
    if (isLoginValid(email, password)) {
      loginApi()
    }
  };

  const loginApi = async () => {
    setIsLoading(true);
    let body = {
      email: email.toLowerCase().trim(),
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
            if (res?.data?.user?.verified) {
              dispatch(accessToken(res?.data?.token));
              dispatch(refreshToken(res?.data?.refreshToken));
              dispatch(userDataSave(res?.data?.user));
              if (res?.data?.user?.profileCompleted) {
                navigation.reset({
                  index: 0,
                  routes: [{ name: routes?.drawer }],
                });
              } else {
                navigation.replace(routes?.buildProfile);
              }
            } else {
              navigation.navigate(routes?.otp, {
                screen: "signup",
                email: email.toLowerCase().trim(),
              });
            }
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
      title={'Welcome Back'}
      titleIcon={appIcons.handIcon}
      description={'Hello there, login to continue'}
      ref={statusBar}>
      <View style={{ marginBottom: heightPixel(100) }}>
        <MyInput
          value={email}
          placeHolder={'Enter your email'}
          setValue={setEmail}
          keyboardType={'email-address'}
          title={'Email Address'}
          marginTop={heightPixel(6)}
          disable={!isLoading}
        />
        <MyInput
          value={password}
          placeHolder={'Enter your Password'}
          setValue={setPassword}
          secure={secure}
          onPressRight={() => setSecure(!secure)}
          rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
          title={'Password'}
          disable={!isLoading}
        />
        <View style={styles.rowSpace}>
          <Text disabled={isLoading}
            onPress={() => navigation.navigate(routes.signup)}
            style={styles.forgot}>
            Create new account?
          </Text>
          {/* <Text
            disabled={isLoading}
            onPress={() => navigation.navigate(routes.forgotPassword)}
            style={styles.forgot}>
            Forget Password?
          </Text> */}
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.theme} size={'large'} />
      ) : (
        <Button
          onPress={() => {
            onPressLogin()
          }}
          children={'Login'}
        />
      )}
    </Global>
  );
};

export default LoginScreen;
