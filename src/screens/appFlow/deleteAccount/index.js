import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';

import {Global, MyInput} from '../../../components';
import {styles} from './styles';
import {GreenSnackbar, appIcons, heightPixel} from '../../../services';
import Button from '../../../components/button';
import {isDeleteValid} from '../../../services/validations';

const DeleteAccount = ({navigation}) => {
  const statusBar = useRef(null);
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const onPress = () => {
    if (isDeleteValid(password)) {
      navigation.goBack();
    }
  };

  return (
    <Global
      title={'Delete Account'}
      navigation={navigation}
      appHeader={true}
      globalStyle={{
        paddingTop: heightPixel(1),
        justifyContent: 'space-between',
      }}
      ref={statusBar}>
      <View style={{marginBottom: heightPixel(24)}}>
        <View style={styles.viewOne}>
          <Image style={styles.iconStyle} source={appIcons?.deleteIcon} />
          <Text style={styles.title}>Delete your account will:</Text>
        </View>
        <View>
          <Text style={styles.para}>
            {'\u25CF'} Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam nihil molestiae consequatu
          </Text>
          <Text style={styles.para}>
            {'\u25CF'} Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam nihil molestiae consequatu
          </Text>
        </View>
        <View style={styles.viewTwo}>
          <Text style={styles.title}>
            To Delete your Account Confirm your Password
          </Text>
          <View style={styles.input}>
            <Text style={styles.heading}>Current Password</Text>
            <MyInput
              marginTop={heightPixel(8)}
              value={password}
              placeHolder={'Enter your password'}
              setValue={setPassword}
              secure={secure}
              onPressRight={() => setSecure(!secure)}
              rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
            />
          </View>
        </View>
      </View>
      <Button onPress={() => onPress()} children={'Delete Account'} />
    </Global>
  );
};

export default DeleteAccount;
