import { StyleSheet } from 'react-native';
import { metrics } from '../theme/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: metrics.padding,
  },
  title: {
    textAlign: 'center',
    marginBottom: metrics.margin * 2,
  },
  input: {
    marginBottom: metrics.margin,
  },
});
