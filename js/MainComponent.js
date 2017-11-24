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
        return (<View style={styles.renderView}>
            <Text style={styles.errorTips}>请求成功</Text>
        </View>)
    }

    render() {
        console.log('========render=========onShowRenderView======================');
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={styles.title}>主页</Text>
                </View>
                <LoadingViewComponent ref="loadingViewComponent" onReLoad={this.onReLoad}
                                      onShowRenderView={this.onShowRenderView}/>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        height: 50,
        backgroundColor: "#F4F4F4",
        justifyContent: 'center',
        alignItems: 'center'
    },
    renderView: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorTips: {
        color: "#9E9E9E",
        fontSize: 20,
        textAlign: "center",
        marginTop: 5,
    },
    title: {
        color: "#9E9E9E",
        fontSize: 18,
        textAlign: "center",
    },
});
