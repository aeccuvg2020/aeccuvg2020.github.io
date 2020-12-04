import React, { Component } from 'react';
import ReactHoverObserver from 'react-hover-observer';
import './styles.css';

const Example = ({ resumeData }) => (
    <div className="col-md-3  col-sm container">
        <img src={resumeData.imgurl} alt={resumeData.alt} className="img-fluid image" />
        <div className="overlay">
            <label className="title">{resumeData.name}</label>
            <p className="text">{resumeData.description}</p>
        </div>
    </div>
);

export default Example;



