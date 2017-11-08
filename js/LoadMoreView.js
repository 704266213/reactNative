import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import LoadMoreLoadingView from "./LoadMoreLoadingView";
import LoadMoreRetryView from "./LoadMoreRetryView";

export default class LoadMoreView extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            //加载状态：-1 表示正在加载，200 加载成功，
            loadMoreState: -1
        };
    }

    componentDidMount() {
        //this.updateLoadMoreState(-1)
    }

    updateLoadMoreState = (state) => {
        this.setState({
            loadMoreState: state
        });
    }

    render() {
        let loadState = this.state.loadMoreState
        let onLoadMore = this.props
        if (loadState == -1) {
            return (<LoadMoreLoadingView/>)
        } else if (loadState == 200) {
            return (<View/>)
        } else {
            return (<LoadMoreRetryView onLoadMore={onLoadMore}/>)
        }
    }


}
