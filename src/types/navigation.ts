import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  MainTabs: BottomTabScreenProps<BottomTabParamList>;
  UserDetails: { userId: number };
};

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type UserDetailsScreenProps = CompositeScreenProps<
  StackScreenProps<RootStackParamList, 'UserDetails'>,
  BottomTabScreenProps<BottomTabParamList>
>;
