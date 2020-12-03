import React, { Component } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';

import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <Carousel/>
      </div>
    );
  }
}


export default App;