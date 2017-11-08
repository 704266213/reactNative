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
import LoadMoreView from './js/LoadMoreView'

let url = 'https://raw.githubusercontent.com/704266213/data/master/WebContent/data/filmlist1.txt'

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
        var request = new XMLHttpRequest();
        request.onreadystatechange = (error) => {
            if (request.readyState !== 4) {
                return;
            }
            let requestCode = request.status
            Toast.show(requestCode.toString(), Toast.SHORT);

            if (updateLoadState != null) {
                updateLoadState(requestCode)
            }

            if (requestCode === 200) {
                let data = request.responseText
                let banner = null ? null : JSON.parse(data).result.bannerModels
                let movies = null ? null : JSON.parse(data).result.filmModels
                if (this.state.isLoadMore) {
                    movies = this.state.movies.concat(movies)
                    this.setState({
                        movies: movies,
                        isLoadMore: false
                    });
                } else {
                    this.setState({
                        movies: movies,
                        banner: banner,
                        refreshing: false,
                        isLoadMore: false
                    });
                }

            } else {
                Toast.show(request.responseText, Toast.SHORT);
            }
        };

        request.open('GET', url);
        request.send();
    }

    onLoadMore = () => {
        Toast.show("=============onLoadMore=======================", Toast.SHORT);
        // updateLoadMoreState(-1)
        url = 'https://raw.githubusercontent.com/704266213/data/master/WebContent/data/filmlist2.txt'
        // this.refs.updateLoadMoreState(-1)
        // this.startRequest()
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

    onRenderFooter = () => {
        return <LoadMoreView onLoadMore={this.onLoadMore} />
    }

    _separator = () => {
        return <View style={{height: 1, backgroundColor: 'red'}}/>;
    }

    _renderItem = (info: Object) => (
        <MovieItem
            info={info.item}
            callBack={this.onButtonPress()}
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
                ListFooterComponent={this.onRenderFooter}
                //决定当距离内容最底部还有多远时触发onEndReached回调。
                //注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                onEndReachedThreshold={0.1}
                //当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
                onEndReached={({distanceFromEnd}) => {
                    this.setState({isLoadMore: true})
                    this.onLoadMore()
                }
                }

                refreshing={this.state.refreshing}
                onRefresh={() => {
                    url = 'https://raw.githubusercontent.com/704266213/data/master/WebContent/data/filmlist1.txt'
                    this.setState({refreshing: true})//开始刷新
                    //这里模拟请求网络，拿到数据，3s后停止刷新
                    this.startRequest(null)
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
