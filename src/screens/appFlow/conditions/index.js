import React, {useRef, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {Global} from '../../../components';
import {styles} from './styles';
import {heightPixel} from '../../../services';
import {ScrollView} from 'react-native-gesture-handler';

const Conditions = ({navigation, route}) => {
  const statusBar = useRef(null);

  useEffect(() => {
    statusBar.current?.darkContent();
    return () => {};
  }, []);

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <Global
      paddingHorizontal={true}
      header={true}
      isBack={true}
      headerTitle={route.params?.title}
      navigation={navigation}
      appHeader={true}
      globalStyle={{
        justifyContent: 'space-between',
      }}
      ref={statusBar}>
      <View style={{flex: 1, marginBottom: heightPixel(20)}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Text style={styles.title}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{'\n'}
            {'\n'}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </ScrollView>
      </View>
    </Global>
  );
};

export default Conditions;
