import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useGetUsersQuery } from '../services/api';
import { UserListItem } from '../components/UserListItem';
import { Container } from '../components/Container';
import { HomeHeader } from '../components/HomeHeader';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { styles } from '../styles/UserListScreen.style';
import { User } from '../types';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../hooks/useTheme';

export const UserListScreen: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isFetching, refetch } = useGetUsersQuery(page);
  const [users, setUsers] = useState<User[]>([]);
  const navigation = useNavigation();
  const { colors } = useTheme();

  useEffect(() => {
    if (data?.data) {
      setUsers((prevUsers) => [...prevUsers, ...data.data]);
    }
  }, [data]);

  const handleLoadMore = () => {
    if (data?.page < data?.total_pages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (!isFetching) return null;
    return <ActivityIndicator style={{ marginVertical: 20 }} color={colors.primary} />;
  };

  const renderEmpty = () => {
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
            Failed to load users. Please try again.
          </Text>
          <Button title="Retry" onPress={refetch} />
        </View>
      );
    }
    if (!users.length) {
      return (
        <View style={styles.emptyContainer}>
          <Text>No users found.</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <Container>
      <HomeHeader />
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserListItem
            item={item}
            onPress={() => navigation.navigate('UserDetails', { userId: item.id })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        onRefresh={refetch}
        refreshing={isFetching}
      />
    </Container>
  );
};
