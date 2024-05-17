import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, Pressable, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Global} from '../../../components';
import {styles} from './styles';
import {
  GreenSnackbar,
  RedSnackbar,
  appIcons,
  colors,
  heightPixel,
  routes,
  widthPixel,
} from '../../../services';
import {clearState, userDataSave} from '../../../redux/Slices/userDataSlice';
import {ScrollView} from 'react-native-gesture-handler';
import {Method, callApi} from '../../../network/NetworkManger';
import {api} from '../../../network/Environment';
import {getDeviceId} from 'react-native-device-info';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const statusBar = useRef(null);
  const user = useSelector(state => state.user?.userData);
  const [image, setImage] = useState(appIcons.carImage);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setlist] = useState([
    {
      id: 1,
      title: 'Account',
      item: [
        {
          id: 1,
          icon: appIcons.profileIcon,
          title: 'Edit Profile',
          route: routes.editProfile,
        },
        {
          id: 2,
          icon: appIcons.settingIcon,
          title: 'Settings',
          route: routes.settings,
        },
        {
          id: 3,
          icon: appIcons.passIcon,
          title: 'Change Password',
          route: routes.ChangePassord,
        },
      ],
    },
    {
      id: 2,
      title: 'Actions',
      item: [
        {
          id: 2,
          icon: appIcons.logoutIcon,
          title: 'Logout',
          route: '',
        },
      ],
    },
  ]);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const onPressLogout = async () => {
    setIsLoading(true);
    let body = {
      device: {id: getDeviceId(), deviceToken: 'web'},
    };
    try {
      const endPoint = api.userLogout;
      await callApi(
        Method.POST,
        endPoint,
        body,
        res => {
          if (res?.status == 200 && res?.success) {
            dispatch(clearState());
            GreenSnackbar(res?.message);
            navigation.reset({index: 0, routes: [{name: routes.auth}]});
            setIsLoading(false);
          }
        },
        err => {
          RedSnackbar(err.message);
          setIsLoading(false);
        },
      );
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
    }
  };

  return (
    <Global
      paddingHorizontal={true}
      notification={true}
      header={true}
      headerTitle={'User Profile'}
      navigation={navigation}
      ref={statusBar}>
      <View style={styles.viewOne}>
        <Pressable style={styles.imageView}>
          <Image
            source={{uri: user?.image}}
            style={styles.imageView}
            borderRadius={100}
          />
        </Pressable>
        <Text
          style={{
            ...styles.title,
            marginTop: heightPixel(8),
            marginBottom: heightPixel(6),
          }}>
          {user?.firstName}
        </Text>
        <Text style={{...styles.subTitle}}>{user?.email}</Text>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          {list?.map((item, index) => (
            <View key={item.id}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.dropView}>
                {item?.item?.map((data, index) => (
                  <Pressable
                    disabled={isLoading}
                    onPress={() => {
                      data.title == 'Logout'
                        ? onPressLogout()
                        : data.title == 'Profile Type'
                        ? ''
                        : navigation.navigate(data?.route);
                    }}
                    key={data.id}
                    style={[
                      styles.rowSpace,
                      {
                        borderBottomWidth:
                          index == item?.item?.length - 1
                            ? widthPixel(0)
                            : widthPixel(1),
                      },
                    ]}>
                    <View style={styles.row}>
                      <Image source={data?.icon} style={styles.leftIcon} />
                      <Text style={styles.subTitle}>{data?.title}</Text>
                    </View>
                    <View style={styles.row}>
                      {data.title == 'Logout' ? (
                        isLoading ? (
                          <ActivityIndicator
                            color={colors.theme}
                            size={'small'}
                          />
                        ) : (
                          <Image
                            source={appIcons.chevronRightIcon}
                            style={styles.rightIcon}
                          />
                        )
                      ) : (
                        <Image
                          source={appIcons.chevronRightIcon}
                          style={styles.rightIcon}
                        />
                      )}
                    </View>
                  </Pressable>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Global>
  );
};

export default Profile;
