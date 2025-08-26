import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { metrics } from '../theme/metrics';
import { useTheme } from '../hooks/useTheme';

export const SkeletonLoader: React.FC = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.disabled,
      borderRadius: metrics.borderRadius,
      overflow: 'hidden',
    },
    gradient: {
      width: '100%',
      height: '100%',
    },
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          colors.disabled,
          colors.background,
          colors.disabled,
        ]}
        style={styles.gradient}
      />
    </View>
  );
};
