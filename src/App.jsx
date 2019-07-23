import React, { Fragment, useEffect } from 'react'

import { Provider } from 'react-redux'
import SearchBar from 'components/layout/SearchBar'
import Logs from 'components/logs/Logs'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'
import './App.css'
import AddButton from 'components/layout/AddButton'
import AddLogModal from 'components/logs/AddLogModal'
import EditLogModal from 'components/logs/EditLogModal'
import AddTechModal from 'components/techs/AddTechModal'
import TechListModal from 'components/techs/TechListModal'
import store from './store'

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit()
  })

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddButton />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  )
}

export default App
