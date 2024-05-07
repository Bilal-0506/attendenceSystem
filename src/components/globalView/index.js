import React, {
  useContext,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

import {widthPixel} from '../../services';
import themeContext from '../../services/config/themeContext';
import Header from '../header';

const STYLES = ['dark-content', 'light-content'];

const Global = forwardRef(
  (
    {
      isBack,
      header,
      children,
      globalStyle,
      navigation,
      headerSave,
      headerSetting,
      headerTitle,
      title,
      titleIcon,
      description,
      paddingHorizontal,
    },
    ref,
  ) => {
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
      <View style={styles.main}>
        <StatusBar
          animated={true}
          backgroundColor={'transparent'}
          barStyle={statusBarStyle}
          translucent
        />
        {header && (
          <Header
            navigation={navigation}
            isBack={isBack}
            headerSave={headerSave}
            headerSetting={headerSetting}
            headerTitle={headerTitle}
            title={title}
            titleIcon={titleIcon}
            description={description}
          />
        )}

        <View
          style={[
            styles.wrapper,
            {
              ...globalStyle,
              paddingHorizontal: paddingHorizontal ? widthPixel(20) : 0,
            },
          ]}>
          {children}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#f5f9ff',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#f5f9ff',
  },
});

export default Global;
