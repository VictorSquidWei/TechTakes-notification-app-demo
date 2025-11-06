import { Stack } from 'expo-router';
import { colors } from '../../lib/theme';
export default function AppStack() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.bg },
      }}
    >
      <Stack.Screen name="dashboard" />
    </Stack>
  );
}
