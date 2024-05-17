import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {getDeviceId} from 'react-native-device-info';

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
import {isSignupValid} from '../../../services/validations';
import {ScrollView} from 'react-native-gesture-handler';
import {api} from '../../../network/Environment';
import {Method, callApi} from '../../../network/NetworkManger';

const SignupScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const statusBar = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [confirmSecure, setConfirmSecure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const onPressSignup = () => {
    if (isSignupValid(email, password, confirmPassword)) {
      signupApi();
    }
  };

  const signupApi = async () => {
    setIsLoading(true);
    let body = {
      email: email.toLowerCase().trim(),
      password: password,
      device: {id: getDeviceId(), deviceToken: 'web'},
    };
    try {
      const endPoint = api.signup;
      await callApi(
        Method.POST,
        endPoint,
        body,
        res => {
          if (res?.status == 200 && res?.success) {
            navigation.replace(routes?.buildProfile);
            GreenSnackbar(res?.message);
            setIsLoading(false);
          }
        },
        err => {
          console.error(err);
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
      title={'Register Account'}
      titleIcon={appIcons.handIcon}
      description={'Hello there, register to continue'}
      ref={statusBar}>
      <View style={{flex: 1, marginBottom: heightPixel(20)}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <MyInput
            value={email}
            placeHolder={'Enter your email'}
            setValue={setEmail}
            keyboardType={'email-address'}
            disable={!isLoading}
            title={'Email Address'}
          />
          <MyInput
            value={password}
            placeHolder={'Enter your Password'}
            setValue={setPassword}
            secure={secure}
            onPressRight={() => setSecure(!secure)}
            rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
            disable={!isLoading}
            title={'Password'}
          />
          <MyInput
            value={confirmPassword}
            placeHolder={'Re-enter your password'}
            setValue={setConfirmPassword}
            secure={confirmSecure}
            onPressRight={() => setConfirmSecure(!confirmSecure)}
            rightIcon={confirmSecure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
            disable={!isLoading}
            title={'ConfirmPassword'}
          />
          <View style={styles.rowSpace}>
            <Text
              disabled={isLoading}
              onPress={() => navigation.navigate(routes.login)}
              style={styles.forgot}>
              Already have an account?
              <Text style={{color: colors.theme}}> Login</Text>
            </Text>
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
        <Button onPress={() => onPressSignup()} children={'Register'} />
      )}
    </Global>
  );
};

export default SignupScreen;
