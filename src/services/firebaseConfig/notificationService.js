import React, {useEffect, useState} from 'react';
import PushNotification, {Importance} from 'react-native-push-notification';
import notificationHandler from './notificationHandler';

const NotificationService = ({onRegister, onNotification}) => {
  const [lastId, setLastId] = useState(0);
  const [lastChannelCounter, setLastChannelCounter] = useState(0);

  useEffect(() => {
    createDefaultChannels();
    notificationHandler.attachRegister(onRegister);
    notificationHandler.attachNotification(onNotification);
    clearBadgeNumber();
  }, []);

  const clearBadgeNumber = () => {
    PushNotification.getApplicationIconBadgeNumber(number => {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0);
      }
    });
  };

  const createDefaultChannels = () => {
    createChannel(
      {
        channelId: 'default-channel-id',
        channelName: `Default channel`,
        channelDescription: 'A default channel',
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
      },
      'default-channel-id',
    );
    createChannel(
      {
        channelId: 'sound-channel-id',
        channelName: `Sound channel`,
        channelDescription: 'A sound channel',
        soundName: 'sample.mp3',
        importance: Importance.HIGH,
        vibrate: true,
      },
      'sound-channel-id',
    );
  };

  const createChannel = (channelConfig, channelId) => {
    PushNotification.createChannel(channelConfig, created =>
      console.log(`createChannel '${channelId}' returned '${created}'`),
    );
  };

  const createOrUpdateChannel = () => {
    setLastChannelCounter(lastChannelCounter + 1);
    createChannel(
      {
        channelId: 'custom-channel-id',
        channelName: `Custom channel - Counter: ${lastChannelCounter + 1}`,
        channelDescription: `A custom channel to categorise your custom notifications. Updated at: ${Date.now()}`,
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
      },
      'custom-channel-id',
    );
  };

  const popInitialNotification = () => {
    PushNotification.popInitialNotification(notification =>
      console.log('InitialNotication:', notification),
    );
  };

  const localNotif = soundName => {
    setLastId(lastId + 1);
    PushNotification.localNotification({
      // Notification properties
    });
  };

  const scheduleNotif = soundName => {
    setLastId(lastId + 1);
    PushNotification.localNotificationSchedule({
      // Scheduled notification properties
    });
  };

  const checkPermission = cbk => {
    return PushNotification.checkPermissions(cbk);
  };

  const requestPermissions = () => {
    return PushNotification.requestPermissions();
  };

  const cancelNotif = () => {
    PushNotification.cancelLocalNotification(lastId);
  };

  const cancelAll = () => {
    PushNotification.cancelAllLocalNotifications();
  };

  const abandonPermissions = () => {
    PushNotification.abandonPermissions();
  };

  const getScheduledLocalNotifications = callback => {
    PushNotification.getScheduledLocalNotifications(callback);
  };

  const getDeliveredNotifications = callback => {
    PushNotification.getDeliveredNotifications(callback);
  };

  return null; // Replace with your JSX component
};

export default NotificationService;
