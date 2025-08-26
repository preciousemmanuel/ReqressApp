import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useGetUserByIdQuery } from '../services/api';
import { Container } from '../components/Container';
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

  if (isLoading) {
    return (
      <Container>
        <Header title="User Details" onBack={() => navigation.goBack()} />
        <View style={styles.loaderContainer}>
          <ActivityIndicator color={colors.primary} />
        </View>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Header title="User Details" onBack={() => navigation.goBack()} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Failed to load user details. Please try again.
          </Text>
          <Button title="Retry" onPress={refetch} />
        </View>
      </Container>
    );
  }

  const user = data?.data;

  return (
    <Container>
      <Header title="User Details" onBack={() => navigation.goBack()} />
      {user && (
        <View style={styles.container}>
          <View style={styles.card}>
            <FastImage
              style={styles.avatar}
              source={{
                uri: user.avatar,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text variant="h1" style={styles.name}>
              {`${user.first_name} ${user.last_name}`}
            </Text>
            <Text variant="h2" style={styles.email}>
              {user.email}
            </Text>
          </View>
        </View>
      )}
    </Container>
  );
};
