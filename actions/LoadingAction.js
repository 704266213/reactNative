import {Loading, LoadingSuccess, LoadingFail} from './LoadingActionTypes';

const loading = () => ( {type: Loading, action: null});
const loadingSuccess = (result) => ({type: LoadingSuccess, result: result});
const loadingFail = () => ({type: LoadingFail, action: null});

export {
    loading,
    loadingSuccess,
    loadingFail
}


