import { combineReducers } from 'redux'

import StaffsReducer from './staffs'

const reducer = combineReducers({
    staffs: StaffsReducer,
})

export default reducer