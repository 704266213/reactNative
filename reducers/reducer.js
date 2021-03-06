import {combineReducers} from 'redux';
import {INCREASE, DECREASE, RESET} from '../actions/actionsTypes';

// 原始默认state
const defaultState = {
    count: 5,
    factor: 1,
    isRequest: false
}

function counter(state = defaultState, action) {
    switch (action.type) {
        case INCREASE:
            return {...state, count: state.count + state.factor};
        case DECREASE:
            return {...state, count: state.count - state.factor};
        case RESET:
            return {...state, count: 0};
        default:
            return state;
    }
}

import loadingReducer from '../reducers/LoadingReducer';

export default combineReducers({
   // counter,
    loadingReducer
});