import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingContainer from './landing/landing_container';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (

<div>
  <Switch>
    <AuthRoute exact path ="/" component={LandingContainer}/>
    <AuthRoute exact path ="/login" component={LandingContainer}/>
    <AuthRoute exact path ="/signup" component={LandingContainer}/>
    <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
  </Switch>
</div>
);

export default App;
