import React, {Component} from 'react';

import LoadingView from "./LoadingView.js"
import ReLoadView from "./ReLoadView.js"
import {connect} from 'react-redux';

import axios from 'axios'
import {loading, loadingSuccess, loadingFail} from '../actions/LoadingAction';


class LoadingComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.startRequest(this.props.dispatch)
        // this.props.startRequest(this.props.dispatch)
    }


    startRequest = () => {
        var dispatch = this.props.dispatch
        dispatch(loading())
        axios.get('https://raw.githubusercontent.com/704266213/data/master/WebContent/data/filmlist2.txt')
            .then(function (response) {
                console.log("=========loadingSuccess==============");
                console.log("==========state==============" + response.data.state);
                console.log("==========message==============" + response.data.message);
                console.log("==========result==============" + response.data.result);

                dispatch(loadingSuccess(response.data.result))
                // console.log(response.data);
                // console.log(response.status);
                // console.log(response.statusText);
                // console.log(response.headers);
                // console.log(response.config);
            })
            .catch(function (error) {
                console.log("=========error==============" + error);
                dispatch(loadingFail())
            });
    }

    onReLoad = () => {
        this.startRequest(this.props.dispatch)
        // this.props.startRequest(this.props.dispatch)
    }

    render() {
        let loadState = this.props.loadState
        let onShowRenderView = this.props.onShowRenderView
        console.log('==========LoadingComponent=========render=============' + loadState)

        if (loadState == -1) {
            return (<LoadingView/>)
        } else if (loadState == 200) {
            console.log('==========LoadingComponent=========render=============' + this.props.result.toString())
            return onShowRenderView()
        } else {
            return (<ReLoadView onReLoad={this.onReLoad}/>)
        }
    }

    /*
     * 当props改变的时候调用
     */
    componentWillReceiveProps(props) {
        // console.log('=================componentWillReceiveProps======================' + props.toString());
    }

    shouldComponentUpdate(nextProps, nextState) {
        //防止重复渲染
        return this.props.loadState !== nextProps.loadState || this.state !== nextState
    }


}


// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。
function select(store) {
    return {
        loadState: store.loadingReducer.loadState,
        result: store.loadingReducer.result
    };
}

export default connect(select)(LoadingComponent);


// const mapStateToProps = state => ({
//     loadState: -1,
//     result: null
// })
// export default connect(mapStateToProps)(LoadingComponent);
