import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min'

const EditLogModal = () => {
  const [form, setForm] = useState({ message: '', attention: false, tech: '' })
  const { message, attention, tech } = form
  const handleOnChange = e =>
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    })

  const onSubmit = e => {
    e.preventDefault()

    if (!message || !tech) M.toast({ html: 'Please enter a message and tech' })
    else {
      console.log(form)
      setForm({
        message: '',
        attention: false,
        tech: '',
      })
    }
  }

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="input-field">
          <input
            type="text"
            name="message"
            className="validate"
            value={message}
            onChange={handleOnChange}
            required
          />
          <label htmlFor="message" className="active">
            Log Message
          </label>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              id="tech"
              className="validate"
              value={tech}
              onChange={handleOnChange}
              required
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

const modalStyle = {
  width: '75%',
  // weight: '75%',
}

export default EditLogModal
