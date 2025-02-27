import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Pressable, Image, FlatList} from 'react-native';

import {appIcons, heightPixel} from '../../../services';
import {styles} from './styles';
import {convertDateTime} from '../../../services/helpingMethods';
import {Global} from '../../../components';
import {ScrollView} from 'react-native-gesture-handler';

const Notification = ({navigation}) => {
  const statusBar = useRef(null);
  const [notifData, setNotifData] = useState([
    {
      id: 1,
      title: 'Pending Task',
      createdAt: new Date(),
      des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      new: true,
    },
    {
      id: 2,
      title: 'Notification received',
      createdAt: new Date(),
      des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      new: false,
    },
    {
      id: 3,
      title: 'Notification received',
      createdAt: new Date(),
      des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      new: false,
    },
    {
      id: 4,
      title: 'Notification received',
      createdAt: new Date(),
      des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      new: false,
    },
    {
      id: 5,
      title: 'Notification received',
      createdAt: new Date(),
      des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      new: false,
    },
    {
      id: 6,
      title: 'Notification received',
      createdAt: new Date(),
      des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      new: false,
    },
    {
      id: 7,
      title: 'Notification received',
      createdAt: new Date(),
      des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      new: false,
    },
    {
      id: 8,
      title: 'Notification received',
      createdAt: new Date(),
      des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      new: false,
    },
  ]);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const ItemRender = ({item, index}) => {
    return (
      <View key={item.id} style={styles.notifiView}>
        <View style={styles.notiInnerOne}>
          <View style={styles.notiInnerTwo}>
            <Image
              style={styles.iconStyle}
              source={appIcons.notificationIcon}
            />
            <View>
              <Text style={styles.heading}>{item?.title}</Text>
              <Text style={styles.time}>
                {convertDateTime(item?.createdAt)}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.des}>{item.des}</Text>
      </View>
    );
  };

  return (
    <Global
      paddingHorizontal={true}
      isBack={true}
      header={true}
      headerTitle={'Notifications'}
      navigation={navigation}
      ref={statusBar}
      globalStyle={{
        paddingTop: heightPixel(1),
      }}>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          {notifData?.map((item, index) => (
            <ItemRender index={index} item={item} />
          ))}
        </ScrollView>
      </View>
    </Global>
  );
};

export default Notification;
