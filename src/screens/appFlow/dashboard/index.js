import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {DashboardHeader, Global, ListComponent} from '../../../components';
import {styles} from './styles';
import {appIcons, heightPixel, hp, routes} from '../../../services';

const Dashboard = ({navigation}) => {
  const statusBar = useRef(null);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const attendenceData = [
    {
      heading: 'Check In',
      time: '07:01 AM',
      status: 'On Time',
      image: appIcons.checkIna,
    },
    {
      heading: 'Check Out',
      time: '07:01 AM',
      status: 'Go Home',
      image: appIcons.checkIna,
    },
    {
      heading: 'Break Time',
      time: '07:01 AM',
      status: 'AVG Time',
      image: appIcons.checkIna,
    },
    {
      heading: 'Total Days',
      time: '07:01 AM',
      status: 'Working Days',
      image: appIcons.checkIna,
    },
  ];
  const requestData = [
    {
      heading: 'Sick Leave',
      time: '07:01 AM',
      status: 'Pending',
    },
    {
      heading: 'Casual Leave',
      time: '07:01 AM',
      status: 'Rejected',
      image: appIcons.checkIna,
    },
    {
      heading: 'Medical Leave',
      time: '07:01 AM',
      status: 'Approved',
      image: appIcons.checkIna,
    },
    {
      heading: 'Medical Leave',
      time: '07:01 AM',
      status: 'Approved',
      image: appIcons.checkIna,
    },
  ];

  const Item = ({title, time, status, image}) => (
    <View style={styles.item}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{height: hp(3), width: hp(3), resizeMode: 'center'}}
          source={image}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
  const ItemRequest = ({title, time, status, image, index}) => (
    <View style={styles.itemRequest}>
      <Text style={styles.title}>{index + 1}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%',
        }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.status1]}>{status}</Text>
      </View>
    </View>
  );

  return (
    <Global paddingHorizontal={true} navigation={navigation} ref={statusBar}>
      <DashboardHeader name={'Hamza'} designation={'UIUX Developer'} />
      <View style={{flex: 1}}>
        <View style={styles.attendenceContainer}>
          <Text style={styles.attendenceHeadingText}>Total Attendence</Text>
          <View style={{flex: 1}}>
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              data={attendenceData}
              keyExtractor={item => item.id}
              numColumns={2}
              renderItem={({item}) => (
                <Item
                  title={item.heading}
                  time={item.time}
                  status={item.status}
                  image={item.image}
                />
              )}
            />
          </View>
        </View>
        {/* <View style={{height: hp(3)}} /> */}
        <View style={{marginTop: hp(1)}}>
          <View style={styles.requestHeader}>
            <Text style={styles.requestHeading}>Your Requests</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.leaveRequest)}
              style={styles.viewButton}>
              <Text style={styles.viewText}>Add Request</Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={requestData}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <ItemRequest
                  title={item.heading}
                  index={index}
                  // time={item.time}
                  status={item.status}
                  // image={item.image}
                />
              )}
            />
          </View>
        </View>

        {/* <View style={styles.viewOne}>
          <Text style={styles.heading}>Main Cars Listing</Text>
          <Pressable>
            <Text style={styles.viewText}>View All</Text>
          </Pressable>
        </View> */}
        {/* <ListComponent
          route={routes?.detail}
          list={data.slice(0, 5)}
          navigation={navigation}
          menu={false}
        /> */}
      </View>
    </Global>
  );
};

export default Dashboard;
