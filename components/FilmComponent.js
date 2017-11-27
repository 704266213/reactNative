import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
} from 'react-native';
import LoadingComponent from "./LoadingComponent.js"
import {loading, loadingSuccess, loadingFail} from '../actions/LoadingAction';
import axios from 'axios'


const {height} = Dimensions.get('window');

export default class FilmComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.startRequest()
    }



    render() {
        return (<View style={styles.container}>
            <View style={styles.toolbar}>
                <Text style={styles.title}>首页</Text>
            </View>
            <LoadingComponent ref="loadingComponent" onReLoad={this.onReLoad}
                              onShowRenderView={this.onShowRenderView} startRequest = {this.startRequest}/>
        </View>);
    }

    onShowRenderView() {
        console.log('=================onShowRenderView======================');
        return (<View style={styles.renderView}>
            <Text style={styles.errorTips}>请求成功</Text>
        </View>)
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent: 'flex-start',
    },
    toolbar: {
        height: 50,
        backgroundColor: "#0F9C00",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title: {
        color: "#ffffff",
        fontSize: 18,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    errorTips: {
        color: "#9E9E9E",
        fontSize: 20,
        textAlign: "center",
        marginTop: 5
    }
})


