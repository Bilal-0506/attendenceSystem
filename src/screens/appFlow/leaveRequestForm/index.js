import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {heightPixel} from '../../../services';
import {DropDown, Global, MyInput} from '../../../components';
import {styles} from './styles';
import Button from '../../../components/button';
import {isSignupValid} from '../../../services/validations';
import {ScrollView} from 'react-native-gesture-handler';

const AddRequestScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const statusBar = useRef(null);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [type, setType] = useState('');
  const [typesOfLeave, settypesOfLeave] = useState([
    'Casual',
    'Aunal',
    'Medical',
  ]);
  const [display, setDisplay] = useState(false);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const onPressSignup = () => {
    if (isSignupValid(email, password, confirmPassword)) {
      setIsLoading(true);
    }
  };

  return (
    <Global
      paddingHorizontal={true}
      navigation={navigation}
      header={true}
      isBack={true}
      headerTitle={'Leave Request'}
      ref={statusBar}>
      <View style={{flex: 1, marginBottom: heightPixel(20)}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <MyInput
            value={date}
            placeHolder={'Enter your date'}
            setValue={setDate}
            keyboardType={'email-address'}
            disable={!isLoading}
            title={'Date'}
            marginTop={heightPixel(6)}
          />
          <DropDown
            title={'Type of Leave'}
            val={type}
            setVal={setType}
            list={typesOfLeave}
            placeholder={'Select the type of leave'}
            visible={display}
            setVisible={setDisplay}
          />
          <MyInput
            value={description}
            placeHolder={'Enter your reason'}
            setValue={setDescription}
            keyboardType={'email-address'}
            disable={!isLoading}
            title={'Reason of Leave'}
          />
        </ScrollView>
      </View>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        children={'Request'}
      />
    </Global>
  );
};

export default AddRequestScreen;
