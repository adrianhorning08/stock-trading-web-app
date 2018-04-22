import React from 'react';

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <h1>Dash</h1>
        Search for a stock
        <input></input>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;
