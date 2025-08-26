import React from 'react';
import { View, Text } from 'react-native';
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
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Profile') iconName = 'user';
          else iconName = 'circle';

          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: focused ? colors.primary : 'transparent',
                paddingHorizontal: focused ? 12 : 0,
                paddingVertical: focused ? 8 : 0,
                borderRadius: 20,
              }}
            >
              <Icon
                name={iconName}
                size={size}
                color={focused ? colors.background : color}
              />
              {focused && (
                <Text style={{ color: colors.background, marginLeft: 8 }}>
                  {route.name}
                </Text>
              )}
            </View>
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.disabled,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.disabled,
        },
      })}
    >
      <Tab.Screen name="Home" component={UserListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
