/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    FlatList,
    Dimensions,
    ViewPagerAndroid
} from 'react-native';

const {width, height} = Dimensions.get('window');

import Toast from './js/Toast';
import BaseComponent from './js/BaseComponent';
import MovieItem from './js/MovieItem';


export default class App extends BaseComponent<{}> {

    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            banner: [],
            refreshing: false, //初始化不刷新
        };
    }

    startRequest(updateLoadState) {
        let url = 'https://raw.githubusercontent.com/704266213/data/master/WebContent/data/filmlist1.txt'
        var request = new XMLHttpRequest();
        request.onreadystatechange = (error) => {
            if (request.readyState !== 4) {
                return;
            }

            let requestCode = request.status
            Toast.show(requestCode.toString(), Toast.SHORT);

            updateLoadState(requestCode)
            if (requestCode === 200) {
                let data = request.responseText
                let banner = null ? null : JSON.parse(data).result.bannerModels
                let movies = null ? null : JSON.parse(data).result.filmModels
                this.setState({
                    movies: movies,
                    banner: banner,
                    refreshing: false
                });
            } else {
                Toast.show(request.responseText, Toast.SHORT);
            }
        };

        request.open('GET', url);
        request.send();
    }

    onButtonPress = () => {
        Toast.show("hello!! react native", Toast.SHORT);
    }


    onRenderHeader = () => {

        var pages = [];
        let banners = this.state.banner
        let size = banners.length
        for (let i = 0; i < size; i++) {
            pages.push(
                <View key={i} collapsable={false}>
                    <Image
                        style={styles.childBanner}
                        source={{uri: banners[i].bannerImageUrl}}
                    />
                </View>
            );
        }

        return <View>
            <ViewPagerAndroid
                style={styles.viewPager}
                initialPage={0}>
                {pages}
            </ViewPagerAndroid>

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

    _separator = () => {
        return <View style={{height: 1, backgroundColor: 'red'}}/>;
    }

    _renderItem = (info: Object) => (
        <MovieItem
            info={info.item}
            callBack={this}
        />
    );

    _keyExtractor = (item, index) => index;

    onRenderRealView() {
        return (
            <FlatList
                data={this.state.movies}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                contentContainerStyle={[styles.flatListStyle, styles.container]}//设置cell的样式
                ItemSeparatorComponent={this._separator}
                ListHeaderComponent={this.onRenderHeader}//header头部组件
                //决定当距离内容最底部还有多远时触发onEndReached回调。
                //注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                onEndReachedThreshold={0.1}
                //当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
                onEndReached={({distanceFromEnd}) => (
                    setTimeout(() => {
                        this.setState((state) => ({}));
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
        backgroundColor: '#F5FCFF',
    },
    viewPager: {
        width: width,
        height: width / 4,
    },
    childBanner: {
        width: width,
        height: width / 4,
    },
    flatListStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flowView: {
        height: 80,
        width: width,
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
});
