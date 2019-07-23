import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min'

const AddTechModal = () => {
  const [form, setForm] = useState({ message: '', attention: false, tech: '' })
  const { firstName, lastName } = form
  const handleOnChange = e =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

  const onSubmit = e => {
    e.preventDefault()

    if (!firstName || !lastName)
      M.toast({ html: 'Please enter a message and tech' })
    else {
      console.log(form)
      setForm({
        firstName: '',
        lastName: '',
      })
    }
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              className="validate"
              value={firstName}
              onChange={handleOnChange}
              required
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              className="validate"
              value={lastName}
              onChange={handleOnChange}
              required
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
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

export default AddTechModal
