import React, {useRef, useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';

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
import {isForgotValid} from '../../../services/validations';

const ForgotScreen = ({navigation}) => {
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
      paddingHorizontal={true}
      navigation={navigation}
      header={true}
      isBack={true}
      title={'Forgot Password'}
      isLoading={isLoading}
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
        />
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.theme} size={'small'} />
      ) : (
        <Button
          onPress={() => {
            navigation.navigate(routes.otpVerfication, {screen: 'forgot'});
          }}
          children={'Continue'}
        />
      )}
    </Global>
  );
};

export default ForgotScreen;
