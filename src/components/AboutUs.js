import React from "react";
import '../stylesheets/AboutUs.css';
import Logo  from '../images/logo.svg';

function AboutUs() {
  return (
    <div id="home" className="AboutUs">
      <div class="container-fluid my-5 text-center">
        <div className="card card-container flex-row">
          <div className="col-lg-3 d-flex align-items-center">
            <img class="card-img-start rounded img-fluid" src={Logo} alt="wine cap" />  
          </div>
          <div class="col-lg-8">
            <h4>Liquidadores de Averías - Peritos - Consultores</h4>
            <p class="text-justify">Desde su fundación en 1978, la firma ha dedicado sus actividades exclusivamente al ajuste de siniestros relativos a cascos y al envió de carga, vía aérea, terrestre, marítima o fluvial. A lo largo de los años se han atendido más de 25.000 reclamos relacionados con Embarques de Carga y unos 3.000 reclamos relacionados con Cascos y Avería Gruesa.</p>
            <p className="text-justify">En la actualidad hay dos socios, los cuales participan activamente en el funcionamiento diario de la oficina. Según lo exige la legislación argentina, cada socio está autorizado por la Superintendencia Nacional de Seguros como Ajustador de Averías reconocido.</p>
            <p className="text-justify">Desde 1999, ambos Socios son Miembros de la <b>“Association Mondiale de Dispacheurs”</b> (Asociación Internacional de Ajustadores de Averías - ex <b>A.I.D.E.</b>) con sede en Bruselas. Participan activamente en las reuniones anuales de la asociación que se realizan en Europa, donde se tratan temas especialmente relacionados con Avería General, Riesgos y Coberturas de H&M.</p>
          </div>

        </div>
        <button type="button" class="btn btn-primary"><a href="mailto:vivanco@infovia.com.ar" className="social-media-links">Contactanos </a></button>
      </div>
    </div>
  );
}

export default AboutUs;
