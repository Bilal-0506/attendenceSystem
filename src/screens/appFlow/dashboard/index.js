import React, {useRef, useEffect} from 'react';
import {View, Text, Pressable, Image, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {Global} from '../../../components';
import {styles} from './styles';
import {
  appIcons,
  colors,
  heightPixel,
  routes,
  widthPixel,
} from '../../../services';
import {useSelector} from 'react-redux';

const Dashboard = ({navigation}) => {
  const statusBar = useRef(null);
  const user = useSelector(state => state.user.userData);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const attendenceData = [
    {
      id: 1,
      heading: 'Check In',
      time: '07:01 AM',
      status: 'On Time',
      image: appIcons.checkIna,
    },
    {
      id: 2,
      heading: 'Check Out',
      time: '07:01 AM',
      status: 'Go Home',
      image: appIcons.checkIna,
    },
    {
      id: 3,
      heading: 'Break Time',
      time: '07:01 AM',
      status: 'AVG Time',
      image: appIcons.checkIna,
    },
    {
      id: 4,
      heading: 'Total Days',
      time: '07:01 AM',
      status: 'Working Days',
      image: appIcons.checkIna,
    },
  ];

  const requestData = [
    {id: 1, heading: 'Sick Leave', time: '07:01 AM', status: 'Pending'},
    {
      id: 2,
      heading: 'Casual Leave',
      time: '07:01 AM',
      status: 'Rejected',
    },
    {id: 3, heading: 'Medical Leave', time: '07:01 AM', status: 'Approved'},
    {id: 4, heading: 'Medical Leave', time: '07:01 AM', status: 'Approved'},
    {id: 5, heading: 'Medical Leave', time: '07:01 AM', status: 'Approved'},
    {id: 6, heading: 'Medical Leave', time: '07:01 AM', status: 'Approved'},
  ];

  const attendence = [
    {id: 1, heading: 'Present', date: new Date().toDateString()},
    {id: 3, heading: 'Leave', date: new Date().toDateString()},
    {id: 4, heading: 'Present', date: new Date().toDateString()},
    {id: 5, heading: 'Present', date: new Date().toDateString()},
    {id: 6, heading: 'Leave', date: new Date().toDateString()},
  ];

  const Item = ({title, time, status, image, index}) => (
    <View key={index} style={styles.boxConatiner}>
      <Image
        style={{...styles.icon, marginBottom: heightPixel(12)}}
        source={image}
      />
      <Text style={{...styles.title, marginBottom: heightPixel(6)}}>
        {title}
      </Text>
      <Text
        style={{
          ...styles.subHeading,
          marginBottom: heightPixel(4),
          color: colors.theme,
        }}>
        {time}
      </Text>
      <Text style={styles.subTitleOne}>{status}</Text>
    </View>
  );

  const ItemRequest = ({title, status, time, date, index}) => (
    <View key={index} style={styles.leaveView}>
      <View style={styles.rowAlign}>
        <Text style={{...styles.title, marginRight: widthPixel(8)}}>
          {index + 1}.
        </Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      {date && <Text style={[styles.subTitle]}>{date}</Text>}
      {status && <Text style={[styles.subTitle]}>{status}</Text>}
    </View>
  );

  return (
    <Global
      paddingHorizontal={true}
      navigation={navigation}
      ref={statusBar}
      globalStyle={styles.paddingTop}>
      <View style={{...styles.row, marginBottom: heightPixel(20)}}>
        <View style={styles.rowAlign}>
          <Image source={{uri: user?.image}} style={styles.profile} />
          <View>
            <View style={[styles.row, styles.mb5]}>
              <Text style={styles.title}>{user?.firstName}</Text>
              <Image source={appIcons.handIcon} style={styles.handIcon} />
            </View>
            <Text style={styles.subTitle}>{user?.email}</Text>
          </View>
        </View>
        <Pressable onPress={() => navigation.navigate(routes.notification)}>
          <Image style={styles.icon} source={appIcons.notificationIcon} />
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={{flex: 1.3}}>
            <FlatList
              columnWrapperStyle={{
                justifyContent: 'space-between',
              }}
              scrollEnabled={false}
              data={attendenceData}
              keyExtractor={item => item.id}
              numColumns={2}
              renderItem={({item, index}) => (
                <Item
                  title={item.heading}
                  time={item.time}
                  status={item.status}
                  image={item.image}
                  index={index}
                />
              )}
            />
          </View>
          <View style={{flex: 1, marginBottom: heightPixel(10)}}>
            <View
              style={{
                ...styles.row,
                marginBottom: heightPixel(18),
                marginTop: heightPixel(4),
              }}>
              <Text style={styles.heading}>Attendence</Text>
            </View>
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              data={attendence}
              scrollEnabled={false}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <ItemRequest
                  title={item.heading}
                  index={index}
                  date={item.date}
                />
              )}
            />
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                ...styles.row,
                marginBottom: heightPixel(18),
                marginTop: heightPixel(4),
              }}>
              <Text style={styles.heading}>Leaves</Text>
              <Text
                onPress={() => navigation.navigate(routes.leaveRequest)}
                style={{
                  ...styles.subHeading,
                  color: colors.theme,
                  textDecorationLine: 'underline',
                  textDecorationColor: colors.theme,
                }}>
                Request Leave
              </Text>
            </View>
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              data={requestData}
              scrollEnabled={false}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <ItemRequest
                  title={item.heading}
                  index={index}
                  status={item.status}
                  time={item.time}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </Global>
  );
};

export default Dashboard;
