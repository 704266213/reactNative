import { AppRegistry } from 'react-native';
import App from './App';

import HomePageFragment from './js/HomePageFragment';
import BaseComponent from './js/BaseComponent';

//AppRegistry.registerComponent('app', () => BaseComponent);

AppRegistry.registerComponent('app', () => App);

AppRegistry.registerComponent('homePageFragment', () => HomePageFragment);

