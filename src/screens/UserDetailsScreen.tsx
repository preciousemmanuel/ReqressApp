import React from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { useGetUserByIdQuery } from '../services/api';
import { Header } from '../components/Header';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { styles } from '../styles/UserDetailsScreen.style';
import FastImage from 'react-native-fast-image';
import {
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { useTheme } from '../hooks/useTheme';

type UserDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'UserDetails'
>;

export const UserDetailsScreen: React.FC = () => {
  const route = useRoute<UserDetailsScreenRouteProp>();
  const navigation = useNavigation();
  const { userId } = route.params;
  const { data, error, isLoading, refetch } = useGetUserByIdQuery(userId);
  const { colors } = useTheme();

  const user = data?.data;

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Failed to load user details. Please try again.
        </Text>
        <Button title="Retry" onPress={refetch} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="light-content" />
      <Header title="" onBack={() => navigation.goBack()} transparent />
      {user && (
        <>
          <FastImage
            style={styles.avatar}
            source={{
              uri: user.avatar,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={styles.card}>
            <Text variant="h1" style={styles.name}>
              {`${user.first_name} ${user.last_name}`}
            </Text>
            <Text variant="h2" style={styles.email}>
              {user.email}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};
