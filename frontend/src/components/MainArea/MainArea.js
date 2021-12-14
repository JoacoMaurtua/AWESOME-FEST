import React from 'react';
import './MainArea.scss';
import business from '../../images/world.mp4';
import { InnerLayout } from '../Layouts';
import circles from '../../images/circles.svg';

const Mainarea = () => {
  return (
    <div className="MainArea-section">
      <video src={business} muted playsInline autoPlay loop></video>
      <img src={circles} alt="circle" className="overlay"/>
    </div>
  );
}

export default Mainarea;
