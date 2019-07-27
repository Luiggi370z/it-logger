import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getTechs, deleteTech } from 'actions/techActions'
import TechItem from './TechItem'

const TechListModal = ({ tech: { techs, loading }, getTechs, deleteTech }) => {
  useEffect(() => {
    getTechs()
    //eslint-disable-next-line
  }, [])

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs ? (
            techs.map(tech => (
              <TechItem key={tech.id} tech={tech} onRemove={deleteTech} />
            ))
          ) : (
            <p className="center">No Tech to show...</p>
          )}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  tech: state.tech,
})

TechListModal.propTypes = {
  tech: PropTypes.shape({ techs: PropTypes.array, loading: PropTypes.bool })
    .isRequired,
  getTechs: PropTypes.func.isRequired,
  deleteTech: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  { getTechs, deleteTech },
)(TechListModal)
