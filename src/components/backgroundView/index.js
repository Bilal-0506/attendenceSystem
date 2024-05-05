import React, {
  useContext,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
} from 'react-native';

import {heightPixel, widthPixel} from '../../services';
import themeContext from '../../services/config/themeContext';

const STYLES = ['dark-content', 'light-content'];

const BackgroundView = forwardRef(({children, globalStyle, image}, ref) => {
  const theme = useContext(themeContext);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);

  useImperativeHandle(ref, () => ({
    lightContent() {
      changeStatusBarStyle(1);
    },
    darkContent() {
      changeStatusBarStyle(0);
    },
  }));

  const changeStatusBarStyle = val => {
    setStatusBarStyle(STYLES[val]);
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.main}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        barStyle={statusBarStyle}
        translucent={true}
      />
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={[styles.scroll, {...globalStyle}]}>
          {children}
        </ScrollView>
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  wrapper: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: widthPixel(20),
    paddingVertical: heightPixel(20),
  },
});

export default BackgroundView;
