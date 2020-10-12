import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Table, Container } from 'semantic-ui-react';

class DesktopHeader extends React.PureComponent {
    render() {
      console.log('this.props.activeItem', this.props.activeItem);
      let headerMenu = <Menu.Item name="signin" content="Sign In" active={this.props.activeItem === 'signin'} onClick={this.props.handleItemClick} as={Link} to="/signin" />;
      if (localStorage.getItem('token') !==  null) {
        headerMenu =  <Menu.Item name="home" active={this.props.activeItem === 'home'} onClick={this.props.handleItemClick} as={Link} to="/home" />;
      }
      return (
        <Table.Row style={this.props.rowStyle}>
          <Table.Cell style={{ padding: 0, marginTop: '-1px' }}>
            <Menu pointing secondary compact style={{ backgroundColor: 'white', width: '100%' }}>
              <Container style={{ height: '50px' }}>
               {headerMenu}
              </Container>
            </Menu>
          </Table.Cell>
        </Table.Row>
      );
    }
  }

  export default  DesktopHeader;
