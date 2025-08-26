import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserListScreen } from '../screens/UserListScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { BottomTabParamList } from '../types/navigation';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '../hooks/useTheme';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const PlaceholderScreen = () => <View />;

export const BottomTabNavigator: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Favorites') iconName = 'heart';
          else if (route.name === 'Search') iconName = 'search';
          else if (route.name === 'Cart') iconName = 'shopping-bag';
          else if (route.name === 'Profile') iconName = 'user';
          else iconName = 'circle';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.disabled,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colors.surface,
          borderRadius: 15,
          height: 70,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 20,
        },
      })}
    >
      <Tab.Screen name="Home" component={UserListScreen} />
      <Tab.Screen name="Favorites" component={PlaceholderScreen} />
      <Tab.Screen name="Search" component={PlaceholderScreen} />
      <Tab.Screen name="Cart" component={PlaceholderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
