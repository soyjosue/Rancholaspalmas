import React from "react";
import Gallery from "../../components/Gallery";
import {
  Button
} from 'react-bootstrap';

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* Inicio del Primer Poster */}
      <section className="firt-poster">
        <h1 className="firt-poster__title">Rancho Las Palmas</h1>
        <h3 className="firt-poster__subtitle">Eventos y Más</h3>
      </section>
      {/* Fin Del Primer Poster */}

      <hr />
      {/* Inicio de INFO */}
      <section className="info container">
        {/* Inicio del title */}
        <div className="info__title">
          <h2>Rancho Las Palmas</h2>
          <h3>La Tranquilidad Es Lo Primordial.</h3>
        </div>
        {/* Fin del title */}

        {/* Inicio de la descripcion */}
        <div className="info__description">
          <p>
            Desde nuestra apertura hace casi 2 años hemos tenido como principal
            objetivo promover la tranquilidad y, ofrecer un excelente servicio a
            cada uno de nuestros clientes. Un lugar donde puedan disfrutar una
            grandiosa tranquilidad a las afuera del Gran Santo Domingo. Donde la
            privacidad y la tranquilidad no destaca entre nuestra competencia,
            donde los servicios ofrecidos superan a nuestra competencia.
          </p>
        </div>
        {/* Fin de la descripcion */}

        {/* Inicio contenedor beneficios */}
        <div className="info_benefits row">
          {/* Inicio Primer Benefit */}
          <div className="benefit ubications col-6 col-md-3">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>Excelente ubicacion a las afuera de Santo Domingo.</p>
          </div>
          {/* Fin Primer Benefit */}

          {/* Inicio Segundo Benefit */}
          <div className="benefit pool col-6 col-md-3">
            <i className="fa fa-tint" aria-hidden="true"></i>
            <p>Psicina espaciosa más 2 jacuzzi para su estadía.</p>
          </div>
          {/* Fin Segundo Benefit */}

          {/* Inicio Tercer Benefit */}
          <div className="benefit speaker col-6 col-md-3">
            <i className="fa fa-volume-up" aria-hidden="true"></i>
            <p>Optimo esterior para ser utilizado en su estadía.</p>
          </div>
          {/* Fin Tercer Benefit */}

          {/* Inicio Cuarto Benefit */}
          <div className="benefit security col-6 col-md-3">
            <i className="fa fa-shield" aria-hidden="true"></i>
            <p>Privacidad para una mayor tranquilidad en su estadía.</p>
          </div>
          {/* Fin Cuarto Benefit */}
        </div>
        {/* Fin contenedor beneficios */}
      </section>
      {/* Fin de INFO */}

      {/* Inicio de la Galeria */}
      <hr />
      <section className="galeria container">
        <h2>Galería</h2>
        <Gallery />
      </section>
      {/* Fin de la Galeria*/}

      <hr />
      {/* Inicio del Mapa */}
      <section className="map container">
        <h2 className="map__title">Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28705.488800014242!2d-69.7753274345065!3d18.515484004518573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf072ec8fdf6a8425!2sRancho%20Las%20Palmas!5e0!3m2!1ses-419!2sdo!4v1601763231786!5m2!1ses-419!2sdo"
          width="600"
          height="450"
          frameBorder="0"
          aria-hidden="false"
          tabIndex="0"
          title="googlemap"
        />
      </section>
      {/* Fin del Mapa */}

      <hr />
      {/* Inicios de los Paquetes */}
      <section className="paquets container">
        <h2>Paquetes</h2>
        <div className="row">

          {/* Inicio paquete regular  */}
          <div className='col-12 col-sm-6 paquets'>
            <div className="paquet">
            <div className="paquet-icon">
              <i className="fa fa-user" aria-hidden="true" />
            </div>
              <h3>Pasadia Regular</h3>
              <hr />
              <h4>Beneficios Principales</h4>
              <p>20 Personas Maximo</p>
              <p>Sillas y Mesas por Personas</p>
              <hr />
              <div className="time">
                <h4>Horario</h4>
                <span>De 8:00 AM Hasta 6:00 PM</span>
              </div>
              <Button variant="success" className="more-info">
                  Más información
              </Button>
              <div className="price">$10,000 DOP</div>
            </div>
          </div>
          {/* Fin paquete regular */}

          {/* Inicio paquete Extra */}
          <div className='col-12 col-sm-6 paquets'>
            <div className="paquet">
            <div className="paquet-icon">
            <i className="fa fa-users" aria-hidden="true"></i>
            </div>
              <h3>Pasadia Extra</h3>
              <hr />
              <h4>Beneficios Principales</h4>
              <p>Personas Ilimitado</p>
              <p>Una Habitación</p>
              <hr />
              <div className="time">
                <h4>Horario</h4>
                <span>A tu conveniencia</span>
              </div>
              <Button variant="success" className="more-info">
                Más información                
              </Button>
              <div className="price">Desde $12,000 DOP</div>
            </div>
          </div>
          {/* Fin Paquete extra */}

        </div>
      </section>
      {/* Fin de los Paquetes */}

      <hr />
      {/* Inicio del postal */}
      <section className="postal">
        <h2>Un Dia importante, en un lugar hermoso</h2>
        <h3>Ven y Celebra tus dias Festivos con Nosotros</h3>
      </section>
      {/* Fin del postal */}
    </div>
  );
};

export default Home;
