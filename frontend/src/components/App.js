import React, { Component } from 'react'
import Routes from './Routes'
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Routes />
      </div>
    )
  }
}

export default App