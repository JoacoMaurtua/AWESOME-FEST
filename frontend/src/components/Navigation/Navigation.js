import React from 'react';
import './Navigation.scss';
import logo from '../../images/logo.png';

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>

      <ul className="nav-items">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#explore">Categorias</a>
        </li>
        <li>
          <a href="#stats">Empleos</a>
        </li>
        <li>
          <a href="#resources">Contacto</a>
        </li>

        <div className="primary-btn">EMPIEZA YA!</div>
      </ul>
    </nav>
  );
}

export default Navigation;
