import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthStack } from './AuthStack';
import { MainStack } from './MainStack';
import { View, ActivityIndicator } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, setToken } from '../store/authSlice';

export const RootNavigator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const { colors } = useTheme();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          dispatch(setToken(storedToken));
        }
      } catch (error) {
        console.error('Failed to fetch token from storage', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, [dispatch]);

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
