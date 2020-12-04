import React, { Component } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Team from './components/Team';
import About from './components/About';

import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <Carousel/>
        <About />
        <Team/>
      </div>
    );
  }
}


export default App;