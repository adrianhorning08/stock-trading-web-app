import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockName: ''
    };
    this.searchForStock = this.searchForStock.bind(this);
  }

  update() {
    return e => {
      this.setState({stockName: e.target.value});
    };
  }

  searchForStock(e) {
    e.preventDefault();
    this.props.fetchStock(this.state.stockName);
  }

  render() {
    return (
      <div>
        <h1>Dash</h1>
        Search for a stock
        <input
          type='text'
          value={this.state.stockName}
          onChange={this.update('stockName')}
          />
        <button onClick={this.searchForStock}>Check stock</button>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;
