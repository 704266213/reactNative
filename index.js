import {AppRegistry} from 'react-native';
import App from './App';

import HomePageFragment from './js/HomePageFragment';
import MainComponent from './js/MainComponent';

import ReduxDemo from './components/ReduxDemo';


import RootTabs from './js/NavigatorDemo';

AppRegistry.registerComponent('app', () => RootTabs);

AppRegistry.registerComponent('redux', () => ReduxDemo);

// AppRegistry.registerComponent('app', () => App);

AppRegistry.registerComponent('homePageFragment', () => MainComponent);

