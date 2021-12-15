import React from 'react';
import './Button.scss';

const Button = ({filtered,button}) => {
  return (
    <div className ="buttons-container">
      {
        button.map((button,index)=>{
          return <button key={index} onClick={()=>filtered(button)} className="button-container">
            {button}
          </button>
        })
      }
    </div>
  );
}

export default Button;
