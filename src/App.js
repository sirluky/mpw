import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
