import React, {useRef, useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {appIcons, heightPixel, routes} from '../../../services';
import {styles} from './styles';
import {BackgroundView} from '../../../components';
import Button from '../../../components/button';
import {userSurveySave} from '../../../redux/Slices/userDataSlice';

const OnBoarding = ({navigation}) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    statusBar.current?.lightContent();
  }, []);

  const onPress = () => {
    dispatch(userSurveySave(true));
    navigation.replace(routes.login);
  };

  return (
    <BackgroundView
      globalStyle={styles.main}
      image={appIcons.bgImageOne}
      ref={statusBar}>
      <View>
        <View style={styles.headerView}>
          <Text style={styles.heading}>Welcome to</Text>
          <Image source={appIcons.handIcon} style={styles.iconStyle} />
        </View>
        <Image source={appIcons.appLogoWhite} style={styles.imageStyle} />
        <Text style={styles.textStyle}>
          Let's explore, discover, and drive your dream car together.
        </Text>
      </View>
      <Button
        onPress={() => {}}
        marginBottom={heightPixel(68)}
        children={'Let’s begin!'}
      />
    </BackgroundView>
  );
};

export default OnBoarding;
