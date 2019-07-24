import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { addLog, updateLog, clearCurrentLog } from 'actions/logActions'
import M from 'materialize-css/dist/js/materialize.min'

const initialLog = { message: '', attention: false, tech: '' }

const LogModal = ({ log, addLog, updateLog, clearCurrentLog }) => {
  const { current } = log

  useEffect(() => {
    if (current) setForm(current)
  }, [current])

  const [form, setForm] = useState(initialLog)
  const { message, attention, tech } = form

  const handleOnChange = e =>
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    })

  const onSubmit = e => {
    e.preventDefault()

    if (!message || !tech) {
      M.toast({ html: 'Please enter a message and tech' })
      return
    }
    if (current) {
      updateLog({ ...form, date: new Date() })
      clearCurrentLog()
      M.toast({ html: `Log updated by ${tech}` })
    } else {
      setForm({
        message: '',
        attention: false,
        tech: '',
      })

      addLog({ ...form, date: new Date() })
      M.toast({ html: `Log added by ${tech}` })
    }

    setForm(initialLog)
  }

  return (
    <div id="log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>{`${current ? 'Update' : 'Add New'} Log`}</h4>
        <div className="input-field">
          <input
            type="text"
            name="message"
            className="validate"
            value={message}
            onChange={handleOnChange}
            required
          />
          {!current && (
            <label htmlFor="message" className="active">
              Log Message
            </label>
          )}
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              id="tech"
              className="browser-default"
              value={tech}
              onChange={handleOnChange}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="Jhon Doe">Jhon Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara White">Sara White</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label htmlFor="attention">
                <input
                  id="attention"
                  type="checkbox"
                  name="attention"
                  checked={attention}
                  value={attention}
                  className="filled-in"
                  onChange={handleOnChange}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  )
}

LogModal.propTypes = {
  log: PropTypes.object.isRequired,
  addLog: PropTypes.func.isRequired,
  updateLog: PropTypes.func.isRequired,
  clearCurrentLog: PropTypes.func.isRequired,
}

const modalStyle = {
  width: '75%',
}

const mapStateToProps = state => ({
  log: state.log,
})

export default connect(
  mapStateToProps,
  { addLog, updateLog, clearCurrentLog },
)(LogModal)
