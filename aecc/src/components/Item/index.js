import React, { Component } from 'react';
import ReactHoverObserver from 'react-hover-observer';
import './styles.css';

const Example = ({ resumeData }) =>(
    <div className="example">
      <ReactHoverObserver {...{
        className: 'example__observer',
        onMouseOver: ({ e, setIsHovering, unsetIsHovering }) => {
          if (e.target.className === 'example__child') {
            unsetIsHovering();
          } else {
            setIsHovering();
          }
        }
      }}>
        <Activity resumeData={resumeData}/>
      </ReactHoverObserver>
    </div>
);
  
const Activity = ({ isHovering = false, resumeData }) => (
    <div className="example__label">
      { isHovering ? 
        <div>
            hola
        </div>
        : 
        <img src={resumeData.imgurl} className="img-fluid" alt={resumeData.alt} />
      }
     </div>
);

export default Example;