import React, {
  useContext,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
  Pressable,
  Image,
  Linking,
  Share,
  Text,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
  wp,
} from '../../services';
import themeContext from '../../services/config/themeContext';
import Button from '../button';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const STYLES = ['dark-content', 'light-content'];

const GlobalWithOutScroll = forwardRef(
  (
    {
      children,
      globalStyle,
      navigation,
      route,
      imageList,
      button,
      whatsapp,
      buttonTitle,
      wholeSale,
      disable,
    },
    ref,
  ) => {
    const theme = useContext(themeContext);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    var flatlistRef = useRef();
    const [indexActive, setIndexActive] = useState(0);
    const [like, setLike] = useState(false);

    useImperativeHandle(ref, () => ({
      lightContent() {
        changeStatusBarStyle(1);
      },
      darkContent() {
        changeStatusBarStyle(0);
      },
    }));

    const changeStatusBarStyle = val => {
      setStatusBarStyle(STYLES[val]);
    };

    const HeaderView = ({item, index}) => {
      return (
        <ImageBackground
          key={index}
          source={item.image}
          resizeMode="cover"
          style={styles.bgStyle}></ImageBackground>
      );
    };

    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        Alert.alert(error.message);
      }
    };

    return (
      <View style={styles.main}>
        <StatusBar
          animated={true}
          backgroundColor={'transparent'}
          barStyle={statusBarStyle}
          translucent
        />
        <View style={styles.listHeader}>
          <FlatList
            nestedScrollEnabled={true}
            onMomentumScrollEnd={event => {
              const index = Math.floor(
                Math.floor(event.nativeEvent.contentOffset.x) /
                  Math.floor(event.nativeEvent.layoutMeasurement.width),
              );
              setIndexActive(index);
            }}
            scrollEnabled={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            ref={flatlistRef}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            data={imageList}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <HeaderView item={item} index={index} />
            )}
          />
          <View style={styles.header}>
            <View
              style={[styles.rowStyle, {paddingHorizontal: widthPixel(20)}]}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.iconView}>
                <Image
                  source={appIcons.chevronLeftWhite}
                  style={styles.iconStyle}
                />
              </Pressable>
              <View style={styles.rowStyle}>
                <Pressable
                  onPress={() => setLike(!like)}
                  style={[
                    styles.iconView,
                    {
                      marginRight: widthPixel(20),
                    },
                  ]}>
                  <Image
                    source={like ? appIcons.heartIcon : appIcons.filledHeart}
                    style={[styles.iconStyle]}
                  />
                </Pressable>
                <Pressable onPress={() => onShare()} style={styles.iconView}>
                  <Image source={appIcons.shareIcon} style={styles.iconStyle} />
                </Pressable>
              </View>
            </View>
            <View style={styles.indicatorView}>
              {imageList?.map((data, index) => (
                <View
                  style={{
                    height: heightPixel(3),
                    width:
                      index == indexActive ? widthPixel(28) : widthPixel(14),
                    borderRadius: 3,
                    backgroundColor:
                      index == indexActive ? colors.theme : colors.inputColor,
                    marginRight: widthPixel(6),
                  }}></View>
              ))}
            </View>
          </View>
          {wholeSale && (
            <View style={styles.wholeSaleView}>
              <View style={styles.wholeSaleTitleView}>
                <Text style={styles.wholeSaleTitle}>Wholesale Car</Text>
              </View>
              <View style={styles.wholeSaleTitleViewSec}>
                <Text style={styles.wholeSaleTitle}>RM 680,500</Text>
              </View>
            </View>
          )}
        </View>
        <View style={[styles.wrapper]}>
          <ScrollView
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.scroll, {...globalStyle}]}>
            {children}
          </ScrollView>
        </View>
        {button && (
          <View style={styles.buttonView}>
            <Button disable={disable} onPress={button} children={buttonTitle} />
          </View>
        )}
        {whatsapp && (
          <View style={styles.whatsappView}>
            <Pressable
              onPress={() =>
                Linking.openURL(
                  'whatsapp://send?text=hello&phone=xxxxxxxxxxxxx',
                )
              }>
              <Image
                style={styles.whatsappIcon}
                source={appIcons.whatsappIcon}
              />
            </Pressable>
          </View>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  listHeader: {
    height: heightPixel(310),
    width: '100%',
  },
  header: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    paddingTop: StatusBar.currentHeight + heightPixel(24),
    justifyContent: 'space-between',
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconView: {
    height: heightPixel(24),
    width: widthPixel(24),
  },
  iconStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicatorView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
  bgStyle: {
    height: '100%',
    width: wp(100),
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flexGrow: 1,
    paddingVertical: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
  whatsappView: {
    position: 'absolute',
    bottom: heightPixel(80),
    right: widthPixel(16),
  },
  whatsappIcon: {
    height: heightPixel(48),
    width: widthPixel(48),
    resizeMode: 'contain',
  },
  buttonView: {
    paddingTop: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
  wholeSaleView: {
    position: 'absolute',
    bottom: '20%',
    right: 0,
    left: 0,
    alignItems: 'flex-end',
  },
  wholeSaleTitleView: {
    backgroundColor: 'red',
    paddingVertical: heightPixel(7),
    paddingHorizontal: widthPixel(20),
    borderTopLeftRadius: widthPixel(12),
    borderBottomLeftRadius: widthPixel(12),
  },
  wholeSaleTitleViewSec: {
    backgroundColor: 'red',
    paddingVertical: heightPixel(7),
    paddingHorizontal: widthPixel(20),
    borderBottomLeftRadius: widthPixel(12),
  },
  wholeSaleTitle: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.25),
    color: colors.white,
    textAlign: 'center',
  },
});

export default GlobalWithOutScroll;
