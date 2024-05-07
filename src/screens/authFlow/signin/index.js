import React, {useRef, useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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
import {isLoginValid} from '../../../services/validations';
import {userDataSave} from '../../../redux/Slices/userDataSlice';

const LoginScreen = ({navigation}) => {
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
    }
  };

  return (
    <Global
      paddingHorizontal={true}
      navigation={navigation}
      header={true}
      title={'Welcome Back'}
      titleIcon={appIcons.handIcon}
      isLoading={isLoading}
      description={'Hello there, login to continue'}
      ref={statusBar}>
      <View style={{marginBottom: heightPixel(100)}}>
        <MyInput
          value={email}
          placeHolder={'Enter your email'}
          setValue={setEmail}
          keyboardType={'email-address'}
          title={'Email Address'}
          marginTop={heightPixel(6)}
        />
        <MyInput
          value={password}
          placeHolder={'Enter your Password'}
          setValue={setPassword}
          secure={secure}
          onPressRight={() => setSecure(!secure)}
          rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
          title={'Password'}
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
        <Button
          onPress={() => {
            navigation.navigate(routes.buildProfile);
          }}
          children={'Login'}
        />
      )}
    </Global>
  );
};

export default LoginScreen;
