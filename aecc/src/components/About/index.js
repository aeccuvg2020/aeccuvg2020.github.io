import React, { Component } from 'react';

import './styles.css';
export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="d-flex flex-column justify-content-center aboutUsContainer" name="about">
                    <div className="d-flex flex-column teamTitle">
                        <h1 className="d-flex justify-content-center">Acerca de nostros</h1>
                        <div className="aboutUs-text">
                            <p className="text-center">
                                Estudiantes de Ciencias de la Computación y TI de la Universidad del Valle de Guatemala.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-column mision-vision">
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center flex-wrap ">
                                <div className="col-md-5  col-sm mision-container">
                                    <h3 className="d-flex justify-content-center">Misión</h3>
                                    <p className="text-justify">
                                        Trabajar en conjunto con estudiantes y autoridades para la implementación 
                                        de medidas que mejoren la calidad de vida estudiantil en la universidad.
                                    </p>
                                </div>
                                <div className="col-md-5  col-sm vision-container">
                                    <h3 className="d-flex justify-content-center">Visión</h3>
                                    <p className="text-justify">
                                        Crear y mantener un ambiente propicio para el aprendizaje, en el 
                                        cual se fomente la convivencia y el trabajo multidisciplinario.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}