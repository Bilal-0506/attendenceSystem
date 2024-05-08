import React from 'react';
import {LogBox, View, StatusBar} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

import {MainNavigator} from './src/services/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './src/redux/store';
import {colors} from './src/services';

const App = ({user}) => {
  let persistor = persistStore(store);

  // useEffect(() => {
  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(remoteMessage, '../');
  //     notificationHandler.onNotification(remoteMessage);
  //   });
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         notificationHandler.onNotification(remoteMessage);
  //       }
  //     });
  //   messaging().onMessage(async remoteMessage => {
  //     notificationHandler.onNotification(remoteMessage);
  //   });
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     notificationHandler.onNotification(remoteMessage);
  //   });
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
            <View style={{flex: 1}}>
              <StatusBar
                backgroundColor={colors.dashboardBgColor}
                barStyle={'dark-content'}
              />
              <MainNavigator />
            </View>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
