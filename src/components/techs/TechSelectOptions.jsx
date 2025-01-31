import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTechs } from 'actions/techActions'

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs()
    //eslint-disable-next-line
  }, [])

  return (
    !loading &&
    techs &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {`${t.firstName} ${t.lastName}`}
      </option>
    ))
  )
}

TechSelectOptions.propTypes = {
  tech: PropTypes.shape({ techs: PropTypes.array, loading: PropTypes.bool })
    .isRequired,
  getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  tech: state.tech,
})

export default connect(
  mapStateToProps,
  { getTechs },
)(TechSelectOptions)
