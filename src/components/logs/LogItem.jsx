import React from 'react'
import PropTypes from 'prop-types'

import M from 'materialize-css/dist/js/materialize.min'
import { format } from 'date-fns'

const LogItem = ({ log, onRemove, onSelect }) => {
  const handleOnDelete = () => {
    onRemove(log.id)

    M.toast({ html: `Log #${log.id} Deleted` })
  }

  const handleOnSelect = () => onSelect(log)

  return (
    <li className="collection-item">
      <div>
        <a
          href="#log-modal"
          onClick={handleOnSelect}
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">{`ID # ${log.id} `}</span>
          <span>last updated by </span>
          <span className="black-text">{`${log.tech} `}</span>
          <span>{format(log.date, 'MMMM Do YYYY, hh:mm a')}</span>
        </span>
        <a href="#!" className="secondary-content" onClick={handleOnDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default LogItem
