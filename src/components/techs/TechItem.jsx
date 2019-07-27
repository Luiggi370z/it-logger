import React from 'react'
import PropTypes from 'prop-types'

const TechItem = ({ tech, onRemove }) => {
  const handleOnRemove = () => onRemove(tech.id)

  return (
    <li className="collection-item">
      <div>
        <span>{`${tech.firstName} ${tech.lastName}`}</span>
        <a href="#!" className="secondary-content" onClick={handleOnRemove}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default TechItem
