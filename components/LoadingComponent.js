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
        // this.props.startRequest(this.props.dispatch)
        this.startRequest()
    }

    startRequest = () => {
        var dispatch = this.props.dispatch
        this.props.dispatch(loading())
        axios.get('https://raw.githubusercontent.com/704266213/data/master/WebContent/data/filmlist2.txt')
            .then(function (response) {
                console.log("=========loadingSuccess==============");
                console.log("=========dispatch==============" + dispatch);
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
                dispatch.dispatch(loadingFailed())
            });
    }

    render() {
        let loadState = this.props.loadState
        let onShowRenderView = this.props.onShowRenderView
        let onReLoad = this.props.onReLoad
        console.log('=================render=========LoadingComponent=============' + loadState)
        if (loadState == -1) {
            return (<LoadingView/>)
        } else if (loadState == 200) {
            return onShowRenderView()
        } else {
            return (<ReLoadView onReLoad={onReLoad}/>)
        }
    }

    /*
     * 当props改变的时候调用
     */
    componentWillReceiveProps(props) {
        console.log('=================componentWillReceiveProps======================' + props.toString());
    }


}

const mapStateToProps = state => ({
    loadState: -1,
    result: null
})

export default connect(mapStateToProps)(LoadingComponent);
