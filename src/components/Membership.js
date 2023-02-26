import React from "react";
import '../stylesheets/Membership.css';

function Membership () {
  return (
    <div className="Memberships" id="Memberships">
      <h2>Membresias Profesionales:</h2>
      <ul>
        <li><p>Asociación Argentina de Liquidadores y Peritos de Seguros (The Argentine Association of Insurance Adjusters and Surveyors.</p></li>
        <li><p><b>“Association Mondiale de Dispacheurs”</b> (Asociación Internacional de Ajustadores de Averías – ex AIDE).</p></li>
        <li><p>Asociación Argentina de Derecho Marítimo (The Argentine Maritime Law Association – C.M.I.).</p></li>
        <li><p>Servicios Internacionales Aliados.</p></li>
        <li><p>Instituto de Estudios Marítimos (The Institute of Maritime Studies).</p></li>
        <li><p>Ateneo del Transporte (Transport Atheneum).</p></li>
        <li><p>Liga Naval Argentina (The Argentine Naval League).</p></li>
        <li><p>Timón Club (The Tiller Club).</p></li>
      </ul>
    </div>
  );
}

export default Membership;