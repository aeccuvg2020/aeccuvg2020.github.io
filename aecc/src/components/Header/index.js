import React, { Component } from 'react';
import './styles.css'
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
        <nav id="nav-wrap" className="opaque">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a href="#home">Inicio</a></li>
            <li><a href="#about">Acerca de nosotros</a></li>
            <li><a href="#team">Equipo</a></li>
            <li><a href="#portfolio">Actividades</a></li>
          </ul>
        </nav>
      </header>
      </React.Fragment>
    );
  }
}