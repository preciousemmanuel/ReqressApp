import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { darkColors, lightColors } from '../theme/colors';
import { selectTheme } from '../store/themeSlice';

export const useTheme = () => {
  const theme = useSelector(selectTheme);
  const scheme = useColorScheme();
  const isDarkMode = theme === 'system' ? scheme === 'dark' : theme === 'dark';
  const colors = isDarkMode ? darkColors : lightColors;

  return { colors, isDarkMode };
};
