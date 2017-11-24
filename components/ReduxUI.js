import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {increase, decrease, reset} from '../actions/action';

class ReduxUI extends Component {
    _onPressReset() {
        this.props.dispatch(reset());
    }

    _onPressInc() {
        this.props.dispatch(increase());
    }

    _onPressDec() {
        this.props.dispatch(decrease());
    }

    render() {
        console.log("=========counter==============" + this.props.counter.toString());
        console.log("=========count==============" + this.props.counter.count);
        console.log("=========factor==============" + this.props.counter.factor);
        console.log("=========isRequest==============" + this.props.counter.isRequest);

        return (
            <View style={styles.container}>
                <Text style={styles.counter}>{this.props.counter.count}</Text>
                <TouchableOpacity style={styles.reset} onPress={() => this._onPressReset()}>
                    <Text>归零</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.start} onPress={() => this._onPressInc()}>
                    <Text>加1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stop} onPress={() => this._onPressDec()}>
                    <Text>减1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    counter: {
        fontSize: 50,
        marginBottom: 70
    },
    reset: {
        margin: 10,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 40
    },
    start: {
        margin: 10,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 40
    },
    stop: {
        margin: 10,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 40
    }
})

const mapStateToProps = state => ({
    counter: state.counter
})

export default connect(mapStateToProps)(ReduxUI);