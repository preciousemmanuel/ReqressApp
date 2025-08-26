import { StyleSheet } from 'react-native';
import { metrics } from '../theme/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.padding,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: metrics.margin,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: metrics.margin * 3,
  },
  button: {
    width: '100%',
    height: 50,
  },
});
