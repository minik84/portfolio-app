import React from 'react'

import Header from './components/Header.jsx';
import Technologies from './components/Technologies/Technologies.jsx';
import Projects from './components/Projects/Projects.jsx';

import './css/style.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Technologies />
      <Projects />
      <div className="motto"></div>
      <div className="interests"></div>
      <div className="contact"></div>
      <footer className="footer"></footer>
    </div >
  );
}

export default App;
