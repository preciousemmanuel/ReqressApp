import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  MainTabs: BottomTabScreenProps<BottomTabParamList>;
  UserDetails: { userId: number };
};

export type BottomTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Search: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type UserDetailsScreenProps = CompositeScreenProps<
  StackScreenProps<RootStackParamList, 'UserDetails'>,
  BottomTabScreenProps<BottomTabParamList>
>;
