/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


// Register the background message handler globally


AppRegistry.registerComponent(appName, () => App);
