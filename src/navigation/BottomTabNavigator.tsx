import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserListScreen } from '../screens/UserListScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { BottomTabParamList } from '../types/navigation';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '../hooks/useTheme';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else {
            iconName = 'circle';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.disabled,
        tabBarStyle: {
          backgroundColor: colors.surface,
        },
      })}
    >
      <Tab.Screen name="Home" component={UserListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
