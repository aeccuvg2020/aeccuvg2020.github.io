import React, { Component } from 'react';
import ReactHoverObserver from 'react-hover-observer';
import './styles.css';

const Item = ({ resumeData }) => (
    <div className="col-md-3  col-sm container">
        <img src={resumeData.imgurl} alt={resumeData.alt} className="img-fluid" />
        <div className="overlay" style={{ display: 'flex', flexDirection: "column", textAlign: 'center' }}>
            <label className="title d-flex justify-content-center">{resumeData.name}</label>
            <p className="text">{resumeData.description}</p>
        </div>
    </div>
);

export default Item;



