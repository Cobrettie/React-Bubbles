import React from 'react';

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name] : event.target.value
      }
    })
  }

  login = event => {
    
  }

  render() {
    return(
      <div>
        <h2>Log in</h2>

        <div>
          <form>
            <input 
              type='text'
              name='username'
              onChange={this.handleChange}
              value={this.state.credentials.username}
              placeholder='username'
            />

            <input 
              type='password'
              name='password'
              onChange={this.handleChange}
              value={this.state.credentials.password}
              placeholder='password'
            />
          </form>
        </div>

      </div>
    )
  }
}

export default LoginForm