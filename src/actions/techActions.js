import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_TECHS_LOADING,
  TECHS_ERROR,
} from 'actions/types'
import axios from 'axios'

export const getTechs = () => async dispatch => {
  try {
    setLoading(dispatch)
    const res = await axios.get('/techs')
    dispatch({ type: GET_TECHS, payload: res.data })
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText })
  }
}

export const addTech = tech => async dispatch => {
  try {
    setLoading(dispatch)
    const res = await axios.post('/techs', tech, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    dispatch({ type: ADD_TECH, payload: res.data })
  } catch (error) {
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText })
  }
}

export const deleteTech = id => async dispatch => {
  try {
    setLoading(dispatch)
    await axios.delete(`/techs/${id}`)

    dispatch({ type: DELETE_TECH, payload: id })
  } catch (error) {
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText })
  }
}

export const setLoading = dispatch => {
  dispatch({
    type: SET_TECHS_LOADING,
  })
}
