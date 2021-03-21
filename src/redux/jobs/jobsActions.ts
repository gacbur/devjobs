import { Dispatch } from 'redux'
import { JOBS_MAKE_REQUEST, JOBS_GET_DATA, JOBS_ERROR, job, JobsDispatchTypes, JOBS_HAS_NEXT_PAGE } from './jobsActionTypes'

export const jobsMakeRequest = () => (dispatch: Dispatch<JobsDispatchTypes>, getState: any) => {
    dispatch({
        type: JOBS_MAKE_REQUEST,
    })
}

export const jobsGetData = (jobs: job[]) => (dispatch: Dispatch<JobsDispatchTypes>, getState: any) => {
    dispatch({
        type: JOBS_GET_DATA,
        payload: jobs
    })
}

export const jobsError = (error: string) => (dispatch: Dispatch<JobsDispatchTypes>, getState: any) => {
    dispatch({
        type: JOBS_ERROR,
        payload: error
    })
}

export const JobsHasNextPage = (hasNextPage: boolean) => (dispatch: Dispatch<JobsDispatchTypes>, getState: any) => {
    dispatch({
        type: JOBS_HAS_NEXT_PAGE,
        payload: hasNextPage
    })
}