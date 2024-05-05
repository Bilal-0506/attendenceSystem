import React, {useRef, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {Global, ModalComponent, MyInput} from '../../../components';
import {styles} from './styles';
import {appIcons, heightPixel} from '../../../services';
import {isChangePasswordValid} from '../../../services/validations';
import Button from '../../../components/button';

const ChangePassord = ({navigation}) => {
  const statusBar = useRef(null);
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

  const onPress = () => {
    if (isChangePasswordValid(password, newPassword)) {
      setModal(true);
      modelView();
    }
  };

  const modelView = () => {
    timer = setTimeout(() => {
      setModal(false);
      navigation.goBack();
    }, 1500);
  };

  return (
    <Global
      title={'Change Password'}
      navigation={navigation}
      appHeader={true}
      globalStyle={{
        paddingTop: heightPixel(1),
        justifyContent: 'space-between',
      }}
      ref={statusBar}>
      <View>
        <Text style={styles.title}>
          To change your password please provide the fill the following details
        </Text>
        <View style={styles.viewOne}>
          <Text style={styles.heading}>Current Password</Text>
          <MyInput
            marginTop={heightPixel(8)}
            value={password}
            placeHolder={'New Password'}
            setValue={setPassword}
            secure={secure}
            onPressRight={() => setSecure(!secure)}
            rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
          />
        </View>
        <View style={styles.viewTwo}>
          <Text style={styles.heading}>New Password</Text>
          <MyInput
            value={newPassword}
            marginTop={heightPixel(8)}
            placeHolder={'Confirm Password'}
            setValue={setNewPassword}
            secure={newSecure}
            onPressRight={() => setNewSecure(!newSecure)}
            rightIcon={newSecure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
          />
        </View>
      </View>
      <Button onPress={() => onPress()} children={'Save Changes'} />
      {modal && (
        <ModalComponent
          modalVisible={modal}
          title={'Password Changed'}
          subTitle={'You have successfully changed your password!'}
        />
      )}
    </Global>
  );
};

export default ChangePassord;
