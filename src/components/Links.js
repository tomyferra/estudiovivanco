import React from "react";
import '../stylesheets/Links.css';
import '../App.css';
import Linksto from "./LinkTo";

function Links () {
  return(
    <footer id="Contact" className="container-fluid links-container mt-auto">
      <div className="container">
        <div className="col-sm social-media ">
          <div className="row text-center align-middle">
            <Linksto classText="bi bi-envelope" url="mailto:vivanco@infovia.com.ar" Text="Email"/>
            <Linksto classText="bi bi-building" url="https://goo.gl/maps/7BCE5kQ4vREqHekM7" Text="Maipú 26 Piso 10º (C1084AAB) Buenos Aires - Argentina"/>
            <Linksto classText="bi bi-whatsapp" url="https://wa.me/5491154700070" Text="Whatsapp"/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Links;