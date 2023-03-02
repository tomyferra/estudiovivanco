import '../stylesheets/Members.css';
import Member from '../images/Avatar.png';
import Esteban from '../images/EstebanVivanco.png';
import Ezequiel from '../images/EzequielVivanco.png';

function Members() {
  return (

      <div id="Members" className="Members">
        <h1 className='text-center'>Miembros</h1>
        <div className="Member">
          <div class="container-fluid my-5 text-center">
            <div className="card card-container justify-content-center flex-row">
              <div className="col-lg-3 d-flex align-items-center">
                <img class="card-img-start  min-height-50 max-height-300 rounded-circle img-fluid" src={Member} alt="wine cap" />  
              </div>
              <div class="col-lg-8 d-flex flex-column align-items-center justify-content-center">
                <h4 >Jorge P. Vivanco</h4>
                <p class="text-justify">Fundó la firma en 1978</p>
                <p className="text-justify">Él ha publicado numerosos artículos y trabajos sobre diversos temas relacionados con los seguros marítimos, siendo el último en julio del 2005 sobre la aplicación y el impacto de las Reglas de York- Amberes de 2004. También participa regularmente de seminarios y debates sobre Seguros Marítimos.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Member">
          <div class="container-fluid my-5 text-center">
            <div className="card card-container justify-content-center flex-row">
              <div class="col-lg-8 d-flex flex-column align-items-center justify-content-center">
                <h4>Esteban A. Vivanco</h4>
                <p class="text-justify">Esteban Vivanco ingresó a la firma en 1982 y se convirtió en socio en 1987.</p>
                <p className="text-justify">Desde 2005, el Sr. Esteban A. Vivanco es el representante de Argentina en la <b>A.I.D.E. - “Association Internationale des Dispacheurs Europèens”</b> (La Asociación Internacional de Liquidadores de Averia Grusa) actualmente <b>AMD - “Association Mondiale de Dispacheurs”</b>.</p>
                <p className="text-justify"><b>Fue elegido miembro de la Comisión Gestora, posteriormente Tesorero, Vicepresidente y desde 2021 Presidente de la Asociación.</b></p>
                <p className="text-justify">En 2007, ingresó al <b>Instituto Iberoamericano de Derecho Marítimo</b> (Iberoamerican Maritime Law Institute) y desde el 2015 es Miembro del Consejo de la filial Argentina de este organismo, participando en los eventos propuestos por el IIDM.</p>
                <p className="text-justify">Desde 2012 forma parte del grupo de trabajo del <b>CMI</b> (Comité Marítimo Internacional) para crear un Nuevo conjunto de Reglas de AG, las cuales fueron aprobadas en la Asamblea CMI celebrada en New York en 2016</p>
                <p className="text-justify">Es Profesor de Seguro Marítimo de la Maestría en Seguros dictada por la Universidad Nacional del Sur.</p>
                <p className="text-justify">Es Miembro Extranjero de la Association of Average Adjusters of the United States & Canada <b>(Asociación de Tasadores de Averías de Estados Unidos y Canadá)</b>, Suscriptor de la <b>Association of Average Adjusters (UK)</b> (Asociación de Tasadores de Averías de Reino Unido) y Miembro Titulas de la <b>AELA (Spanish Association of Average Adjusters)</b> (Asociación Española de Tasadores de A verías).</p>
              </div>
              <div className="col-lg-3 d-flex align-items-center">
                <img class="card-img-start min-height-50 max-height-300 rounded-circle img-fluid" src={Esteban} alt="wine cap" />  
              </div>
            </div>
          </div>
        </div>
        <div className="Member">
          <div class="container-fluid my-5 text-center">
            <div className="card card-container justify-content-center flex-row">
              <div className="col-lg-3 d-flex align-items-center">
                <img class="card-img-start min-height-50 max-height-300 rounded-circle img-fluid" src={Ezequiel} alt="wine cap" />  
              </div>
              <div class="col-lg-8 d-flex flex-column align-items-center justify-content-center">
                <h4>Ezequiel Vivanco</h4>
                <p class="text-justify">descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... </p>
                <p className="text-justify">descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... descripcion... </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Members;
