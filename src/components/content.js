import React, { Component } from 'react';
import './content.scss';
import { Content, Container, Hero, HeroBody } from 'bloomer';
import { Home, Omne, Kontakt, Projekty } from '../pages/mainpages';
import { Route } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <Hero>
        <HeroBody>
          <Content>
            <Container className="clanek">
              <Route path="/" exact component={Home} />
              <Route path="/omne/" exact component={Omne} />
              <Route path="/kontakt/" exact component={Kontakt} />
              <Route path="/projekty/" exact component={Projekty} />
            </Container>
          </Content>
        </HeroBody>
      </Hero>
    );
  }
}
