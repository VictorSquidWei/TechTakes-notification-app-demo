import { Stack } from 'expo-router';
import { colors } from '../lib/theme';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function RootLayout(){
  return (
    <View style={{ flex:1, backgroundColor: colors.bg }}>
      <StatusBar style="light" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: colors.bg },
        headerTintColor: colors.text,
        contentStyle: { backgroundColor: colors.bg }
      }}>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack>
    </View>
  )
}
