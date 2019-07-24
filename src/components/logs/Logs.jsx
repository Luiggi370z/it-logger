import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Preloader from 'components/layout/Preloader'
import PropTypes from 'prop-types'
import { getLogs, deleteLog, setCurrentLog } from 'actions/logActions'
import LogItem from './LogItem'

const Logs = ({
  log: { logs, loading },
  getLogs,
  deleteLog,
  setCurrentLog,
}) => {
  useEffect(() => {
    getLogs()
    //eslint-disable-next-line
  }, [])

  if (loading || !logs) return <Preloader />

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && !logs.length ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map(log => (
          <LogItem
            key={log.id}
            log={log}
            onRemove={deleteLog}
            onSelect={setCurrentLog}
          >
            {log.message}
          </LogItem>
        ))
      )}
    </ul>
  )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
  setCurrentLog: PropTypes.func.isRequired,
  deleteLog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  log: state.log,
})

export default connect(
  mapStateToProps,
  { getLogs, deleteLog, setCurrentLog },
)(Logs)
