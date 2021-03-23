import { job } from '../jobs/jobsActionTypes'
import { ADD_TO_PINNED, REMOVE_FROM_PINNED, PinnedJobsDispatchTypes } from './pinnedjobsActionTypes'

interface InitialStateI {
    pinnedJobs: job[]
}

const initialState: InitialStateI = {
    pinnedJobs: localStorage.getItem('pinnedJobs') ? JSON.parse(localStorage.getItem('pinnedJobs') || '{}') : []
}

const pinnedJobsReducer = (state: InitialStateI = initialState, action: PinnedJobsDispatchTypes): InitialStateI => {
    switch (action.type) {
        case ADD_TO_PINNED:
            if (state.pinnedJobs.includes(action.payload)) {
                return state
            } else {
                return {
                    pinnedJobs: [...state.pinnedJobs, action.payload]
                }
            }
        case REMOVE_FROM_PINNED:
            const temp_pinnedJobs = state.pinnedJobs.filter(item => item.id !== action.payload)
            return {
                pinnedJobs: temp_pinnedJobs
            }
        default:
            return state
    }
}

export default pinnedJobsReducer