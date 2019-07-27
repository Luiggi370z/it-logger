import {
  SET_LOADING,
  TECHS_ERROR,
  ADD_TECH,
  DELETE_TECH,
  GET_TECHS,
} from 'actions/types'

const initialState = {
  techs: null,
  loading: false,
  error: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true }

    case GET_TECHS:
      return { ...state, loading: false, techs: payload }

    case TECHS_ERROR:
      return { ...state, error: payload, loading: false }

    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, payload],
        loading: false,
      }

    case DELETE_TECH:
      return {
        ...state,
        loading: false,
        techs: state.techs.filter(tech => payload !== tech.id),
      }

    default:
      return state
  }
}
