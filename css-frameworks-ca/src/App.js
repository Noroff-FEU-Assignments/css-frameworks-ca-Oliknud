import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import Nav from './components/Nav.js';
import Carousel from './components/Carousel.js';
import Home from './components/Home';
import Accordion from './components/Accordion';
import Tabs from './components/HomeTabs';

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Home />
      <Accordion />
      <Tabs />
      
    </div>
  );
}

export default App;
