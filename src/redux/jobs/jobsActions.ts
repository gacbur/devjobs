import { Dispatch } from 'redux'
import { GET_JOBS_ERROR, GET_JOBS_LOADING, GET_JOBS_SUCCESS, job, JobsDispatchTypes } from './jobsActionTypes'

export const getJobsSuccess = (jobs: job[]) => (dispatch: Dispatch<JobsDispatchTypes>, getState: any) => {
    dispatch({
        type: GET_JOBS_SUCCESS,
        payload: jobs
    })
}

export const getJobsError = (error: boolean) => (dispatch: Dispatch<JobsDispatchTypes>, getState: any) => {
    dispatch({
        type: GET_JOBS_ERROR,
        payload: error
    })
}

export const getJobsLoading = (isLoading: boolean) => (dispatch: Dispatch<JobsDispatchTypes>, getState: any) => {
    dispatch({
        type: GET_JOBS_LOADING,
        payload: isLoading
    })
}