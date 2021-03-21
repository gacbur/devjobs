import { Dispatch } from 'redux'
import { job } from '../jobs/jobsActionTypes'
import { GET_SINGLE_JOB_ERROR, GET_SINGLE_JOB_ITEM, GET_SINGLE_JOB_LOADING, SingleJobDispatchTypes } from './singleJobItemActionTypes'

export const getSingleJobItem = (singleJob: job) => (dispatch: Dispatch<SingleJobDispatchTypes>, getState: any) => {
    dispatch({
        type: GET_SINGLE_JOB_ITEM,
        payload: singleJob
    })
}

export const getSingleJobError = (error: boolean) => (dispatch: Dispatch<SingleJobDispatchTypes>, getState: any) => {
    dispatch({
        type: GET_SINGLE_JOB_ERROR,
        payload: error
    })
}

export const getSingleJobLoading = (isLoading: boolean) => (dispatch: Dispatch<SingleJobDispatchTypes>, getState: any) => {
    dispatch({
        type: GET_SINGLE_JOB_LOADING,
        payload: isLoading
    })
}