module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|react-redux)',
  ],
  moduleNameMapper: {
    'react-native-linear-gradient':
      '<rootDir>/__mocks__/react-native-linear-gradient.js',
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};
