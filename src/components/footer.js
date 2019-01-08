import React, { Component } from 'react';
import './footer.scss';
import { Footer, Hero } from 'bloomer';
export default class paticka extends Component {
  render() {
    return (
      <footer>
        <Footer hasTextAlign="centered">Tohle je patička webu.</Footer>
      </footer>
    );
  }
}
