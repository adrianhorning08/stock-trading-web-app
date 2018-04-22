import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/dashboard');
    }
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.setState({username: '', password: ''}));
  }

  render() {
    let text = this.props.formType === 'login' ? 'Log In' : 'Sign Up';
    let newPath = this.props.formType === 'login' ? '/signup' : '/login';
    let textToNewPath = this.props.formType === 'login' ? 'Sign Up' : 'Log In';
    let footerText;

    if (this.props.formType === 'login') {
      footerText = "Don't have an account?";
    } else {
      footerText = "Already have an account?";
    }

    return (
      <div className="auth-page">
        <div className="site-title">
          <Link to="/"><h1>vinyasa</h1></Link>
        </div>
        <div className="auth-form-container">
          <div className="login-title">
            <h1>{text}</h1>
          </div>

          <form onSubmit={this.handleSubmit} className="auth-form">
            <div className="form-input">
              <label>Username
                <br/>
                <input
                  type='text'
                  value={this.state.username}
                  onChange={this.update('username')}
                  />
              </label>
          </div>
          <br/>
          <div className="form-input">
            <label>Password
              <br/>
              <input
                type='password'
                value={this.state.password}
                onChange={this.update('password')}
                />
            </label>
          </div>
            <br/>
            <button>{text}</button>
            <br/>
          </form>
      </div>

      <div className="auth-footer">
        <span>{footerText}</span>
        <Link to={newPath}>{textToNewPath}</Link>
      </div>
    </div>
    );
  }
}

export default Landing;
