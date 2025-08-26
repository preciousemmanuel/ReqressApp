import { StyleSheet } from 'react-native';
import { metrics } from '../theme/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.padding,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: metrics.margin * 2,
  },
  name: {
    textAlign: 'center',
    marginBottom: metrics.margin,
  },
  email: {
    textAlign: 'center',
  },
  loaderContainer: {
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
