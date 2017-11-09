import {AppRegistry} from 'react-native';
import App from './App';

import HomePageFragment from './js/HomePageFragment';
import MainComponent from './js/MainComponent';

import RootTabs from './js/NavigatorDemo';

AppRegistry.registerComponent('app', () => RootTabs);

// AppRegistry.registerComponent('app', () => App);

AppRegistry.registerComponent('homePageFragment', () => MainComponent);

