import React, { useState, useEffect } from "react";

import firebase from '../../utils/firebase';
import 'firebase/firestore';

import './Reservation.scss';

const db = firebase.firestore(firebase);

const Reservation = ({code, consult}) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    if(consult && code) {
      db.collection("reservaciones")
        .doc(`${code.toLowerCase()}`)
        .get()
        .then((res) => {
          setDate(res.data());
        });
    }
  }, [consult, code]);

  if(!date) return (<div><h3>Codigo reservación no existente.</h3></div>);

  return (
    <div>
      {/* Inicio Row principal */}
      <div className="row">
        <div className="col-6">
          <p className="date">
            Fecha: <span>{date.date}</span>
          </p>
          <p>
            Precio: <span>${date.price}</span>
          </p>
          <p>
            Cupo: <span>{date.people} personas</span>
          </p>
        </div>
        <div className="col-6">
          <p>
            Cantidad Pagada: <span>${date.paid}</span>
          </p>
          <p>
            Horario a llegar: <span>{date.start}</span>
          </p>
          <p>
            Horario a irse: <span>{date.end}</span>
          </p>
        </div>
      </div>
      {/* Fin Row Principal */}

      {/* Inicio Segundo Row */}
      <div className="row">
        <div className="col-12 seller">
          <p>
            Nombre del vendedor:{" "}
            <span className="span-name">{date.seller}</span>
          </p>
          <p>
            Telefono del vendedor:{" "}
            <span className="span-phone">{date.sellerPhone}</span>
          </p>
        </div>
      </div>
      {/* Fin Segundo Row */}
    </div>
  );
};

export default Reservation;
