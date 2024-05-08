import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';

import {Global, MyInput} from '../../../components';
import {styles} from './styles';
import {GreenSnackbar, appIcons, heightPixel, routes} from '../../../services';
import Button from '../../../components/button';
import {isDeleteValid} from '../../../services/validations';
import {ScrollView} from 'react-native-gesture-handler';

const DeleteAccount = ({navigation}) => {
  const statusBar = useRef(null);
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const onPress = () => {
    if (isDeleteValid(password)) {
      navigation.reset({index: 0, routes: [{name: routes.auth}]});
    }
  };

  return (
    <Global
      isBack={true}
      header={true}
      paddingHorizontal={true}
      headerTitle={'Delete Account'}
      navigation={navigation}
      appHeader={true}
      globalStyle={{
        paddingTop: heightPixel(1),
        justifyContent: 'space-between',
      }}
      ref={statusBar}>
      <View style={{marginBottom: heightPixel(24), flex: 1}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.viewOne}>
            <Image style={styles.iconStyle} source={appIcons?.deleteIcon} />
            <Text style={styles.title}>Delete your account will:</Text>
          </View>
          <View>
            <Text style={styles.para}>
              {'\u25CF'} Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatu
            </Text>
          </View>
          <View style={styles.viewTwo}>
            <Text style={styles.title}>
              To Delete your Account Confirm your Password
            </Text>
            <View style={styles.input}>
              <MyInput
                marginTop={heightPixel(8)}
                value={password}
                placeHolder={'Enter your password'}
                setValue={setPassword}
                secure={secure}
                onPressRight={() => setSecure(!secure)}
                rightIcon={secure ? appIcons.eyeCloseIcon : appIcons.eyeIcon}
                title={'Password'}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <Button onPress={() => onPress()} children={'Delete Account'} />
    </Global>
  );
};

export default DeleteAccount;
