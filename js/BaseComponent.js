import React, {Component} from 'react';

import LoadingComponent from "./LoadingView.js"
import LoadErrorComponent from "./LoadErrorView.js"

export default class BaseComponent extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            //加载状态：-1 表示正在加载，200 加载成功，
            loadState: -1
        };
    }

    componentDidMount() {
        this.updateLoadState(-1)
        this.startRequest(this.updateLoadState);
    }

    onRefresh = () => {
        this.updateLoadState(-1)
        this.startRequest(this.updateLoadState);
    }

    updateLoadState = (state) => {
        this.setState({
            loadState: state
        });
    }

    render() {
        let loadState = this.state.loadState
        if (loadState == -1) {
            return (<LoadingComponent/>)
        } else if (loadState == 200) {
            return this.onRenderRealView()
        } else {
            return (<LoadErrorComponent onRefresh={this.onRefresh}/>)
        }
    }


    // componentWillUnmount() {
    //     this.updateLoadState(-1)
    // }

}
