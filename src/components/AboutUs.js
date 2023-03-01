import React from "react";
import '../stylesheets/AboutUs.css';
// import Logo  from '../images/logo2.png';


function AboutUs() {
  return (
    <div id="home" className="AboutUs">
      <div class="container-fluid my-5 text-center">
        <div className="card card-container flex-row ">
          <div class="col-lg-12">
            {/* <img class="card-img-start rounded img-fluid" src={Logo} alt="wine cap" /> */}
            <h1 className="text-about-us">Estudio Vivanco</h1>
            <h4 className="text-about-us">Liquidadores de Averías - Peritos - Consultores</h4>
            <h5 class="text-justify">Fundada 1978, dedicados al ajuste de siniestros relativos a cascos y al envió de carga, vía aérea, terrestre, marítima o fluvial.</h5>
            {/* <h5 className="text-justify">En la actualidad hay dos socios, los cuales participan activamente en el funcionamiento diario de la oficina. Según lo exige la legislación argentina, cada socio está autorizado por la Superintendencia Nacional de Seguros como Ajustador de Averías reconocido.</h5> */}
            <h5 className="text-justify">Desde 1999, ambos Socios son Miembros de la <b>“Association Mondiale de Dispacheurs”</b> (Asociación Internacional de Ajustadores de Averías - ex <b>A.I.D.E.</b>)</h5>
          </div>

        </div>
        <button type="button" class="btn btn-primary"><a href="mailto:vivanco@infovia.com.ar" className="social-media-links">Contactanos </a></button>
      </div>
    </div>
  );
}

export default AboutUs;
