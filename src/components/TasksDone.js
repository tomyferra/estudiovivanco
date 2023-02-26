import React from "react";
import '../stylesheets/TasksDone.css';

function TasksDone () {
  return(
    <div className="tasksDone" id="Tasks">
      <h2>Principales Tareas realizadas en material de Riesgos de Transporte – H&M & Cargo:</h2>
      <ul>
        <li><p>Relevamientos y Ajustes de Siniestros de Transporte (marítimo, aéreo, terrestre y fluvial).</p></li>
        <li><p>Manejo general de siniestros de Casco y Avería general.</p></li>
        <li><p>Controles de precarga.</p></li>
        <li><p>Control de descarga de Mercaderías a Granel (Sólidos y Líquidos).</p></li>
        <li><p>Control de descarga de bultos, autos y contenedores.</p></li>
        <li><p>Control de operaciones de Transbordo.</p></li>
        <li><p>Acciones preventivas y determinación de responsabilidades en caso de daños.</p></li>
        <li><p>Acciones de recuperación contra los responsables por perdidas.</p></li>
        <li><p>Consultoria general en material de transporte.</p></li>
      </ul>
    </div>
  );
}

export default TasksDone;