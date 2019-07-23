import { GET_LOGS, SET_LOADING, LOGS_ERROR } from 'actions/types'
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
