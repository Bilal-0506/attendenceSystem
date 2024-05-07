import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {appIcons, colors, heightPixel, routes} from '../../../services';
import {Global, MyInput} from '../../../components';
import {styles} from './styles';
import Button from '../../../components/button';
import {isSignupValid} from '../../../services/validations';
import {ScrollView} from 'react-native-gesture-handler';

const SignupScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const statusBar = useRef(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
    <Global
      paddingHorizontal={true}
      navigation={navigation}
      header={true}
      title={'Register Account'}
      titleIcon={appIcons.handIcon}
      isLoading={isLoading}
      description={'Hello there, register to continue'}
      ref={statusBar}>
      <View style={{flex: 1, marginBottom: heightPixel(20)}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <MyInput
            value={firstName}
            placeHolder={'Enter your first name'}
            setValue={setFirstName}
            keyboardType={'email-address'}
            disable={!isLoading}
            title={'First Name'}
            marginTop={heightPixel(6)}
          />
          <MyInput
            value={lastName}
            placeHolder={'Enter your last name'}
            setValue={setLastName}
            keyboardType={'email-address'}
            disable={!isLoading}
            title={'Last Name'}
          />
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
              onPress={() => navigation.navigate(routes.login)}
              style={styles.forgot}>
              Already have an account?
              <Text style={{color: colors.theme}}> Login</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
      <Button
        onPress={() => {
          navigation.navigate(routes?.otpVerfication, {screen: 'signup'});
        }}
        children={'Register'}
      />
    </Global>
  );
};

export default SignupScreen;
