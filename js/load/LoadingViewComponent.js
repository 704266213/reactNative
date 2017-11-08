import React, {Component} from 'react';

import LoadingView from "./LoadingView.js"
import ReLoadView from "./ReLoadView.js"

export default class LoadingViewComponent extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            //加载状态：-1 表示正在加载，200 加载成功，
            loadState: -1
        };
    }

    /*
     * this指针会发生变化
     */
    updateLoadState = (loadState) => {
        console.log('=================loadState======================' + loadState)
        this.setState({
            loadState: loadState
        });
    }

    render() {
        let loadState = this.state.loadState
        let onShowRenderView = this.props.onShowRenderView
        let onReLoad = this.props.onReLoad
        console.log('=================render======================' + loadState)
        if (loadState == -1) {
            return (<LoadingView/>)
        } else if (loadState == 200) {
            return onShowRenderView()
        } else {
            return (<ReLoadView onReLoad={onReLoad} updateLoadState={this.updateLoadState}/>)
        }
    }

    /*
     * 当props改变的时候调用
     */
    componentWillReceiveProps(props) {
        console.log('=================componentWillReceiveProps======================' + props.toString());
        // this.setState({
        //     loadState: props.loadState
        // });
    }


}
