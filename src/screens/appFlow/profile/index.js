import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';

import {Global} from '../../../components';
import {styles} from './styles';
import {appIcons, routes, widthPixel} from '../../../services';
import {userDataSave} from '../../../redux/Slices/userDataSlice';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const statusBar = useRef(null);
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
      title: 'Profile Type',
      item: [{id: 1, icon: appIcons.profileIcon, title: 'Switch', route: ''}],
    },
    {
      id: 3,
      title: 'Support',
      item: [
        {
          id: 1,
          icon: appIcons.questionIcon,
          title: 'Dispute',
          route: routes.dispute,
        },
      ],
    },
    {
      id: 4,
      title: 'Actions',
      item: [
        {
          id: 1,
          icon: appIcons.worldIcon,
          title: 'Language',
          route: routes.language,
        },
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

  const onPress = () => {
    dispatch(userDataSave(false));
    navigation.reset({index: 0, routes: [{name: routes.auth}]});
  };

  return (
    <Global
      notification={true}
      profileHeader={true}
      navigation={navigation}
      ref={statusBar}>
      <View>
        {list?.map((item, index) => (
          <View key={item.id}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.dropView}>
              {item?.item?.map((data, index) => (
                <Pressable
                  onPress={() => {
                    data.title == 'Logout'
                      ? onPress()
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
                    {data.title == 'Language' && (
                      <Text style={styles.langText}>English</Text>
                    )}
                    <Image
                      source={appIcons.chevronRightIcon}
                      style={styles.rightIcon}
                    />
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        ))}
      </View>
    </Global>
  );
};

export default Profile;
