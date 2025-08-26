import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { useLoginMutation } from '../services/api';
import { styles } from '../styles/LoginScreen.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../hooks/useTheme';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/authSlice';
import Icon from 'react-native-vector-icons/Feather';

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('george.bluth@reqres.in');
  const [password, setPassword] = useState('Developer19');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const handleLogin = async () => {
    try {
      const { token } = await login({ email, password }).unwrap();
      await AsyncStorage.setItem('token', token);
      dispatch(setToken(token));
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
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            style={styles.passwordInput}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.eyeIcon}
          >
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>
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
