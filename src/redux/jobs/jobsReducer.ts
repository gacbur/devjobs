import { JOBS_MAKE_REQUEST, JOBS_GET_DATA, JOBS_ERROR, JOBS_HAS_NEXT_PAGE, job, JobsDispatchTypes } from './jobsActionTypes'

interface InitialStateI {
    jobs: job[],
    loading?: boolean,
    error?: string,
    hasNextPage?: boolean
}

const initialState: InitialStateI = {
    jobs: [],
}

const jobsReducer = (state: InitialStateI = initialState, action: JobsDispatchTypes): InitialStateI => {
    switch (action.type) {
        case JOBS_MAKE_REQUEST:
            return {
                ...state,
                jobs: [],
                loading: true
            }
        case JOBS_GET_DATA:
            return {
                ...state,
                jobs: action.payload,
                loading: false
            }
        case JOBS_ERROR:
            return {
                jobs: [],
                loading: false,
                error: action.payload
            }
        case JOBS_HAS_NEXT_PAGE:
            return {
                ...state,
                hasNextPage: action.payload
            }
        default:
            return state
    }
}

export default jobsReducer
