import { GET_SINGLE_JOB_ERROR, GET_SINGLE_JOB_ITEM, GET_SINGLE_JOB_LOADING, SingleJobDispatchTypes } from './singleJobItemActionTypes'

interface InitialStateI {
    singleJob?: any
    singleJobsLoading: boolean,
    singleJobsError: boolean
}

const initialState: InitialStateI = {
    singleJob: localStorage.getItem('singleJobItem') ? JSON.parse(localStorage.getItem('singleJobItem') || '{}') : [],
    singleJobsLoading: true,
    singleJobsError: false
}

const getSingleJobItemReducer = (state: InitialStateI = initialState, action: SingleJobDispatchTypes): InitialStateI => {
    switch (action.type) {
        case GET_SINGLE_JOB_ITEM:
            return {
                ...state,
                singleJob: action.payload
            }
        case GET_SINGLE_JOB_LOADING:
            return {
                ...state,
                singleJobsLoading: action.payload,
            }
        case GET_SINGLE_JOB_ERROR:
            return {
                ...state,
                singleJobsError: action.payload
            }
        default:
            return state;
    }
}

export default getSingleJobItemReducer