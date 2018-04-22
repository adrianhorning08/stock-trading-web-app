import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingContainer from './landing/landing_container';

const App = () => (

<div>
  <Switch>
    <Route exact path ="/" component={LandingContainer}/>
    <Redirect to='/'/>
  </Switch>
</div>
);

export default App;
