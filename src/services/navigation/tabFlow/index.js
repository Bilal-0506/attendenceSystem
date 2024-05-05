import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { appIcons, colors, fontFamily } from '../../utilities';
import { heightPixel, widthPixel } from '../../constants';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ProfileStack } from '../appFlow/profileStack';

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container]}>
      <View style={[styles.btn]}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={focused ? item.active : item.icon}
            style={[styles.tabIcon]}
          />
          <Text
            style={[
              styles.title,
              { color: focused ? colors.theme : colors.inActiveTab },
            ]}>
            {item.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export function TabNavigator() {
  const tabArray = [
    // {
    //   route: 'brokerHome',
    //   icon: appIcons.tabIconOne,
    //   active: appIcons.activeTabIconOne,
    //   component: DashboardStack,
    //   color: colors.theme,
    //   name: 'Home',
    // },
    // {
    //   route: 'brokerBooking',
    //   icon: appIcons.tabIconTwo,
    //   active: appIcons.activeTabIconTwo,
    //   component: BookingStack,
    //   color: colors.theme,
    //   name: 'Booking',
    // },
    // {
    //   route: 'brokerWholeSale',
    //   icon: appIcons.tabIconThree,
    //   active: appIcons.activeTabIconThree,
    //   component: WholeSaleStack,
    //   color: colors.theme,
    //   name: 'WholeSale',
    // },
    {
      route: 'profile',
      icon: appIcons.tabIconFour,
      active: appIcons.activeTabIconFour,
      component: ProfileStack,
      color: colors.theme,
      name: 'Profile',
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.barStyle,
      }}>
      {tabArray?.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,

              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.tabColor,
    height: heightPixel(78),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderTopLeftRadius: widthPixel(16),
    borderTopRightRadius: widthPixel(16),
    paddingTop: Platform.OS == 'ios' ? 10 : 5,
    borderWidth: 0,
    borderColor: colors.tabColor,
    shadowColor: colors.tabColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  tabIcon: {
    width: widthPixel(24),
    height: heightPixel(24),
    resizeMode: 'contain',
    marginBottom: heightPixel(4),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  title: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.5),
  },
});
