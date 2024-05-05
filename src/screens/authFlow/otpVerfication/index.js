import React, { useRef, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';

import { GreenSnackbar, RedSnackbar, colors } from '../../../services';
import { Global } from '../../../components';
import { styles } from './styles';
import Button from '../../../components/button';

const OtpVerficationScreen = ({ navigation, route }) => {
  var user = auth().currentUser;
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    statusBar.current?.darkContent();
    return () => { };
  }, []);


  return (
    <Global
      isBack={true}
      navigation={navigation}
      loginHeader={true}
      globalStyle={styles.wrapper}
      ref={statusBar}>
      <View>
        <Text style={styles.title}>
          "We've sent a verification email to the address you provided:[
          {route.params?.email}]." "Please check your inbox (and spam folder if
          needed) and click the verification link to complete your
          registration." "Once you verify your email, you'll be able to log in
          and start using [Carnet]."
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.theme} size={'small'} />
      ) : (
        <View>
          <Text onPress={() => { }} style={styles.titleTWo}>
            Dn't get the email
          </Text>
          <Button
            onPress={() => onPressCheckVerfication()}
            children={'Check Email Verfification'}
          />
        </View>
      )}
    </Global>
  );
};

export default OtpVerficationScreen;
