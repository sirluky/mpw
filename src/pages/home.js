import React, { Component } from 'react';
import { Title } from 'bloomer';
export default class home extends Component {
  render() {
    return (
      <div className="domu">
        <Title>Vítej</Title>
        <p>Toto je můj osobní web.</p>
        <p>
          Web běží na webovém frameworku{' '}
          <a href="https://reactjs.org/">React.js</a>. Pro jednodušší desing
          jsem použil CSS framework <a href="https://bulma.io/">Bulma</a> a
          využívám webový hosting na <a href="https://netlify.com">Netlify</a>.
        </p>
        <p>
          Můžete také navštívit můj{' '}
          <a href="https://github.com/sirluky/mpw">Github</a> , kde najdete
          zdrojové kódy tohoto webu.
        </p>
        <p>Tato stránka se bude dále vyvíjet.</p>
      </div>
    );
  }
}
