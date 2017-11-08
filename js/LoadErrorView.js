import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Dimensions
} from 'react-native';

// 组件的属性定义
// interface PropsDefine {
//     // 组件宽度
//     width: number
//     // 组件高度
//     height: number
//     // 点击刷新按钮回调，可选
//     onClickRefresh?: () => void
// }

const {width, height} = Dimensions.get('window');

//export default class LoadErrorComponent extends Component<PropsDefine, {}> {

export default class LoadErrorComponent extends Component<{}> {

    constructor(props){
        super(props);
    }

    onRefresh = (refresh) => {
        refresh.onRefresh();
    }

    render() {
        let refresh = this.props

        return (<View style={styles.container}>
            {/* <View style={styles.picBlock}>
                <Image source={styles.picUrl}/>
            </View>*/}
            <View>
                <Text style={styles.errorTips}>你的网络好像不给力</Text>
                <Text style={styles.errorTips}>点击按钮刷新</Text>
            </View>
            <TouchableHighlight style={styles.onRefreshButton} onPress={() => this.onRefresh(refresh)}
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        width: width,
        height: height,
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