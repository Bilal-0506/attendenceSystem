import React, {useRef, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {Global, ModalComponent, MyInput} from '../../../components';
import {styles} from './styles';
import {appIcons, heightPixel} from '../../../services';
import {isChangePasswordValid} from '../../../services/validations';
import Button from '../../../components/button';
import {ScrollView} from 'react-native-gesture-handler';

const ChangePassord = ({navigation}) => {
  const statusBar = useRef(null);
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [newSecure, setNewSecure] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmSecure, setConfirmSecure] = useState(true);

  useEffect(() => {
    statusBar.current?.darkContent();
    return () => {};
  }, []);

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <Global
      paddingHorizontal={true}
      header={true}
      isBack={true}
      headerTitle={'Change Password'}
      navigation={navigation}
      appHeader={true}
      globalStyle={{
        justifyContent: 'space-between',
      }}
      ref={statusBar}>
      <View style={{flex: 1, marginBottom: heightPixel(20)}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Text style={styles.title}>
            To change your password please provide the fill the following
            details
          </Text>
          <MyInput
            value={password}
            placeHolder={'Enter your current password'}
            setValue={setPassword}
            secure={secure}
            onPressRight={() => setSecure(!secure)}
            rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
            title={'Current Password'}
          />
          <MyInput
            value={newPassword}
            placeHolder={'Enter your new password'}
            setValue={setNewPassword}
            secure={newSecure}
            onPressRight={() => setNewSecure(!newSecure)}
            rightIcon={newSecure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
            title={'New Password'}
          />
          <MyInput
            value={confirmPassword}
            placeHolder={'Re-enter your password'}
            setValue={setConfirmPassword}
            secure={confirmSecure}
            onPressRight={() => setConfirmSecure(!newSecure)}
            rightIcon={confirmSecure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
            title={'Confrim Password'}
          />
        </ScrollView>
      </View>
      <Button onPress={() => onPress()} children={'Save Changes'} />
    </Global>
  );
};

export default ChangePassord;
