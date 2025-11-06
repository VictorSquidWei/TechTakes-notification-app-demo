import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { colors, radius } from '../../lib/theme';
import { registerForPushPermissionsAsync, addNotificationResponseListener } from '../../lib/notifications';

const PICKS_BASE_URL = 'https://techtakes.ai/picks';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    registerForPushPermissionsAsync().catch(() => null);

    const sub = addNotificationResponseListener((response: any) => {
      const deepLink = response?.notification?.request?.content?.data?.deepLink;
      if (deepLink) router.push(String(deepLink));
    });

    return () => sub?.remove?.();
  }, []);

  const handleVisitSite = (id: string) => {
    const url = `${PICKS_BASE_URL}/${id}`;
    Linking.openURL(url).catch(() => Linking.openURL(PICKS_BASE_URL));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoBlock}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>TT</Text>
        </View>
        <Text style={styles.brandName}>Tech Takes</Text>
        <Text style={styles.tagline}>Invest in Sports.</Text>
      </View>
      <View style={styles.messageCard}>
        <Text style={styles.messageTitle}>IMPORTANT</Text>
        <Text style={styles.messageBody}>Make sure app notifications are on!</Text>
      </View>
      <Text style={styles.footnote}>All platform features only available at www.techtakes.ai.</Text>
      <TouchableOpacity style={styles.visitButton} onPress={() => handleVisitSite('latest')}>
        <Text style={styles.visitButtonText}>Visit Website</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 32,
    paddingVertical: 42,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 34,
  },
  logoBlock: { alignItems: 'center', gap: 14 },
  logoCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.panel,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 32,
    shadowOffset: { width: 0, height: 18 },
  },
  logoText: { color: colors.text, fontSize: 54, fontWeight: '800', letterSpacing: 9 },
  brandName: { color: colors.text, fontSize: 36, fontWeight: '700' },
  tagline: { color: colors.subtext, fontSize: 19, textAlign: 'center', maxWidth: 340 },
  messageCard: {
    backgroundColor: colors.panel,
    borderRadius: radius.xl,
    paddingVertical: 30,
    paddingHorizontal: 36,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 14,
    maxWidth: 380,
    alignItems: 'center',
  },
  messageTitle: { color: colors.text, fontSize: 22, fontWeight: '800', letterSpacing: 1.2, textAlign: 'center' },
  messageBody: { color: colors.subtext, fontSize: 18, lineHeight: 24, textAlign: 'center' },
  footnote: { color: colors.subtext, fontSize: 14, textAlign: 'center', marginTop: 20 },
  visitButton: {
    backgroundColor: colors.accent,
    paddingVertical: 20,
    paddingHorizontal: 44,
    borderRadius: 52,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 26,
    maxWidth: 340,
  },
  visitButtonText: { color: '#fff', fontWeight: '700', fontSize: 18, letterSpacing: 0.6 },
});
