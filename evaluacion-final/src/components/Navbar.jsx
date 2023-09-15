import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink as RSNavLink } from "reactstrap";

const AppNavbar = () => {
  return (
    <Navbar>
      <Nav>
        <NavItem>
          <RSNavLink>
            <NavLink exact to="/home">
              Home
            </NavLink>
          </RSNavLink>
        </NavItem>
        <NavItem>
          <RSNavLink>
            <NavLink exact to="/fav">
              Favoritos
            </NavLink>
          </RSNavLink>
        </NavItem>
        <NavItem>
          <RSNavLink>
            <NavLink exact to="/details">
              Detalle
            </NavLink>
          </RSNavLink>
        </NavItem>
        <NavItem>
          <RSNavLink>
            <NavLink exact to="/contact">
              Contacto
            </NavLink>
          </RSNavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
