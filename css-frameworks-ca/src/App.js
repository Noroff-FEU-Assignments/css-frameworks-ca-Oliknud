import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import Nav from './components/Nav.js';
import Carousel from './components/Carousel.js';
import Home from './components/Home';
import Accordion from './components/Accordion';
import Tabs from './components/HomeTabs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Home />
      <Accordion />
      <Tabs />
      <Footer />
    </div>
  );
}

export default App;
