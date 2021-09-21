import { combineReducers } from 'redux'

import ListsReducer from './lists'

const reducer = combineReducers({
    lists: ListsReducer,
})

export default reducer