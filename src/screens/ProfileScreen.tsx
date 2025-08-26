import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, setTheme } from '../store/themeSlice';
import { clearToken } from '../store/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../hooks/useTheme';
import { styles } from '../styles/ProfileScreen.style';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import { useGetUserByIdQuery } from '../services/api';
import { Header } from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const ProfileMenuItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Icon name={icon} size={20} style={styles.menuIcon} />
    <Text style={styles.menuText}>{text}</Text>
    <Icon name="chevron-right" size={20} color="#666" />
  </TouchableOpacity>
);

export const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUserByIdQuery(2); // Hardcoded user for now
  const navigation = useNavigation();
  const currentTheme = useSelector(selectTheme);

  const handleToggleTheme = () => {
    let nextTheme: 'light' | 'dark' | 'system';
    if (currentTheme === 'light') {
      nextTheme = 'dark';
    } else if (currentTheme === 'dark') {
      nextTheme = 'system';
    } else {
      nextTheme = 'light';
    }
    dispatch(setTheme(nextTheme));
  };

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(clearToken());
  };

  const user = data?.data;

  return (
    <Container>
      <Header title="Profile" onBack={() => navigation.goBack()} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        user && (
          <View style={styles.container}>
            <View style={styles.topContent}>
              <FastImage
                style={styles.avatar}
                source={{ uri: user.avatar }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <Text style={styles.name}>{`${user.first_name} ${user.last_name}`}</Text>
              <Text style={styles.username}>{`@${user.first_name.toLowerCase()}`}</Text>
              <Button
                title="Edit Profile"
                onPress={() => {}}
                style={styles.editButton}
              />
            </View>

            <View style={styles.menuWrapper}>
              <ProfileMenuItem icon="settings" text="Settings" onPress={() => {}} />
              <ProfileMenuItem
                icon="sun"
                text="Toggle Theme"
                onPress={handleToggleTheme}
              />
              <ProfileMenuItem
                icon="shopping-bag"
                text="My Orders"
                onPress={() => {}}
              />
              <ProfileMenuItem icon="map-pin" text="Address" onPress={() => {}} />
              <ProfileMenuItem
                icon="lock"
                text="Change Password"
                onPress={() => {}}
              />
              <ProfileMenuItem
                icon="help-circle"
                text="Help & Support"
                onPress={() => {}}
              />
            </View>
            <ProfileMenuItem icon="log-out" text="Log out" onPress={handleSignOut} />
          </View>
        )
      )}
    </Container>
  );
};
