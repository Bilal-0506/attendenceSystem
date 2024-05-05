import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

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
import { userDataSave } from '../../../redux/Slices/userDataSlice';

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
      setIsLoading(true);
    }
  };

  return (
    <Global navigation={navigation} loginHeader={true} ref={statusBar}>
      <View style={{ marginBottom: heightPixel(100) }}>
        <Text style={styles.heading}>Welcome Back!</Text>
        <MyInput
          leftIcon={appIcons.mailIcon}
          value={email}
          placeHolder={'Enter your email'}
          setValue={setEmail}
          keyboardType={'email-address'}
        />
        <MyInput
          leftIcon={appIcons.lockIcon}
          value={password}
          placeHolder={'Enter your Password'}
          setValue={setPassword}
          secure={secure}
          onPressRight={() => setSecure(!secure)}
          rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
        />
        <View style={styles.rowSpace}>
          <Text
            onPress={() => navigation.navigate(routes.signup)}
            style={styles.forgot}>
            Create new account?
          </Text>
          <Text
            onPress={() => navigation.navigate(routes.forgotPassword)}
            style={styles.forgot}>
            Forget Password?
          </Text>
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.theme} size={'small'} />
      ) : (
        <Button onPress={() => { }} children={'Login'} />
      )}
    </Global>
  );
};

export default LoginScreen;
