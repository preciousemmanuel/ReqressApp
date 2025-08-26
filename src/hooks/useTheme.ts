import { useColorScheme } from 'react-native';
import { darkColors, lightColors } from '../theme/colors';

export const useTheme = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  const colors = isDarkMode ? darkColors : lightColors;

  return { colors, isDarkMode };
};
