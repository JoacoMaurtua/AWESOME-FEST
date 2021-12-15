import React from 'react';
import './MainContent.scss';
import Navigation from '../Navigation/Navigation';
import SmallHeading from '../SmallHeading/SmallHeading';
import work from '../../images/work.svg';

const Maincontent = () => {
  return (
    <div className="MainContent-container">
      <Navigation/>
      <div className="content">
        <div className="left">
          <SmallHeading title={'¡El mundo necesita personas como tú!'} identifier={'Before'}/>

          <h1>
              Filtramos empleos tecnológicos para tí <span className='Text'>¡Que esperas!</span> 
          </h1>
          <p>
              En Get on Board podrás postular a trabajos exclusivos y cuidadosamente seleccionados en startups y empresas tecnológicas de todo el mundo.
          </p>
        </div>
        <div className="right">
          <img src={work} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;
