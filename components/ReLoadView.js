import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

const {height} = Dimensions.get('window');

export default class ReLoadView extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        let onReLoad = this.props.onReLoad
        let updateLoadState = this.props.updateLoadState

        return (<View style={styles.container}>
            <View>
                <Text style={styles.errorTips}>你的网络好像不给力</Text>
                <Text style={styles.errorTips}>点击按钮刷新</Text>
            </View>
            <TouchableHighlight style={styles.onRefreshButton} onPress={() => {
                onReLoad();
                updateLoadState(-1)
            }}
                                activeOpacity={0.5}
                                underlayColor="rgb(210, 230,255)">
                <Text style={styles.onRefreshText}>刷新</Text>
            </TouchableHighlight>
        </View>);

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent:'flex-start',
        paddingTop: height / 4.5
    },
    errorTipsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorTips: {
        color: "#9E9E9E",
        fontSize: 20,
        textAlign: "center",
        marginTop: 5
    },
    onRefreshButton: {
        backgroundColor: '#FFFFFF',
        minHeight: 40,
        minWidth: 160,
        borderColor: '#F1F1F1',
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
    },
    onRefreshText: {
        color: "#F6369A",
        textAlign: "center",
        fontSize: 20
    }

})