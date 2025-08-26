import { StyleSheet } from 'react-native';
import { metrics } from '../theme/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.padding,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: metrics.borderRadius,
    padding: metrics.padding * 2,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
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
