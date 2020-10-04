import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.scss';

import Logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6 col-6 col-md-4 instagram justify-content-center justify-content-sm-start">
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <span>@rancholaspalma</span>
        </div>
        <div className="col-4 logo d-none d-md-block">
            <Link to="/">
              <img src={Logo} alt="Rancho Las Palmas" />
              <span>Rancho Las <br />Palmas</span>
            </Link>
        </div>
        <div className="col-sm-6 col-md-4 phone">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span>+1 829 763 9421</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
