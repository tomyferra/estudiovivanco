import React from "react";
import '../stylesheets/SingleMember.css';

function SingleMember({ name, position, description, imgpath }){
  return(
    <div className="singleMember col-sm-3">
      <div className="card singleMemberCard h-100">
        {/* <div className="innerCard"> */}
          <img className="rounded-circle" src={imgpath} alt="" />
          <p className="paddingName"><b>{name}</b></p>
          <p>{position}</p>
          <p>{description}</p>
        {/* </div> */}
      </div>
    </div>
  );
}

export default SingleMember;