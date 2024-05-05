import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  GreenSnackbar,
  RedSnackbar,
  appIcons,
  colors,
} from '../../../services';
import { Global, MyInput } from '../../../components';
import { styles } from './styles';
import Button from '../../../components/button';
import { isForgotValid } from '../../../services/validations';

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
      setIsLoading(true);
    }
  };

  return (
    <Global
      isBack={true}
      navigation={navigation}
      loginHeader={true}
      globalStyle={styles.wrapper}
      ref={statusBar}>
      <View>
        <Text style={styles.heading}>Forgot Password</Text>
        <Text style={styles.title}>
          Enter your registered email to receive an OTP code.
        </Text>
        <MyInput
          leftIcon={appIcons.mailIcon}
          value={email}
          placeHolder={'Enter your email'}
          setValue={setEmail}
          keyboardType={'email-address'}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.theme} size={'small'} />
      ) : (
        <Button onPress={() => { }} children={'Continue'} />
      )}
    </Global>
  );
};

export default ForgotScreen;
