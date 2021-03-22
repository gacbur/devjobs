import { Dispatch } from 'redux'
import { job } from '../jobs/jobsActionTypes'
import { ADD_TO_PINNED, REMOVE_FROM_PINNED, PinnedJobsDispatchTypes } from './pinnedjobsActionTypes'


export const addToPinned = (job: job) => (dispatch: Dispatch<PinnedJobsDispatchTypes>, getState: any) => {
    dispatch({
        type: ADD_TO_PINNED,
        payload: job
    })
}

export const removeFromPinned = (id: string) => (dispatch: Dispatch<PinnedJobsDispatchTypes>, getState: any) => {
    dispatch({
        type: REMOVE_FROM_PINNED,
        payload: id
    })
}


