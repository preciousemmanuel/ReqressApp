import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from './Text';
import { metrics } from '../theme/metrics';
import { useTheme } from '../hooks/useTheme';
import Icon from 'react-native-vector-icons/Feather';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: metrics.headerHeight,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.disabled,
      paddingHorizontal: metrics.padding,
    },
    backButton: {
      position: 'absolute',
      left: metrics.padding,
    },
    title: {
      flex: 1,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color={colors.text} />
        </TouchableOpacity>
      )}
      <Text variant="h1" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};
