import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
          <br />
          <span className="grey-text">
            <span className="black-text">{`ID # ${log.id} a`}</span>
            <span>last updated by </span>
            <span className="black-text">{log.tech}</span>
            <span>{format(log.date, 'MMMM Do YYYY, hh:mm a')}</span>
          </span>
          <a href="#!" className="secondary-content">
            <i className="material-icons grey-text">delete</i>
          </a>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
}

export default LogItem
