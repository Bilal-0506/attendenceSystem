import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '../../constants';
import {TabNavigator} from '../tabFlow';
import {
  AddRequestScreen,
  ChangePassord,
  Conditions,
  DeleteAccount,
  EditProfile,
  Notification,
  Settings,
} from '../../../screens/appFlow';

const Drawer = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{gestureEnabled: true, headerShown: false}}>
      <Drawer.Screen name={routes.tab} component={TabNavigator} />
      <Drawer.Screen name={routes.notification} component={Notification} />
      <Drawer.Screen name={routes.leaveRequest} component={AddRequestScreen} />
      <Drawer.Screen name={routes.editProfile} component={EditProfile} />
      <Drawer.Screen name={routes.settings} component={Settings} />
      <Drawer.Screen name={routes.ChangePassord} component={ChangePassord} />
      <Drawer.Screen name={routes.condtions} component={Conditions} />
      <Drawer.Screen name={routes.deleteAccount} component={DeleteAccount} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
