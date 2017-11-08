import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    FlatList,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import LoadingViewComponent from "./load/LoadingViewComponent.js"

const {width, height} = Dimensions.get('window');

import axios from 'axios'

export default class MainComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.startRequest(this.refs.loadingViewComponent.updateLoadState)
    }

    startRequest = (updateLoadState) => {
        axios.get('https://raw.githubusercontent.com/704266213/data/master/WebContent/data/filmlist2.txt')
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
                updateLoadState(response.status)
            })
            .catch(function (error) {
                updateLoadState(0)
                console.log("=========error==============" + error);
            });
        ;
    }

    onReLoad = () => {
        this.startRequest(this.refs.loadingViewComponent.updateLoadState)
        console.log('=================onReLoad======================');
    }

    onShowRenderView() {
        console.log('=================onShowRenderView======================');
        return <View/>
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>

                </View>
                <LoadingViewComponent ref="loadingViewComponent" onReLoad={this.onReLoad}
                                      onShowRenderView={this.onShowRenderView}/>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    toolbar: {
        height: 50,
        backgroundColor:"#f3f3f3",
    },
});
