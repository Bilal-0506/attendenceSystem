import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {getDeviceId} from 'react-native-device-info';

import {Global, MyInput} from '../../../components';
import {styles} from './styles';
import {
  GreenSnackbar,
  RedSnackbar,
  appIcons,
  colors,
  heightPixel,
  routes,
} from '../../../services';
import Button from '../../../components/button';
import {isDeleteValid} from '../../../services/validations';
import {clearState} from '../../../redux/Slices/userDataSlice';
import {api} from '../../../network/Environment';
import {Method, callApi} from '../../../network/NetworkManger';

const DeleteAccount = ({navigation}) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const onPress = () => {
    if (isDeleteValid(password)) {
      deleteUser();
    }
  };

  const deleteUser = async () => {
    setIsLoading(true);
    try {
      const endPoint =
        api.userDelete +
        `?password=${password}&device=${{
          id: getDeviceId(),
          deviceToken: 'web',
        }}`;
      await callApi(
        Method.DELETE,
        endPoint,
        null,
        res => {
          console.log(res, '../');
          if (res?.status == 204 && res?.success) {
            dispatch(clearState());
            GreenSnackbar(res?.message);
            navigation.reset({index: 0, routes: [{name: routes.auth}]});
            setIsLoading(false);
          }
        },
        err => {
          RedSnackbar(err.message);
          setIsLoading(false);
        },
      );
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
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
                disable={!isLoading}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      {isLoading ? (
        <ActivityIndicator
          style={{marginBottom: heightPixel(20)}}
          color={colors.theme}
          size={'small'}
        />
      ) : (
        <Button onPress={() => onPress()} children={'Delete Account'} />
      )}
    </Global>
  );
};

export default DeleteAccount;
