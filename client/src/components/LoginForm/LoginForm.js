import React from 'react';

import { axiosWithAuth } from '../../util/axiosWithAuth';

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: 'Lambda School',
      password: 'i<3Lambd4'
    },
    isLoading: false
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
    event.preventDefault()
    this.setState({ isLoading: true })
    axiosWithAuth()
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(response => {
        window.localStorage.setItem('token', response.data.payload)
        setTimeout(() => {
          this.setState({ isLoading: false })
          this.props.history.push('/bubblepage')
        }, 500)
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        <h2>Log in</h2>

        <div>
          <form onSubmit={this.login}>
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

            <button type='submit'>Log In</button>
          </form>
        </div>

      </div>
    )
  }
}

export default LoginForm