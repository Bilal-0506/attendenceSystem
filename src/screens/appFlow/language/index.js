import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';

import {Global, UserUsage} from '../../../components';
import {styles} from './styles';
import {appIcons, heightPixel} from '../../../services';

const Language = ({navigation}) => {
  const statusBar = useRef(null);
  const [selected, setSelected] = useState('');
  const handlePress = title => {
    setSelected(title);
  };

  const onHandleContinue = () => {
    if (selected !== '') {
      navigation.goBack();
    }
  };

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  return (
    <Global
      title={'Language'}
      navigation={navigation}
      appHeader={true}
      globalStyle={{paddingTop: heightPixel(1)}}
      ref={statusBar}>
      <View>
        <UserUsage
          flag={appIcons.flagOne}
          onPress={() => handlePress('English')}
          title={'English'}
          selected={selected === 'English'}
          icon={true}
        />
        <UserUsage
          flag={appIcons.flagTwo}
          onPress={() => handlePress('French')}
          title={'French'}
          selected={selected === 'French'}
          icon={true}
        />
      </View>
    </Global>
  );
};

export default Language;
