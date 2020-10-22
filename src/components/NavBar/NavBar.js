import React, { useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

// CSS
import { 
  Nav, Image, Row, Col, Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.scss';

// IMG
import Logo from '../../assets/img/logo.png';

const NavBar = ({children}) => {
  const [classes, setClasses] = useState(null);
  const location = useLocation();
  
  useEffect(( ) => {
    if(location.pathname === '/') {
      setClasses('home')
    } else {
      setClasses(null);
    }
  }, [location]);
  

  return (
    <>
      <header className={`${classes} nav container-fluid `}>
        <Row>
          <Col className="nav col-12 col-md-5 col-lg-4 order-2 order-lg-1 justify-content-center justify-content-md-end">
            <Nav className="mr-md-auto justify-content-lg-start">
              <Link to="/">Inicio</Link>
              <Link to="/calendario">Calendario</Link>
              <Link to="/contacto">Contacto</Link>
            </Nav>
          </Col>
          <Col className="brand order-1 order-lg-2 justify-content-center justify-content-md-start justify-content-lg-center">
            <Link to="/">
              <Image src={Logo} fluid />
              <span>Rancho Las <br />Palmas</span>
            </Link>
          </Col>
          <Col className="col-end col-4 d-lg-flex d-none order-3">
            <span>+1 829 763 9421</span>
            <Button>Reservar</Button>
          </Col>
        </Row>
      </header>
      {children}
    </>
  )
}


        

export default NavBar;
