import React from 'react';
import { View } from 'react-native';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { styles } from '../styles/OnboardingScreen.style';
import { useNavigation } from '@react-navigation/native';

export const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.title}>You Ready?</Text>
        <Text style={styles.subtitle}>
          Start trading with AI-powered insights and unlock AI-powered trading,
          real-time insights, and smarter decisions. Let's get started!
        </Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        />
      </View>
    </Container>
  );
};
