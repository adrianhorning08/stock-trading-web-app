import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (

<div>
  <Switch>
    <Route exact path ="/">HI</Route>
    <Redirect to='/'/>
  </Switch>
</div>
);

export default App;
