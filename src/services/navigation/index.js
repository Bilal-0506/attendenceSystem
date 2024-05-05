import React, { useEffect, useState } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { routes } from '..';
import { AuthNavigation } from './authFlow';
import themeContext from '../config/themeContext';
import theme from '../config/theme';
import DrawerNavigator from './drawerFlow';
import { useDispatch, useSelector } from 'react-redux';

const MyStack = createStackNavigator();
export const MainNavigator = () => {
  const [mode, setMode] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    let eventListener = EventRegister.addEventListener('changeTheme', data => {
      setMode(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: mode === true ? '#0000' : '#fff',
    },
  };

  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={MyTheme}>
        <MyStack.Navigator
          initialRouteName={routes.auth}
          screenOptions={{ headerShown: false }}>
          <MyStack.Screen name={routes.auth} component={AuthNavigation} />
          {/* <MyStack.Screen name={routes.drawer} component={DrawerNavigator} /> */}
        </MyStack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};
