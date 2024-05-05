import React, {useRef, useState, useMemo, useCallback} from 'react';
import {View, Text, BackHandler, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useFocusEffect} from '@react-navigation/native';

import {
  AppHeader,
  DropDown,
  Global,
  SearchAndFilter,
  SliderComponent,
} from '../../../components';
import {styles} from './styles';
import {appIcons, heightPixel} from '../../../services';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../../components/button';

const SearchAndFilterScreen = ({navigation}) => {
  const statusBar = useRef(null);
  const filter = useRef(null);
  const snapPoints = useMemo(() => ['100%'], []);
  const [search, setSearch] = useState('');
  const [make, setMake] = useState('');
  const [dropOne, setDropOne] = useState(false);
  const [model, setModel] = useState('');
  const [dropTwo, setDropTwo] = useState(false);
  const [variant, setVariant] = useState('');
  const [dropThree, setDropThree] = useState(false);
  const [year, setYear] = useState('');
  const [dropFour, setDropFour] = useState(false);
  const [engineCapcity, setEngineCapcity] = useState('');
  const [dropFive, setDropFive] = useState(false);
  const [inspection, setInspection] = useState('');
  const [dropSix, setDropSix] = useState(false);
  const [exteriorColor, setExteriorColor] = useState('');
  const [dropSeven, setDropSeven] = useState(false);
  const [interiorColor, setInteriorColor] = useState('');
  const [dropEight, setDropEight] = useState(false);
  const [priceRange, setPriceRange] = useState([1000, 30880]);
  const [mileageRange, setMileageRange] = useState([1000, 40880]);

  var open = null;
  const list = [
    {
      id: 1,
      placeHolder: 'Select Make',
      title: 'Make',
      val: make,
      setVal: setMake,
      visible: dropOne,
      setVisible: setDropOne,
      list: ['2020', '2021', '2022'],
    },
    {
      id: 2,
      title: 'Model',
      placeHolder: 'Select Model',
      val: model,
      setVal: setModel,
      visible: dropTwo,
      setVisible: setDropTwo,
      list: ['2020', '2021', '2022'],
    },
    {
      id: 3,
      title: 'Variant',
      placeHolder: 'Select Variant',
      val: variant,
      setVal: setVariant,
      visible: dropThree,
      setVisible: setDropThree,
      list: ['2020', '2021', '2022'],
    },
    {
      id: 4,
      title: 'Year',
      placeHolder: 'Select Year',
      val: year,
      setVal: setYear,
      visible: dropFour,
      setVisible: setDropFour,
      list: ['2020', '2021', '2022'],
    },
    {
      id: 5,
      title: 'Engine Capacity',
      placeHolder: 'Capacity',
      val: engineCapcity,
      setVal: setEngineCapcity,
      visible: dropFive,
      setVisible: setDropFive,
      list: ['2020', '2021', '2022'],
    },
    {
      id: 6,
      title: 'Inspection',
      placeHolder: 'Select',
      val: inspection,
      setVal: setInspection,
      visible: dropSix,
      setVisible: setDropSix,
      list: ['2020', '2021', '2022'],
    },
    {
      id: 7,
      title: 'Exterior Color',
      placeHolder: 'Select Color',
      val: exteriorColor,
      setVal: setExteriorColor,
      visible: dropSeven,
      setVisible: setDropSeven,
      list: ['2020', '2021', '2022'],
    },
    {
      id: 8,
      title: 'Interior Color ',
      placeHolder: 'Select Color',
      val: interiorColor,
      setVal: setInteriorColor,
      visible: dropEight,
      setVisible: setDropEight,
      list: ['2020', '2021', '2022'],
    },
  ];

  useFocusEffect(
    React.useCallback(() => {
      statusBar.current?.darkContent();
      const onBackPress = () => {
        onPressBackButon();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const handlePresentModalPress = useCallback(() => {
    filter.current?.present();
    open = true;
  }, []);

  const handleDissmissModalPress = useCallback(() => {
    filter.current?.dismiss();
    open = null;
  }, []);

  const onPressBackButon = () => {
    if (open == true) {
      handleDissmissModalPress();
    } else {
      handleDissmissModalPress();
      setSearch('');
      navigation.goBack();
    }
  };

  const onPressSubmit = () => {
    console.log(search, '.../');
  };

  return (
    <Global
      title={'Search'}
      appHeader={true}
      navigation={navigation}
      globalStyle={{
        paddingTop: heightPixel(1),
      }}
      ref={statusBar}>
      <SearchAndFilter
        placeHolder={'Search...'}
        leftIcon={appIcons.search}
        rightIcon={appIcons.filter}
        value={search}
        setValue={setSearch}
        disableLeft={true}
        onSubmitEditing={() => onPressSubmit()}
        onPressRight={() => handlePresentModalPress()}
      />
      <BottomSheetModal
        enabledGestureInteraction={false}
        enablePanDownToClose={false}
        ref={filter}
        backgroundStyle={[styles.bottomSheetStyle]}
        handleIndicatorStyle={styles.indicator}
        handleStyle={styles.bottomSheet}
        index={0}
        snapPoints={snapPoints}>
        <View
          style={{
            flex: 1,
            paddingTop: StatusBar.currentHeight,
          }}>
          <AppHeader
            route={() => handleDissmissModalPress()}
            title={'Filter'}
            navigation={navigation}
          />
          <ScrollView
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.scroll]}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginBottom: heightPixel(10),
              }}>
              {list.map((item, index) => (
                <View
                  key={item.id}
                  style={{width: '45%', marginBottom: heightPixel(8)}}>
                  <DropDown
                    placeholder={item.placeHolder}
                    title={item.title}
                    val={item.val}
                    setVal={item.setVal}
                    visible={item.visible}
                    setVisible={item.setVisible}
                    list={item.list}
                  />
                </View>
              ))}
            </View>
            <SliderComponent
              val={priceRange}
              setVal={setPriceRange}
              type={'RM'}
              range={20000}
              title={'Price Range'}
            />
            <SliderComponent
              val={mileageRange}
              setVal={setMileageRange}
              type={'RM'}
              range={30000}
              title={'Mileage Range'}
            />
            <View style={{marginTop: heightPixel(26)}}>
              <Button
                onPress={() => handleDissmissModalPress()}
                children={'Apply'}
              />
            </View>
          </ScrollView>
        </View>
      </BottomSheetModal>
    </Global>
  );
};

export default SearchAndFilterScreen;
