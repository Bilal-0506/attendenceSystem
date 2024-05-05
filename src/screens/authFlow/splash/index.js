import React, { useRef, useState } from 'react';
import { Text } from 'react-native';

import { appIcons, colors, fontFamily, routes } from '../../../services';
import { styles } from './styles';
import { Global } from '../../../components';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const Splash = ({ navigation }) => {
  const statusBar = useRef(null);

  React.useEffect(() => {
    performTimeConsumingTask();
    statusBar.current?.darkContent();
  }, []);

  const performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        navigation.replace(routes.onBoarding);
      }, 4000),
    );
  };

  return (
    <Global ref={statusBar} globalStyle={styles.wrapper}>
      <Text style={styles.textStyle}>ATTENDENCE APP</Text>
    </Global>
  );
};

export default Splash;
