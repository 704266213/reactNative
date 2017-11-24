import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/Store';

import ReduxUI from './ReduxUI';


const store = configureStore();

export default class ReduxTest extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxUI/>
            </Provider>
        );
    }
}

