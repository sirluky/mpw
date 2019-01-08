import React, { Component } from 'react';
import {
  Navbar,
  NavRight,
  NavbarItem,
  NavbarBrand,
  Container,
  NavbarMenu,
  NavbarEnd,
  Tabs,
  Tab,
} from 'bloomer';

export default class Navigace extends Component {
  render() {
    return (
      <Navbar style={{ position: 'absolute', right: '10%' }}>
        <NavbarMenu>
          <NavbarEnd>
            <Tabs tag="ul">
              <li>
                <a href="#">Domů</a>
              </li>
              <li>
                <a href="#omne">O mně</a>
              </li>
              <li>
                <a href="#projekty">Projekty</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </Tabs>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}
