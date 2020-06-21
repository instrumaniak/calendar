import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../components/Routes'
import NavBar from '../components/NavBar'
import { configureStore } from '../store'

// global styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </Provider>
    )
  }
}

export default App
