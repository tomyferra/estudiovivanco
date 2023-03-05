import React from "react";

import '../stylesheets/Navbar.css'

function Navbar () {
  return (
    <nav className="navbar fixed-top navbar-expand-md">
      <div className="container-fluid">
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
        <a className="navbar-brand" href="#home"><img className="navbar-brand" src={require('../images/LogoNegro.png')} alt="Logo Estudio Vivanco"></img></a>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href='#Members'>Miembros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href='#Tasks'>Tareas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href='#Memberships'>Membresias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href='#Contact'>Contactanos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;