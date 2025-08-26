import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from './Text';
import { metrics } from '../theme/metrics';
import FastImage from 'react-native-fast-image';
import { useTheme } from '../hooks/useTheme';

interface UserListItemProps {
  item: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  onPress: () => void;
}

export const UserListItem: React.FC<UserListItemProps> = ({
  item,
  onPress,
}) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: metrics.padding / 2,
      paddingHorizontal: metrics.padding,
    },
    avatarContainer: {
      marginRight: metrics.margin,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    onlineIndicator: {
      position: 'absolute',
      bottom: 2,
      right: 2,
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: '#34C759', // Green color for online status
      borderWidth: 2,
      borderColor: colors.background,
    },
    userInfo: {
      flex: 1,
    },
    name: {
      fontWeight: 'bold',
    },
    email: {
      color: '#666',
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.avatarContainer}>
        <FastImage
          style={styles.avatar}
          source={{
            uri: item.avatar,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.onlineIndicator} />
      </View>
      <View style={styles.userInfo}>
        <Text variant="h2" style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
        <Text variant="body" style={styles.email}>
          {item.email}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
