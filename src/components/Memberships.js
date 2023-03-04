import React from "react";
import '../stylesheets/Membership.css';
import { MembershipData } from './MembershipData.js';
import Membership from "./Membership";

function Memberships () {
  return (
    <div className="Memberships text-center" id="Memberships">
      <h2>Membresias Profesionales</h2>

      <div className="container">
        <div className="row membership-container">
          {MembershipData.map( (membership) => (
              <div className="col col-md-4 skill-style">
                <Membership name={membership.name} url={membership.url} identifier={membership.id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Memberships;