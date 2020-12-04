import React, { Component } from 'react';
import './styles.css';
import Item from '../Item';

export default class Portfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio">
                <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column portfolioTitle">
                        <h1 className="d-flex justify-content-center">Actividades Realizadas</h1>
                    </div>
                    <div className="d-flex flex-column portfolioContainer">
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center flex-wrap">
                                <Item resumeData={resumeData.activities[0]}/>
                                <Item resumeData={resumeData.activities[1]}/>
                                <Item resumeData={resumeData.activities[2]}/>
                                <Item resumeData={resumeData.activities[3]}/>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center flex-wrap">
                                <Item resumeData={resumeData.activities[4]}/>
                                <Item resumeData={resumeData.activities[5]}/>
                                <Item resumeData={resumeData.activities[6]}/>
                                <Item resumeData={resumeData.activities[7]}/>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center flex-wrap">
                                <Item resumeData={resumeData.activities[8]}/>
                                <Item resumeData={resumeData.activities[9]}/>
                                <Item resumeData={resumeData.activities[10]}/>
                            </div>
                        </div>
                    </div>    
                </div>
            </section>
        );
    }
}