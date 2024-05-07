import React, {useRef, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {GreenSnackbar, appIcons, heightPixel, routes} from '../../../services';
import {Global, ModalComponent, MyInput} from '../../../components';
import {styles} from './styles';
import Button from '../../../components/button';
import {isChangePasswordValid} from '../../../services/validations';

const ChangePasswordScreen = ({navigation}) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [newSecure, setNewSecure] = useState(true);
  const [modal, setModal] = useState(false);
  var timer;

  useEffect(() => {
    statusBar.current?.darkContent();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onPressLogin = () => {
    if (isChangePasswordValid(password, newPassword)) {
      setModal(true);
      modelView();
    }
  };

  const modelView = () => {
    timer = setTimeout(() => {
      setModal(false);
      navigation.reset({index: 0, routes: [{name: routes.login}]});
    }, 1500);
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
      <View style={{marginBottom: heightPixel(60)}}>
        <MyInput
          leftIcon={appIcons.lockIcon}
          value={password}
          placeHolder={'Enter your Password'}
          setValue={setPassword}
          secure={secure}
          onPressRight={() => setSecure(!secure)}
          rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
          title={'Password'}
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
        />
      </View>
      <Button onPress={() => onPressLogin()} children={'Reset Password'} />
      {modal && (
        <ModalComponent
          modalVisible={modal}
          title={'Password Updated'}
          subTitle={'You have successfully update your password!'}
        />
      )}
    </Global>
  );
};

export default ChangePasswordScreen;
