import React, { Component } from 'react';
import { Title } from 'bloomer';
export default class omne extends Component {
  render() {
    return (
      <div className="omne">
        <Title>O mně</Title>
        <p>
          Moje celé jméno je Lukáš Kovář, narodil jsem se 14.3.2001 a zajímá mě
          programování. Je mi{' '}
          {new Date().getFullYear() -
            2002 +
            (new Date().getMonth() > 3 ? 1 : 0)}{' '}
          let a studuji na VDA v České Třebové obor informační technologie.
          Odkaz na webove stranky školy <a href="http://vda.cz/">zde</a>.
          Předtím jsem chodil na Gymnazium Česká Třebová, ale kvůli tomu že se
          hodně věnuju počítačům jsem se rozhodl jit na školu se zaměřením. Mým
          koníčkem je programování, chtěl bych aby tím bylo i moje budoucí
          zaměstnání.
        </p>
      </div>
    );
  }
}
