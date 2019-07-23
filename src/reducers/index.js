import { combineReducers } from 'redux'
import logReducer from 'reducers/logReducer'

export default combineReducers({ log: logReducer })
