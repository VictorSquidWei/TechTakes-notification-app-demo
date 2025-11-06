import { Platform } from 'react-native';

type Listener = { remove: () => void };

// On web we provide a harmless mock so the app runs.
// On native we use the real expo-notifications module.
let Notifications: any;

if (Platform.OS === 'web') {
  Notifications = {
    getPermissionsAsync: async () => ({ status: 'granted' }),
    requestPermissionsAsync: async () => ({ status: 'granted' }),
    scheduleNotificationAsync: async (opts: any) => {
      console.log('[WEB MOCK] scheduleNotificationAsync', opts);
      alert('New Predictions Available (demo)'); // simple demo behavior on web
    },
    addNotificationResponseReceivedListener: (_cb: any): Listener => ({ remove: () => {} }),
    setNotificationHandler: (_: any) => {},
  };
} else {
  Notifications = require('expo-notifications');
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

export async function registerForPushPermissionsAsync() {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    throw new Error('Permission for notifications not granted.');
  }
  return true;
}

export async function scheduleDemoNewPicksNotification() {
  return Notifications.scheduleNotificationAsync({
    content: {
      title: 'New Predictions Available',
      body: "Tap to view today's picks (Ultimate)",
      data: { deepLink: '/(app)/dashboard' },
    },
    trigger: null, // fire now
  });
}

export function addNotificationResponseListener(cb: (resp: any) => void): Listener {
  return Notifications.addNotificationResponseReceivedListener(cb);
}
