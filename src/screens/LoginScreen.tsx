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
import SocialIcon from 'react-native-vector-icons/FontAwesome';

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
          Let's Sign you in.
        </Text>
        <Text style={styles.subtitle}>Welcome back{'\n'}You've been missed!</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username or Email</Text>
          <TextInput
            placeholder="Enter Username or Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter Password"
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
        </View>

        {error && <Text style={{ color: colors.error }}>Invalid credentials</Text>}

        <Button
          title="Login"
          onPress={handleLogin}
          loading={isLoading}
          disabled={!email || !password}
          testID="login-button"
          style={styles.loginButton}
        />

        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.separatorText}>or</Text>
          <View style={styles.separator} />
        </View>

        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <SocialIcon name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <SocialIcon name="linkedin" size={24} color="#0A66C2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <SocialIcon name="facebook" size={24} color="#4267B2" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.registerContainer}>
          <Text>Don't have an account? </Text>
          <Text style={{ color: colors.primary }}>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
