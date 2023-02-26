import React from "react";
import '../stylesheets/Links.css';
import '../App.css';

function Links () {
  return(
    <footer id="Contact" className="container-fluid links-container mt-auto">
      <div className="container">
        <div className="col-sm-12 social-media ">
          <div className="row text-center align-middle">
            <div className="link col-sm-6" >
              <a href="mailto:vivanco@infovia.com.ar" className="social-media-links">
                <i className="bi bi-envelope"> Email</i>
              </a>
            </div>
            <div className="link col-sm-6">
              <a href="https://wa.me/5491154700070" className="social-media-links">
                <i className="bi bi-whatsapp"> Whatsapp</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Links;