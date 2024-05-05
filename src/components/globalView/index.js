import React, {
  useContext,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';

import {
  appIcons,
  colors,
  heightPixel,
  routes,
  widthPixel,
} from '../../services';
import themeContext from '../../services/config/themeContext';
import {
  AppHeader,
  DashboardHeader,
  LoginHeader,
  ProfileHeader,
  SearchAndFilter,
} from '..';

const STYLES = ['dark-content', 'light-content'];

const Global = forwardRef(
  (
    {
      isBack,
      children,
      globalStyle,
      navigation,
      loginHeader,
      dashboardHeader,
      appHeader,
      title,
      route,
      search,
      searchTop,
      searchBottom,
      notification,
      profileHeader,
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
        {dashboardHeader && <DashboardHeader navigation={navigation} />}
        {loginHeader && (
          <LoginHeader isBack={isBack} route={route} navigation={navigation} />
        )}
        {appHeader && (
          <AppHeader
            isBack={isBack}
            notification={notification}
            route={route}
            title={title}
            navigation={navigation}
          />
        )}
        {profileHeader && (
          <ProfileHeader
            notification={notification}
            route={route}
            title={title}
            navigation={navigation}
          />
        )}
        {search && (
          <View
            style={{
              paddingHorizontal: widthPixel(20),
              paddingTop: searchTop ? searchTop : heightPixel(20),
              paddingBottom: searchBottom ? searchBottom : heightPixel(20),
            }}>
            <SearchAndFilter
              placeHolder={'Search...'}
              leftIcon={appIcons.search}
              rightIcon={appIcons.filter}
              onPressView={() => {
                navigation.navigate(routes.searchAndFilter);
              }}
              disable={false}
              disableLeft={true}
              disableRight={true}
            />
          </View>
        )}
        <View style={styles.wrapper}>
          <ScrollView
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.scroll, {...globalStyle}]}>
            {children}
          </ScrollView>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flexGrow: 1,
    paddingVertical: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
});

export default Global;
