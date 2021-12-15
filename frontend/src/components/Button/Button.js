import React from 'react';
import './Button.scss';

const Button = ({filter,button}) => {
  return (
    <div className ="buttons-container">
      {
        button.map((button,index)=>{
          return <button key={index} onClick={()=>filter(button)} className="button-container">
            {button}
          </button>
        })
      }
    </div>
  );
}

export default Button;
