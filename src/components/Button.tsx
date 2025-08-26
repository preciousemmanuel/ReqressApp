import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { metrics } from '../theme/metrics';
import { useTheme } from '../hooks/useTheme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  testID?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading,
  disabled,
  testID,
}) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      height: metrics.buttonHeight,
      borderRadius: metrics.borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: colors.onPrimary,
      fontSize: metrics.fontSize.medium,
    },
    disabled: {
      backgroundColor: colors.disabled,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
      testID={testID}
    >
      {loading ? (
        <ActivityIndicator color={colors.onPrimary} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
