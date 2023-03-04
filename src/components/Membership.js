import React from "react";
import '../stylesheets/Membership.css';

function Membership ( {name, url} ) {
  return (
    <a className="Membership" href={url} target="_blank" rel="noreferrer">
      <div className="skill-style h-40">
        <div className="container h-40">
          <div className="card-body border rounded row">
            <h5 className="col text-center card-title">{name}</h5>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Membership;
