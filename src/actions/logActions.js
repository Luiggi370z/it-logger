import {
  ADD_LOG,
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_LOG,
  SEARCH_LOGS,
} from 'actions/types'
import axios from 'axios'

export const getLogs = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await axios.get('/logs')

    dispatch({ type: GET_LOGS, payload: res.data })
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data })
  }
}
export const addLog = log => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await axios.post('/logs', log, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    dispatch({ type: ADD_LOG, payload: res.data })
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data })
  }
}

export const deleteLog = id => async dispatch => {
  dispatch({ type: SET_LOADING })

  try {
    await axios.delete(`/logs/${id}`)

    dispatch({ type: DELETE_LOG, payload: id })
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data })
  }
}

export const updateLog = log => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await axios.put(`/logs/${log.id}`, log, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    dispatch({ type: UPDATE_LOG, payload: res.data })
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data })
  }
}

export const searchLogs = query => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await axios.get(`/logs?q=${query}`)

    dispatch({ type: SEARCH_LOGS, payload: res.data })
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data })
  }
}

export const setCurrentLog = log => dispatch => {
  dispatch({ type: SET_CURRENT, payload: log })
}

export const clearCurrentLog = () => dispatch => {
  dispatch({ type: CLEAR_CURRENT })
}
