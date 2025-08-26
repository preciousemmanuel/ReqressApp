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
      padding: metrics.padding,
      borderBottomWidth: 1,
      borderBottomColor: colors.disabled,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: metrics.margin,
    },
    userInfo: {
      flex: 1,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FastImage
        style={styles.avatar}
        source={{
          uri: item.avatar,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.userInfo}>
        <Text variant="h2">{`${item.first_name} ${item.last_name}`}</Text>
        <Text variant="body">{item.email}</Text>
      </View>
    </TouchableOpacity>
  );
};
