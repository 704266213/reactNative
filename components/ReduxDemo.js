import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/Store';

import ReduxTab from './ReduxTab';
import ReduxUI from './ReduxUI';


const store = configureStore();

export default class ReduxDemo extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxTab/>
            </Provider>
        );
    }
}

