import React from 'react';
import { Container, Table } from 'semantic-ui-react';

import Routes from './Routes';
import AppHeader from './components/header/AppHeader';

const App = () => (
      <div style={{ height: '100%', overflow: 'hidden' }}>
        <Table>
          <Table.Header style={{ width: '100%' }}>
            <AppHeader />
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                  <Container>
                    <Routes />
                  </Container>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
);

export default App;