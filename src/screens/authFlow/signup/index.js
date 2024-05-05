import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';

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
import { isSignupValid } from '../../../services/validations';

const SignupScreen = ({ navigation }) => {
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
      setIsLoading(true);
    }
  };

  return (
    <Global navigation={navigation} loginHeader={true} ref={statusBar}>
      <View style={{ marginBottom: heightPixel(100) }}>
        <Text style={styles.heading}>Create Account</Text>
        <MyInput
          leftIcon={appIcons.mailIcon}
          value={email}
          placeHolder={'Enter your email'}
          setValue={setEmail}
          keyboardType={'email-address'}
          disable={!isLoading}
        />
        <MyInput
          leftIcon={appIcons.lockIcon}
          value={password}
          placeHolder={'Enter your Password'}
          setValue={setPassword}
          secure={secure}
          onPressRight={() => setSecure(!secure)}
          rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
          disable={!isLoading}
        />
        <MyInput
          leftIcon={appIcons.lockIcon}
          value={confirmPassword}
          placeHolder={'Re-enter your password'}
          setValue={setConfirmPassword}
          secure={confirmSecure}
          onPressRight={() => setConfirmSecure(!confirmSecure)}
          rightIcon={confirmSecure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
          disable={!isLoading}
        />
        <View style={styles.rowSpace}>
          <Text
            onPress={() => navigation.navigate(routes.signup)}
            style={styles.forgot}>
            Login to your account?
          </Text>
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.theme} size={'small'} />
      ) : (
        <Button onPress={() => { }} children={'Sign Up'} />
      )}
    </Global>
  );
};

export default SignupScreen;
