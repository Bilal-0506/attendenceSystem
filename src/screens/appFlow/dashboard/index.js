import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';

import {Global, ListComponent} from '../../../components';
import {styles} from './styles';
import {heightPixel, routes} from '../../../services';

const Dashboard = ({navigation}) => {
  const statusBar = useRef(null);
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 2,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 3,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 4,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 5,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 6,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 7,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 8,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 9,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 10,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
  ]);
  const [dataOne, setDataOne] = useState([
    {
      id: 1,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 2,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 3,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 4,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 5,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 6,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 7,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 8,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 9,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
    {
      id: 10,
      title: 'Ferrari 1.6 CVT 2002',
      subTitle: 'RM 700,500',
      cal: '2002',
      meter: '9,000 KM',
      location: 'Kuala Lumpur, Malaysia',
    },
  ]);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  return (
    <Global
      search={true}
      dashboardHeader={true}
      navigation={navigation}
      ref={statusBar}>
      <View>
        <View style={styles.viewOne}>
          <Text style={styles.heading}>Main Cars Listing</Text>
          <Pressable
            onPress={() =>
              navigation.navigate(routes.list, {
                title: 'Main Cars Listing',
                data: data,
              })
            }>
            <Text style={styles.viewText}>View All</Text>
          </Pressable>
        </View>
        <ListComponent
          route={routes?.detail}
          list={data.slice(0, 5)}
          navigation={navigation}
          menu={false}
        />
        <View style={[styles.viewOne, {marginTop: heightPixel(20)}]}>
          <Text style={styles.heading}>Wholesale's Price Cars</Text>
          <Pressable
            onPress={() =>
              navigation.navigate(routes.list, {
                title: 'Wholesale Price Cars',
                data: dataOne,
              })
            }>
            <Text style={styles.viewText}>View All</Text>
          </Pressable>
        </View>
        <ListComponent
          route={routes?.detail}
          list={dataOne.slice(0, 5)}
          navigation={navigation}
          menu={false}
        />
      </View>
    </Global>
  );
};

export default Dashboard;
