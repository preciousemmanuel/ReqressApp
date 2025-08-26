import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../../src/services/api';
import { LoginScreen } from '../../src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.post('https://reqres.in/api/login', () => {
    return HttpResponse.json({ token: 'QpwL5tke4Pnpja7X1' });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      reset: jest.fn(),
    }),
  };
});

import authReducer from '../../src/store/authSlice';
import themeReducer from '../../src/store/themeSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  );
};

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginScreen />, {
      wrapper: AllTheProviders,
    });

    expect(getByPlaceholderText('Enter Username or Email')).toBeTruthy();
    expect(getByPlaceholderText('Enter Password')).toBeTruthy();
    expect(getByTestId('login-button')).toBeTruthy();
  });

  it('handles login', async () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginScreen />, {
      wrapper: AllTheProviders,
    });

    fireEvent.changeText(
      getByPlaceholderText('Enter Username or Email'),
      'george.bluth@reqres.in'
    );
    fireEvent.changeText(getByPlaceholderText('Enter Password'), 'Developer19');
    fireEvent.press(getByTestId('login-button'));

    await waitFor(() => {
      expect(getByTestId('login-button').props.accessibilityState.disabled).toBe(
        true
      );
    });
  });
});
