import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingContainer from './landing/landing_container';
import DashboardContainer from './dashboard/dashboard_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let logOutButton = this.props.loggedIn ?
                      <button onClick={this.props.logout}>Logout</button>
                      : null;
    return (
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          {logOutButton}
        </nav>
        <Switch>
          <AuthRoute exact path ="/" component={LandingContainer}/>
          <AuthRoute exact path ="/login" component={LandingContainer}/>
          <AuthRoute exact path ="/signup" component={LandingContainer}/>
          <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
          <Redirect to="/" component={LandingContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
