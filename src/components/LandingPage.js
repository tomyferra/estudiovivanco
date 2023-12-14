import React from "react";
import '../stylesheets/LandingPage.css';
import Logo  from '../images/LogoNegro.png';


function LandingPage() {
  return (
    <div id="home" className="LandingPage">
      <div class="container-fluid my-5 text-center">
        <div className="card card-container">
          <div class="col-lg-12">
            <img class="card-img-start-landing rounded img-fluid" src={Logo} alt="wine cap" />

            <h4 className="text-about-us">Liquidadores de Averías - Peritos - Consultores</h4>
          </div>
        </div>
        <button type="button" class="btn btn-primary"><a href="mailto:vivanco@infovia.com.ar" className="social-media-links">Contactanos </a></button>
        <div className="padding-separator"></div>
        <div class="arrow bounce">
          <p className="scroll-down">Scroll Down</p>
          <i class="bi bi-arrow-down scroll-down" ></i>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
