import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'semantic-ui-react';

const SignIn = ({ history }) => {
    const [authData, setAuthData] = useState({email: '', password: ''});

    const onSignIn = (event) => {
        /// event.preventDefault();
        const graphqlQuery = {
          query: `
            {
              signIn(email: "${authData.email}", password: "${authData.password}") {
                bearer
                userId
              }
            }
          `
        };

        fetch('http://localhost:8080/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(graphqlQuery)
        })
        .then(res => {
          return res.json();
        })
        .then(resData => {
            if (resData.errors && resData.errors[0].status === 422) {
              throw new Error(
                "Validation failed. Make sure the email address isn't used yet!"
              );
            }
            if (resData.errors) {
              throw new Error('User login failed!');
            }
            console.log('resData', resData);
            localStorage.setItem('token', resData.data.signIn.bearer);
            history.push('./home')
          })
          .catch(err => {
            console.log(err);
          });
    };

  return (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-email'
        required
        control={Input}
        label='Email'
        placeholder='demo@demo.com'
        error={ authData.email.trim() === '' ? 'Email is required!' : false }
        onChange={e => setAuthData({...authData, email: e.target.value})}
      />
      <Form.Field
        id='form-input-control-password'
        required
        control={Input}
        type="password"
        label='Password'
        placeholder='Password'
        error={ authData.password.trim() === '' ? 'Password is required!' : false }
        onChange={e => setAuthData({...authData, password: e.target.value})}
      />
    </Form.Group>
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Sign In'
      onClick={(e) => onSignIn(e)}
    />
  </Form>
  );
}

export default withRouter(SignIn);
