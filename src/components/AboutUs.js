import React from "react";
import '../stylesheets/AboutUs.css';
import Member from '../images/Avatar.png';
import Esteban from '../images/EstebanVivanco.webp';
import Ezequiel from '../images/EzequielVivanco.webp';
import SingleMember from "./SingleMember";

function AboutUs() {

  const descripcionJorge="Fundo la firma en 1978. El ha publicado numerosos articulos...";
  const descripcionEsteban="descripcion...descripcion...descripcion...descripcion...descripcion...";
  const descripcionEzequiel="descripcion...descripcion...descripcion...descripcion...descripcion...";

  return (
    <div id="home" className="AboutUs">
      <div class="container-fluid my-5 text-center">
        <div className="card card-container flex-row ">
          <div class="col-lg-12">
            <h1 className="text-about-us">La Firma</h1>
            <p className="text-justify">Desde su fundación en 1978, la firma ha dedicado sus actividades exclusivamente al ajuste de siniestros relativos a cascos y al envió de carga, vía aérea, terrestre, marítima o fluvial. A lo largo de los años se han atendido más de 25.000 reclamos relacionados con Embarques de Carga y unos 3.000 reclamos relacionados con Cascos y Avería Gruesa.</p>
            <p className="text-justify">En la actualidad hay dos socios, los cuales participan activamente en el funcionamiento diario de la oficina. Según lo exige la legislación argentina, cada socio está autorizado por la Superintendencia Nacional de Seguros como Ajustador de Averías reconocido.</p>
            <p className="text-justify">Desde 1999, los Socios son Miembros de la <b>“Association Mondiale de Dispacheurs”</b> (Asociación Internacional de Ajustadores de Averías - ex <b>A.I.D.E.</b>)</p>
          </div>
        </div>
        <h3>Miembros</h3>
        <div className="row justify-content-center">
          <SingleMember name={"Jorge P. Vivanco"} position={"Fundador"} description={descripcionJorge} imgpath={Member} />
          <SingleMember name={"Esteban Vivanco"} position={"Presidente"} description={descripcionEsteban} imgpath={Esteban}/>
          <SingleMember name={"Ezequiel Vivanco"} position={"Socio"} description={descripcionEzequiel} imgpath={Ezequiel}/>
        </div>


        {/* Scroll down gif */}
      </div>
    </div>
  );
}

export default AboutUs;
