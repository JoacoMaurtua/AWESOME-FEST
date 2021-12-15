import React from 'react';
import './SmallHeading.scss';

const Smallheading = ({title,identifier}) => {
  return (
    <div className="SmallHeading-container">
      <h3 className={identifier}>{title}</h3>
    </div>
  );
}

export default Smallheading;
