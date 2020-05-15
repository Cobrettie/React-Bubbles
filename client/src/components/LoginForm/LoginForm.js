import React from 'react';

class LoginForm extends React.Component {
  render() {
    return(
      <div>
        <h2>Log in</h2>

        <div>
          <form>
            <input 
              type='text'
              name='username'
              placeholder='username'
            />

            <input 
              type='password'
              name='password'
              placeholder='password'
            />
          </form>
        </div>

      </div>
    )
  }
}

export default LoginForm