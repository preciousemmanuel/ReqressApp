import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, setTheme } from '../store/themeSlice';
import { clearToken } from '../store/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../hooks/useTheme';

export const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  const { isDarkMode } = useTheme();

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

  return (
    <Container>
      <View style={styles.container}>
        <Text variant="h1" style={styles.title}>
          Profile
        </Text>
        <Text style={styles.themeInfo}>
          Current Theme: {currentTheme} ({isDarkMode ? 'Dark' : 'Light'})
        </Text>
        <Button
          title="Toggle Theme"
          onPress={handleToggleTheme}
          style={styles.button}
        />
        <Button
          title="Sign Out"
          onPress={handleSignOut}
          style={styles.button}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
  },
  themeInfo: {
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
  },
});
