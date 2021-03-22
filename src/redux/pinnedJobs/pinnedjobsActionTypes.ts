import { job } from '../jobs/jobsActionTypes'

export const ADD_TO_PINNED = "ADD_TO_PINNED"
export const REMOVE_FROM_PINNED = "REMOVE_FROM_PINNED"

export interface AddToPinned {
    type: typeof ADD_TO_PINNED,
    payload: job
}

export interface RemoveFromPinned {
    type: typeof REMOVE_FROM_PINNED,
    payload: string
}

export type PinnedJobsDispatchTypes = AddToPinned | RemoveFromPinned