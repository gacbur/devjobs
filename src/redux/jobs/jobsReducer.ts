import { GET_JOBS_ERROR, GET_JOBS_LOADING, GET_JOBS_SUCCESS, job, JobsDispatchTypes } from './jobsActionTypes'

interface InitialStateI {
    jobs: job[],
    getJobsLoading: boolean,
    getJobsError: boolean,
}

const initialState: InitialStateI = {
    jobs: [],
    getJobsLoading: false,
    getJobsError: false
}

const jobsReducer = (state: InitialStateI = initialState, action: JobsDispatchTypes): InitialStateI => {
    switch (action.type) {
        case GET_JOBS_LOADING:
            return {
                ...state,
                getJobsLoading: action.payload
            }
        case GET_JOBS_SUCCESS:
            if (state.jobs.length > 0) {
                return {
                    ...state,
                    jobs: [...state.jobs, ...action.payload],
                }
            } else {
                return {
                    ...state,
                    jobs: action.payload
                }
            }
        case GET_JOBS_ERROR:
            return {
                ...state,
                getJobsError: action.payload
            }
        default:
            return state
    }
}

export default jobsReducer
