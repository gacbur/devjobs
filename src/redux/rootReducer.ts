import { combineReducers } from 'redux'

import jobsReducer from './jobs/jobsReducer'
import getSingleJobItemReducer from './singleJobItem/singleJobItemReducer'
import pinnedJobsReducer from './pinnedJobs/pinnedJobsReducer'

const RootReducer = combineReducers({
    jobs: jobsReducer,
    singleJob: getSingleJobItemReducer,
    pinnedJobs: pinnedJobsReducer
})

export default RootReducer