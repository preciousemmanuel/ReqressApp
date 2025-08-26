import { StyleSheet } from 'react-native';
import { metrics } from '../theme/metrics';

export const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.padding,
  },
  errorText: {
    textAlign: 'center',
    marginBottom: metrics.margin,
  },
});
