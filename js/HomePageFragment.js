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
    Image,
    Button,
    FlatList,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import Toast from './Toast';
import ItemView from './ItemView';

const {width, height} = Dimensions.get('window');

export default class HomePageFragment extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false, //初始化不刷新
        };
    }

    onButtonPress = () => {
        Toast.show("hello!! react native", Toast.SHORT);
    }

    _renderItem = (info: Object) => (
        <ItemView
            info={info.item}
            callBack={this}
        />
    );

    onPressItem = () => {
        Toast.show("onPressItem", Toast.SHORT);
    };

    _separator = () => {
        return <View style={{height: 1, backgroundColor: 'red'}}/>;
    }

    onRenderHeader = () => {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return <View>

            <Image source={pic} style={{width: 420, height: 160}}/>

            <View style={styles.flowView}>

                <TouchableHighlight style={[styles.flowContainer, styles.flowViewRed]}
                                    onPress={this.onButtonPress}
                                    activeOpacity={0.5}
                                    underlayColor="rgb(210, 230,255)">
                    <View>
                        <Text style={styles.flowText}>Button1</Text></View>
                </TouchableHighlight>

                <TouchableHighlight style={[styles.flowContainer, styles.flowViewOrange]}
                                    onPress={this.onButtonPress}
                                    activeOpacity={0.5}
                                    underlayColor="rgb(210, 230,255)">
                    <View>
                        <Text style={styles.flowText}>Button2</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.flowContainer, styles.flowViewYellow]}
                                    onPress={this.onButtonPress}
                                    activeOpacity={0.5}
                                    underlayColor="rgb(210, 230,255)">
                    <View>
                        <Text style={styles.flowText}>Button3</Text>
                    </View>
                </TouchableHighlight>

            </View>


        </View>;
    }

    render() {

        return (
            <FlatList
                data={[{key: 0, fruits: '苹果', price: 6.99}, {key: 1, fruits: '香蕉', price: 2.99}, {
                    key: 2,
                    fruits: '西瓜',
                    price: 1.98
                }, {key: 3, fruits: '橘子', price: 3.99}, {key: 4, fruits: '猕猴桃', price: 6.99}, {
                    key: 5,
                    fruits: '橙子',
                    price: 8.99
                }, {key: 6, fruits: '草莓', price: 7.99}, {key: 7, fruits: '柿子', price: 2.99}, {
                    key: 8,
                    fruits: '哈密瓜',
                    price: 6.99
                }, {key: 9, fruits: '红枣', price: 8.99}, {key: 10, fruits: '火龙果', price: 6.99}, {
                    key: 11,
                    fruits: '红提',
                    price: 8.99
                }, {key: 12, fruits: '榴莲', price: 6.99}, {key: 13, fruits: '青提', price: 10.99}, {
                    key: 14,
                    fruits: '杨桃',
                    price: 6.99
                }, {key: 15, fruits: '水蜜桃', price: 8.99},]}
                renderItem={this._renderItem}
                contentContainerStyle={[styles.flatListStyle, styles.container]}//设置cell的样式
                ItemSeparatorComponent={this._separator}
                ListHeaderComponent={this.onRenderHeader}//header头部组件
                //决定当距离内容最底部还有多远时触发onEndReached回调。
                //注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                onEndReachedThreshold={0.1}
                //当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
                onEndReached={({distanceFromEnd}) => (
                    setTimeout(() => {
                        this.setState((state) => ({

                        }));
                    }, 3000)
                )}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.setState({refreshing: true})//开始刷新
                    //这里模拟请求网络，拿到数据，3s后停止刷新
                    setTimeout(() => {
                        this.setState({refreshing: false});
                    }, 3000);
                }}
            />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
       // justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    flowView: {
        height: 80,
        flexDirection: 'row',
    },
    flowContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flowViewRed: {
        backgroundColor: 'red'
    },
    flowViewOrange: {
        backgroundColor: 'orange'
    },
    flowViewYellow: {
        backgroundColor: 'yellow'
    },
    flowText: {
        fontSize: 16,
        color: "#ffffff"
    },
    flatListStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});
