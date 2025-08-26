import { StyleSheet, Dimensions } from 'react-native';
import { metrics } from '../theme/metrics';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: '100%',
    height: height * 0.4,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: metrics.padding * 2,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: metrics.margin,
  },
  email: {
    fontSize: 18,
    color: '#666',
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
