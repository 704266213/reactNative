import { AppRegistry } from 'react-native';
import App from './App';

import HomePageFragment from './js/HomePageFragment';
import MainComponent from './js/MainComponent';

//AppRegistry.registerComponent('app', () => BaseComponent);

AppRegistry.registerComponent('app', () => App);

AppRegistry.registerComponent('homePageFragment', () => MainComponent);

