import React from 'react';
import { Segment } from 'semantic-ui-react';

import SignIn from '../components/user/SignIn';

const SignInPage = () => (
      <>
        <Segment>
          <h2>Sign In</h2>
        </Segment>
        <SignIn />
      </>
);

export default SignInPage;
