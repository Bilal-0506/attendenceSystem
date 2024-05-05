// import messaging from '@react-native-firebase/messaging';

// const requestUserPermission = settoken => {
//   try {
//     messaging()
//       .hasPermission()
//       .then(async enabled => {
//         if (enabled) {
//           const fcmToken = await messaging().getToken();
//           if (fcmToken) {
//             settoken(fcmToken);
//           }
//           // user has permissions
//         } else {
//           messaging()
//             .requestPermission()
//             .then(async enabled => {
//               if (enabled) {
//                 const fcmToken = await messaging().getToken();
//                 if (fcmToken) {
//                   settoken(fcmToken);
//                 }
//                 // user has permissions
//               }
//             })
//             .catch(error => {
//               alert('Error', error);
//               // User has rejected permissions
//             });
//         }
//       });
//   } catch (error) {
//     console.log('requestUserPermission==> . ', error);
//   }
// };

// export { requestUserPermission };
