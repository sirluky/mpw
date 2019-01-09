import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  // NavRight,
  // NavbarItem,
  // NavbarBrand,
  Container,
  NavbarMenu,
  NavbarEnd,
  Tabs,
  Tab,
  // MenuLink,
} from 'bloomer';

export default class Navigace extends Component {
  render() {
    return (
      <Navbar>
        <Container>
          <NavbarMenu isActive>
            <NavbarEnd>
              <Tabs tag="ul">
                <Tab>
                  <NavLink to="/">Domů</NavLink>
                </Tab>
                <Tab>
                  <NavLink to="/omne/">O mně</NavLink>
                </Tab>
                <Tab>
                  <NavLink to="/projekty/">Projekty</NavLink>
                </Tab>
                <Tab>
                  <NavLink to="/kontakt/">Kontakt</NavLink>
                </Tab>
              </Tabs>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
    );
  }
}
