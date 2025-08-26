import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserListScreen } from '../screens/UserListScreen';
import { UserDetailsScreen } from '../screens/UserDetailsScreen';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};
