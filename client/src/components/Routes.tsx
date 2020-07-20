import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import PageHomeContainer from '../containers/PageHomeContainer'
import PageAbout from './PageAbout'
import PageEventEdit from './PageEventEdit'

const Routes = () => (
  <Fragment>
    <Route path="/" exact component={PageHomeContainer} />
    <Route path="/about" component={PageAbout} />
    <Route path="/event/:id" component={PageEventEdit} />
  </Fragment>
)

export default Routes
