import React from 'react';
import { withRouter } from 'react-router-dom';

import DesktopHeader from './DesktopHeader';

function determineMenuItem(url) {
  let active = 'signin';
  if (url.includes('/home')) { active = 'home'; }
  return active;
}

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    const active = determineMenuItem(props.location.pathname);
    this.state = {
      activeItem: active
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    const active = determineMenuItem(props.location.pathname);
    if (active !== state.activeItem) { return { activeItem: active }; }
    return null;
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    window.scrollTo(0, 0);
  }

  render() {
    const compStyle = {
      width: '100%', padding: '0', zIndex: 103, position: 'relative', right: '0', display: 'inline-grid'
    };

    return (
        <DesktopHeader
          rowStyle={compStyle}
          handleItemClick={this.handleItemClick}
          activeItem={this.state.activeItem}
          device={this.state.device}
        />
    );
  }
}

export default withRouter(AppHeader);
