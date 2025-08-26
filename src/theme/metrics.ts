import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics = {
  screenWidth: width,
  screenHeight: height,
  margin: 16,
  padding: 16,
  borderRadius: 8,
  borderWidth: 1,
  inputHeight: 48,
  buttonHeight: 48,
  headerHeight: 56,
  iconSize: 24,
  fontSize: {
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
  },
};
