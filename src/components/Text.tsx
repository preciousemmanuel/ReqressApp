import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { metrics } from '../theme/metrics';
import { useTheme } from '../hooks/useTheme';

type TextProps = {
  children: React.ReactNode;
  style?: any;
  variant?: 'h1' | 'h2' | 'body' | 'caption';
};

export const Text: React.FC<TextProps> = ({
  children,
  style,
  variant = 'body',
}) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    h1: {
      fontSize: metrics.fontSize.xlarge,
      color: colors.text,
      fontFamily: 'Roboto-Bold',
    },
    h2: {
      fontSize: metrics.fontSize.large,
      color: colors.text,
      fontFamily: 'Roboto-Bold',
    },
    body: {
      fontSize: metrics.fontSize.medium,
      color: colors.text,
      fontFamily: 'Roboto-Regular',
    },
    caption: {
      fontSize: metrics.fontSize.small,
      color: colors.placeholder,
      fontFamily: 'Roboto-Regular',
    },
  });

  return <RNText style={[styles[variant], style]}>{children}</RNText>;
};
