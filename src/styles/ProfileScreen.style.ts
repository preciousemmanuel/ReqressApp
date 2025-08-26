import { StyleSheet } from 'react-native';
import { metrics } from '../theme/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.padding,
    justifyContent: 'space-between',
  },
  topContent: {
    width: '100%',
    alignItems: 'center',
  },
  menuWrapper: {
    width: '100%',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: metrics.margin,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: '#666',
    marginBottom: metrics.margin * 2,
  },
  editButton: {
    width: '100%',
    marginBottom: metrics.margin * 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: metrics.padding,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuIcon: {
    marginRight: metrics.margin,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
});
