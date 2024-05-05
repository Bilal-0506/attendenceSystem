import PushNotification from 'react-native-push-notification';

const onNotification = notification => {
  if (typeof notificationHandler._onNotification === 'function') {
    notificationHandler._onNotification(notification);
  }
};

const onRegister = token => {
  if (typeof notificationHandler._onRegister === 'function') {
    notificationHandler._onRegister(token);
  }
};

const onAction = notification => {
  console.log('Notification action received:');
  console.log(notification.action);
  console.log(notification);
  if (notification.action === 'Yes') {
    PushNotification.invokeApp(notification);
  }
};

// Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
const onRegistrationError = err => {
  console.log(err);
};

const attachRegister = handler => {
  notificationHandler._onRegister = handler;
};

const attachNotification = handler => {
  notificationHandler._onNotification = handler;
};

const notificationHandler = {
  _onNotification: null,
  _onRegister: null,
  onNotification,
  onRegister,
  onAction,
  onRegistrationError,
  attachRegister,
  attachNotification,
};

PushNotification.configure({
  onRegister,
  onNotification,
  onAction,
  onRegistrationError,
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

export default notificationHandler;
