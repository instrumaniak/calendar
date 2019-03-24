import React from 'react'
import { Route } from 'react-router-dom'
import PageHome from './PageHome'
import PageAbout from './PageAbout'
import PageEventEdit from './PageEventEdit'

const Routes = () => (
  <div className='c-page-container'>
    <Route path='/' exact component={PageHome} />
    <Route path='/about' component={PageAbout} />
    <Route path='/event/:id' component={PageEventEdit} />
  </div>
)

export default Routes