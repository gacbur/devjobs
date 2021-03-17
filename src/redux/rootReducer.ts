import { combineReducers } from 'redux'

import jobsReducer from './jobs/jobsReducer'

const RootReducer = combineReducers({
    jobs: jobsReducer
})

export default RootReducer