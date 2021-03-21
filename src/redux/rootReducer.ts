import { combineReducers } from 'redux'

import jobsReducer from './jobs/jobsReducer'
import getSingleJobItemReducer from './singleJobItem/singleJobItemReducer'

const RootReducer = combineReducers({
    jobs: jobsReducer,
    singleJob: getSingleJobItemReducer
})

export default RootReducer