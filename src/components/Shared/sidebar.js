import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../../../assets/style/sidebar.css';

export default class Sidebar extends Component {
  render() {
      return (
          <div id="mySidenav" className="sidenav" style={{'width': this.props.sidebarWidth}}>
              {this.props.navItems.map(item => {
                  return <Link to={item.key} key={item.key}><Icon name={item.icon} />{item.name}</Link>
              })}
          </div>
        );
    }
}