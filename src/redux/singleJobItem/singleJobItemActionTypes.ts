import { job } from '../jobs/jobsActionTypes'

export const GET_SINGLE_JOB_ITEM = "GET_SINGLE_JOB_ITEM"
export const GET_SINGLE_JOB_LOADING = "GET_SINGLE_JOB_LOADING"
export const GET_SINGLE_JOB_ERROR = "GET_SINGLE_JOB_ERROR"

export interface GetSingleJobItem {
    type: typeof GET_SINGLE_JOB_ITEM,
    payload: job
}

export interface GetSingleJobLoading {
    type: typeof GET_SINGLE_JOB_LOADING,
    payload: boolean
}

export interface GetSingleJobError {
    type: typeof GET_SINGLE_JOB_ERROR,
    payload: boolean
}

export type SingleJobDispatchTypes = GetSingleJobItem | GetSingleJobLoading | GetSingleJobError