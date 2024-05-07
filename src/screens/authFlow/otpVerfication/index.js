import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CountDownTimer from 'react-native-countdown-timer-hooks';

import {
  GreenSnackbar,
  RedSnackbar,
  appIcons,
  colors,
  heightPixel,
  routes,
} from '../../../services';
import {Global} from '../../../components';
import {styles} from './styles';
import Button from '../../../components/button';

const OtpVerficationScreen = ({navigation, route}) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const timer = useRef();
  const [otp, setOtp] = useState('');
  const [timerEnd, setTimerEnd] = useState(false);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const check = () => {
    if (otp == '') {
      RedSnackbar('OTP required');
    } else if (otp.length < 4) {
      RedSnackbar('Invalid otp');
    } else {
      GreenSnackbar('OTP verfied');
      setOtp('');
      if (route.params?.screen == 'signup') {
        navigation.replace(routes.buildProfile);
      } else {
        navigation.replace(routes.changePassword);
      }
    }
  };

  const timerCallbackFunc = timerFlag => {
    // Setting timer flag to finished
    setTimerEnd(timerFlag);
  };

  const resetTimer = () => {
    setTimerEnd(false);
    timer.current?.resetTimer();
  };

  return (
    <Global
      paddingHorizontal={true}
      navigation={navigation}
      header={true}
      title={'OTP Verification'}
      isBack={true}
      titleIcon={appIcons.handIcon}
      description={
        'Enter your 4 digit OTP code that we have just sent on your email.'
      }
      ref={statusBar}
      globalStyle={styles.wrapper}>
      <View style={{marginBottom: heightPixel(60)}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: heightPixel(20),
          }}>
          <OTPInputView
            style={styles.otpView}
            pinCount={4}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleBase}
            onCodeChanged={setOtp}
            onCodeFilled={code => {
              setOtp(code);
            }}
            code={otp}
          />
          {!timerEnd ? (
            <CountDownTimer
              ref={timer}
              timestamp={60}
              timerCallback={timerCallbackFunc}
              containerStyle={styles.timerStyle}
              textStyle={styles.timerText}
            />
          ) : (
            <View style={styles.timerStyle}>
              <Text style={styles.timerText}>00:00</Text>
            </View>
          )}
          <TouchableOpacity disabled={!timerEnd} onPress={() => resetTimer()}>
            <Text style={styles.resend}>
              Didn’t get code? -{' '}
              <Text
                style={[
                  styles.resend,
                  {
                    color: colors.theme,
                    textDecorationLine: 'underline',
                    textDecorationColor: colors.theme,
                  },
                ]}>
                Resend code
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button onPress={() => check()} children={'Continue'} />
    </Global>
  );
};

export default OtpVerficationScreen;
