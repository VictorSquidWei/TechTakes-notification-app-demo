import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, radius } from '../lib/theme';

export default function Card({children, style}:{children: ReactNode, style?: any}){
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.panel,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    padding: 16
  }
});
