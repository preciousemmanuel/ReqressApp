import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserDetailsScreen } from '../screens/UserDetailsScreen';
import { RootStackParamList } from '../types/navigation';
import { BottomTabNavigator } from './BottomTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};
