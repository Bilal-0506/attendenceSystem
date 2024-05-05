import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from '../../constants';
import { TabNavigator } from '../tabFlow';

const Drawer = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ gestureEnabled: true, headerShown: false }}>
      <Drawer.Screen name={routes.tab} component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
