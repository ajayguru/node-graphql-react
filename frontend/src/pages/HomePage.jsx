import React from 'react';
import { Redirect } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

const HomePage = () => {
  if (localStorage.getItem('token') === null) {
    return <Redirect to="/signin" />;
  }
  return (
  <Segment>
  <h2>Home Page</h2>
</Segment>
  );
};

export default HomePage;
