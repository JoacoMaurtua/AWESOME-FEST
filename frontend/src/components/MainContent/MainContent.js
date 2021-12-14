import React from 'react';
import './MainContent.scss';
import Navigation from '../Navigation/Navigation';
import SmallHeading from '../SmallHeading/SmallHeading';
import work from '../../images/work.png';

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vero id unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem. 
                Cumque obcaecati sint officiis quis laboriosam vitae.
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
