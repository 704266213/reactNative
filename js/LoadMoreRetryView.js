import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');


export default class LoadMoreRetryView extends Component<{}> {

    onLoadMore = (onLoadMore) => {
        onLoadMore.onLoadMore();
    }

    render() {
        let onLoadMore = this.props
        return (<TouchableHighlight style={styles.container}
                                    onPress={() => this.onLoadMore(onLoadMore)}
                                    activeOpacity={0.5}
                                    underlayColor="rgb(210, 230,255)">
            <View style={styles.loadMoreFail}>
                <Text style={styles.retry}>加载失败，点击重新加载</Text>
            </View>
        </TouchableHighlight>);
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: width,
        height: 80,
        borderTopColor: 'red',
        borderWidth: 1
    },
    retry: {
        fontSize: 18,
        color: "#FFFFFF",
        textAlign: "center",
        width: width - 100
    },
    loadMoreFail: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        height: 50,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: "blue"
    }
})