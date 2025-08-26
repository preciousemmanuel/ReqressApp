import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { metrics } from '../theme/metrics';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: metrics.padding,
  },
  title: {
    fontSize: metrics.fontSize.large,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: metrics.margin,
  },
  subtitle: {
    fontSize: metrics.fontSize.medium,
    color: colors.text,
    marginBottom: metrics.margin,
  },
  errorText: {
    color: colors.error,
    fontSize: metrics.fontSize.small,
    marginBottom: metrics.margin,
  },
});
