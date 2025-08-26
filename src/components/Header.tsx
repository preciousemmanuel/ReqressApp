import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from './Text';
import { metrics } from '../theme/metrics';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: metrics.headerHeight,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.disabled,
    },
  });

  return (
    <View style={styles.container}>
      <Text variant="h1">{title}</Text>
    </View>
  );
};
