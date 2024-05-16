import React, { useRef } from 'react';
import { Text } from 'react-native';

import { routes } from '../../../services';
import { styles } from './styles';
import { Global } from '../../../components';
import { useSelector } from 'react-redux';

const Splash = ({ navigation }) => {
  const statusBar = useRef(null);
  const user = useSelector(state => state.user)

  React.useEffect(() => {
    performTimeConsumingTask();
    statusBar.current?.darkContent();
  }, []);

  const performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        if (user?.userData) {
          if (user?.userData?.profileCompleted) {
            navigation.reset({ index: 0, routes: [{ name: routes.drawer }] });
          } else {
            navigation.replace(routes?.buildProfile);
          }
        } else {
          if (!user?.isSurvey) {
            navigation.replace(routes?.onBoarding);
          } else {
            navigation.replace(routes?.login);
          }
        }
      }, 3500)
    );
  };

  return (
    <Global ref={statusBar} globalStyle={styles.wrapper}>
      <Text style={styles.textStyle}>ATTENDENCE APP</Text>
    </Global>
  );
};

export default Splash;
