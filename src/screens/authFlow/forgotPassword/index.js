import React, { useRef, useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
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
import { isForgotValid } from '../../../services/validations';
import { api } from '../../../network/Environment';
import { Method, callApi } from '../../../network/NetworkManger';

const ForgotScreen = ({ navigation }) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const onPressResset = () => {
    if (isForgotValid(email)) {
      forgotApi()
    }
  };

  const forgotApi = async () => {
    setIsLoading(true);
    let body = {
      email: email.toLowerCase().trim(),
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
            navigation.replace(routes?.otp, {
              screen: "forgot",
              email: email.toLowerCase().trim(),
            });
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
      title={'Forgot Password'}
      description={'Hello there, enter email to continue'}
      ref={statusBar}
      globalStyle={styles.wrapper}>
      <View>
        <MyInput
          leftIcon={appIcons.mailIcon}
          value={email}
          placeHolder={'Enter your email'}
          setValue={setEmail}
          keyboardType={'email-address'}
          title={'Email Address'}
          marginTop={heightPixel(6)}
          disable={!isLoading}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.theme} size={'small'} />
      ) : (
        <Button
          onPress={() => {
            onPressResset()
          }}
          children={'Continue'}
        />
      )}
    </Global>
  );
};

export default ForgotScreen;
