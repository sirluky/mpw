import React, { Component } from 'react';
import Navbar from './navbar';
import './header.scss';
import {
  Hero,
  HeroBody,
  Title,
  Subtitle,
  HeroHeader,
  HeroFooter,
} from 'bloomer';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Hero isColor="primary" isPaddingless isMarginless>
            <HeroHeader />
            <HeroBody>
              <Title>MPW</Title>
              <Subtitle>Můj Programovací Web</Subtitle>
            </HeroBody>
            <Navbar />
          </Hero>
        </header>
      </div>
    );
  }
}
