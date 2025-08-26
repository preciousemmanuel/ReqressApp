import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from './Text';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import { metrics } from '../theme/metrics';
import { useTheme } from '../hooks/useTheme';

export const HomeHeader: React.FC = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: metrics.padding,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: metrics.margin,
    },
    textContainer: {
      flex: 1,
    },
    greeting: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 14,
      color: colors.disabled,
    },
  });

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.avatar}
        source={{
          uri: 'https://reqres.in/img/faces/2-image.jpg', // Hardcoded avatar
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>Hello Janet!</Text>
        <Text style={styles.subtitle}>Complete your profile easily</Text>
      </View>
      <Icon name="bell" size={24} color={colors.text} />
    </View>
  );
};
