import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { useLoginMutation } from '../services/api';
import { styles } from '../styles/LoginScreen.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../hooks/useTheme';

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('george.bluth@reqres.in');
  const [password, setPassword] = useState('Developer19');
  const [login, { isLoading, error }] = useLoginMutation();
  const navigation = useNavigation();
  const { colors } = useTheme();

  const handleLogin = async () => {
    try {
      const { token } = await login({ email, password }).unwrap();
      await AsyncStorage.setItem('token', token);
      // This is not the ideal way to navigate, we will fix this later
      // by using a navigation service.
      navigation.reset({
        index: 0,
        routes: [{ name: 'UserList' }],
      });
    } catch (err) {
      console.error('Failed to login:', err);
    }
  };

  return (
    <Container>
      <View style={styles.container}>
        <Text variant="h1" style={styles.title}>
          Login
        </Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        {error && <Text style={{ color: colors.error }}>Invalid credentials</Text>}
        <Button
          title="Login"
          onPress={handleLogin}
          loading={isLoading}
          disabled={!email || !password}
          testID="login-button"
        />
      </View>
    </Container>
  );
};
