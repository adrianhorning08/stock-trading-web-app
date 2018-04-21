import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Landing } from './landing';

const App = () => (

<div>
  <Switch>
    <Route exact path ="/" component={Landing}/>
    <Redirect to='/'/>
  </Switch>
</div>
);

export default App;
