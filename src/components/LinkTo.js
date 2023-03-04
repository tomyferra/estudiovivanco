import React from "react";
import '../stylesheets/Links.css';

function Linksto ( {classText , Text, url} ) {
  return(
    <div className="link col-sm" >
      <a href={url} target="_blank" rel="noreferrer" className="social-media-links">
        <i className={classText}> {Text}</i>
      </a>
    </div>

  );
}

export default Linksto;