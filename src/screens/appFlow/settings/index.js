import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {useDispatch} from 'react-redux';

import {Global} from '../../../components';
import {styles} from './styles';
import {
  appIcons,
  colors,
  heightPixel,
  routes,
  widthPixel,
} from '../../../services';

const Settings = ({navigation}) => {
  const statusBar = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [list, setlist] = useState([
    {
      id: 1,
      title: 'App Notifications',
      route: '',
    },
    {
      id: 2,
      title: 'Privacy',
      route: routes.conditions,
    },
    {
      id: 3,
      title: 'Terms and Condition',
      route: routes.conditions,
    },
    {
      id: 4,
      title: 'Delete Account',
      route: routes.deleteAccount,
    },
  ]);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  return (
    <Global
      title={'Settings'}
      navigation={navigation}
      appHeader={true}
      globalStyle={{paddingTop: heightPixel(1)}}
      ref={statusBar}>
      <View>
        {list.map((item, index) => (
          <Pressable
            onPress={() =>
              navigation.navigate(item?.route, {
                title: item?.id == 2 ? 'Privacy Policy' : 'Term & Conditions',
              })
            }
            disabled={item?.id == 1 ? true : false}
            key={index}
            style={styles.drop}>
            <View>
              <Text
                style={[
                  styles.title,
                  {
                    color:
                      item?.id == 4
                        ? colors?.deleteColor
                        : colors?.placeHolderColor,
                  },
                ]}>
                {item?.title}
              </Text>
            </View>
            <View>
              {item?.id == 1 ? (
                <ToggleSwitch
                  isOn={toggle}
                  onColor={colors.theme}
                  offColor={colors?.placeHolderColor}
                  size="medium"
                  onToggle={isOn => setToggle(isOn)}
                />
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
    </Global>
  );
};

export default Settings;
