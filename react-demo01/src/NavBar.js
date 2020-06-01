import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//nav.js


class NavBar extends Component {
  render() {
    return (
      <div>
        <div className='navigation-menu'>
          <NavLink to='/'>首页</NavLink>
          <NavLink to='/hello'>服务Item</NavLink>
        </div>
       </div>
    );
  }
}

export default NavBar;

