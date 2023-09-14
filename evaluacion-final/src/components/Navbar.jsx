import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink as RSNavLink } from 'reactstrap';

const AppNavbar = () => {

  return (
    <Navbar>
      <Nav>
        <NavItem>
          <RSNavLink><NavLink to='/home'>Home</NavLink></RSNavLink>
        </NavItem>
        <NavItem>
          <RSNavLink><NavLink to='/fav'>Favoritos</NavLink></RSNavLink>
        </NavItem>
        <NavItem>
          <RSNavLink><NavLink to='/details'>Detalle</NavLink></RSNavLink>
        </NavItem>
        <NavItem>
          <RSNavLink><NavLink to='/contact'>Contacto</NavLink></RSNavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default AppNavbar;