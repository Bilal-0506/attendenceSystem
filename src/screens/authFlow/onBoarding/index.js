import React, {useRef, useEffect, useState} from 'react';
import {Image, View, Text, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';

import {
  appIcons,
  colors,
  heightPixel,
  routes,
  widthPixel,
} from '../../../services';
import {styles} from './styles';
import {Buttons, Global} from '../../../components';
import {userSurveySave} from '../../../redux/Slices/userDataSlice';

const OnBoarding = ({navigation}) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  var flatlistRef = useRef();
  const [indexActive, setIndexActive] = useState(0);
  const [wizards, setWizards] = useState([
    {id: 1, image: appIcons.onBoardingOneIcon},
    {id: 2, image: appIcons.onBoardingTwoIcon},
    {id: 3, image: appIcons.onBoardingThreeIcon},
  ]);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const scrollToIndex = () => {
    let go = indexActive + 1;
    if (wizards.length > go) {
      flatlistRef.current.scrollToIndex({animated: true, index: go});
      setIndexActive(go);
    } else {
      setIndexActive(wizards.length - 1);
      dispatch(userSurveySave(true));
      navigation.navigate(routes.login);
    }
  };

  const OnBoardingView = ({item}) => {
    return (
      <View key={item.id} style={styles.onBoardingView}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}
        />
      </View>
    );
  };

  return (
    <Global ref={statusBar} globalStyle={styles.wrapper}>
      <FlatList
        contentContainerStyle={styles.flatListStyle}
        onMomentumScrollEnd={event => {
          const index = Math.floor(
            Math.floor(event.nativeEvent.contentOffset.x) /
              Math.floor(event.nativeEvent.layoutMeasurement.width),
          );
          setIndexActive(index);
        }}
        scrollEnabled={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={flatlistRef}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        data={wizards}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <OnBoardingView key={index} item={item} index={index} />
        )}
      />
      <View style={styles.secContainer}>
        <View style={styles.innerContainer}>
          <View>
            <View style={styles.dotView}>
              {wizards.map((item, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    {
                      width:
                        indexActive == index ? widthPixel(50) : widthPixel(18),
                      backgroundColor:
                        indexActive == index ? '#3085FE' : colors.inActiveColor,
                      marginRight: index <= 1 ? widthPixel(7) : widthPixel(0),
                    },
                  ]}
                />
              ))}
            </View>
            <View>
              <Text style={styles.heading}>
                Easy way to confirm your attendence
              </Text>
              <Text style={styles.des}>
                It is a lang established fact that a reader will be distracted
                by the readable content.
              </Text>
            </View>
          </View>
          <Buttons
            onPress={() => scrollToIndex()}
            marginBottom={heightPixel(1)}
            children={'Next'}
          />
        </View>
      </View>
    </Global>
  );
};

export default OnBoarding;
