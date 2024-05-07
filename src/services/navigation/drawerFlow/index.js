import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '../../constants';
import {TabNavigator} from '../tabFlow';
import {AddRequestScreen} from '../../../screens/appFlow';

const Drawer = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{gestureEnabled: true, headerShown: false}}>
      <Drawer.Screen name={routes.tab} component={TabNavigator} />
      <Drawer.Screen name={routes.leaveRequest} component={AddRequestScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
