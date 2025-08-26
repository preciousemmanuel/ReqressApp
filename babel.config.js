module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin',
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        '@components': './src/components/',
        '@hooks': './src/hooks/',
        '@screens': './src/screens/',
        '@utils': './src/utils/',
        '@navigation': './src/navigation/',
        '@redux': './src/redux/',

      },
    },
  
],

[
  'module:react-native-dotenv', {
    moduleName: '@env',
    path: '.env',
  }
]
],
};
