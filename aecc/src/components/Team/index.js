import React, { Component } from 'react';
import './styles.css';

export default class Team extends Component {
  render() {
    return (
      <section>    
        <div className="d-flex flex-column justify-content-center" name="team">
        <div className="d-flex flex-column teamTitle">
            <h1 className = "d-flex justify-content-center">Nuestro Equipo</h1>
        </div>
        <div className = "d-flex flex-column teamContainer">
            <div className="container-fluid">
                <div className = "row d-flex justify-content-center flex-wrap">
                    <div className = "col-md-3  col-sm">
                        <img src={"images/team/Garoz.jpg"} className="img-fluid" alt="Presidente"/>
                        <div style={{display: 'flex', flexDirection:"column", textAlign: 'center'}}>
                            <label className="lblName">Rodrigo Arnoldo Garoz de la Cruz</label>
                            <label className="lbl">Presidente</label>
                        </div>
                    </div>
                    <div className = "col-md-3  col-sm">
                        <img src={"images/team/Camila.jpg"} className="img-fluid" alt="Vicepresidente"/>
                        <div style={{display: 'flex', flexDirection:"column", textAlign: 'center'}}>
                            <label className="lblName">Paula Camila González Ortega</label>
                            <label className="lbl">Vicepresidente</label>
                        </div>
                    </div>
                    <div className = "col-md-3  col-sm">
                        <img src={"images/team/MariaInes.jpg"} className="img-fluid" alt="Secretaria"/>
                        <div style={{display: 'flex', flexDirection:"column", textAlign: 'center'}}>
                            <label className="lblName">María Inés Vásquez Figueroa</label>
                            <label className="lbl">Secretaria</label>
                        </div>
                    </div>
                    <div className = "col-md-3  col-sm">
                        <img src={"images/team/Diana.jpg"} className="img-fluid" alt="Tesorera"/>
                        <div style={{display: 'flex', flexDirection:"column", textAlign: 'center'}}>
                            <label className="lblName">Diana Ximena de León Figueroa</label>
                            <label className="lbl">Tesorera</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className = "row d-flex justify-content-center flex-wrap ">
                    <div className = "col-md-3  col-sm">
                        <img src={"images/team/Marco.jpg"} className="img-fluid" alt="Vocal I"/>
                        <div style={{display: 'flex', flexDirection:"column", textAlign: 'center'}}>
                            <label className="lblName">Marco José Fuentes Lima</label>
                            <label className="lbl">Vocal I</label>
                        </div>
                    </div>
                    <div className = "col-md-3  col-sm">
                        <img src={"images/team/Roberto.jpg"} className="img-fluid" alt="Vocal II"/>
                        <div style={{display: 'flex', flexDirection:"column", textAlign: 'center'}}>
                            <label className="lblName">Hernán Roberto Figueroa Pérez</label>
                            <label className="lbl">Vocal II</label>
                        </div>
                    </div>
                    <div className = "col-md-3  col-sm">
                        <img src={"images/team/Cristina.jpg"} className="img-fluid" alt="Vocal III"/>
                        <div style={{display: 'flex', flexDirection:"column", textAlign: 'center'}}>
                            <label className="lblName">Cristina María Bautista Silva</label>
                            <label className="lbl">Vocal III</label>
                        </div>
                    </div>
                    <div className = "col-md-3  col-sm">
                        <img src={"images/team/Diego.jpg"} className="img-fluid" alt="Vocal IV"/>
                        <div style={{display: 'flex', flexDirection:"column", textAlign: 'center'}}>
                            <label className="lblName">Diego Francisco Estrada Moreira</label>
                            <label className="lbl">Vocal IV</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className = "row d-flex justify-content-center flex-wrap ">
                    <div className = "col-md-3  col-sm">
                        <img src={"images/team/Chan.jpg"} className="img-fluid" alt="Vocal V"/>
                        <div style={{display: 'flex', flexDirection:"column", textAlign: 'center'}}>
                            <label className="lblName">Michael Steven Chan González</label>
                            <label className="lbl">Vocal V</label>
                        </div>
                    </div>
                    <div className = "col-md-3  col-sm">
                        <img src={"images/team/Gus.jpg"} className="img-fluid" alt="Vocal VI"/>
                        <div style={{display: 'flex', flexDirection:"column", textAlign: 'center'}}>
                            <label className="lblName">Gustavo Andrés Méndez Pinto</label>
                            <label className="lbl">Vocal VI</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    );
  }
}