import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthStack } from './AuthStack';
import { MainStack } from './MainStack';
import { View, ActivityIndicator } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const RootNavigator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const { colors } = useTheme();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        setToken(storedToken);
      } catch (error) {
        console.error('Failed to fetch token from storage', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {token ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
