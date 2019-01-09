import React, { Component } from 'react';
import { Title } from 'bloomer';
export default class kontakt extends Component {
  render() {
    return (
      <div className="kontakt">
        <Title>Kontakt</Title>
        <p>
          V případě že máte jakýkoliv dotaz, nebo máte zájem o vytvoření Webové
          stránky napište mi na E-Mail:{' '}
          <a href="mailto:lkov@post.cz">lkov@post.cz</a>
        </p>
      </div>
    );
  }
}
