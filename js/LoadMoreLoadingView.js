/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');

export default class LoadMoreLoadingView extends Component<{}> {

    render() {
        return (<View style={styles.container}>
            <ActivityIndicator style={[styles.centering, styles.gray]}
                               color="#F52C94"
                               size="large"/>
            <Text style={styles.loadText}>正在加载中,请稍后...</Text>
        </View>);

    }

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: 80,
        width: width,
        borderTopColor: 'red',
        borderWidth: 1
    },
    loadText: {
        fontSize: 18,
        color: "#F52C94",
        textAlign: "center",
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        minHeight: 40,
        minWidth: 40
    },
    gray: {
        backgroundColor: '#00000000',
    },
})
