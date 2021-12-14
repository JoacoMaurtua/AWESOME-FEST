import React from 'react';
import './MainArea.scss';
import business from '../../images/world.mp4';
import { InnerLayout } from '../Layouts';
import circles from '../../images/circles.svg';
import MainContent from '../MainContent/MainContent';

const Mainarea = () => {
  return (
    <div className="MainArea-section">
      <video src={business} muted playsInline autoPlay loop></video>
      <img src={circles} alt="circle" className="overlay"/>
      <InnerLayout>
        <MainContent/>
      </InnerLayout>
    </div>
  );
}

export default Mainarea;
