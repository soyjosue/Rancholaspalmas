import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button } from "react-bootstrap";
import Reservation from "../../components/Reservation";

import firebase from "../../utils/firebase";
import "firebase/firestore";

import {
  shortDayWeek,
  longDayWeek,
  getCalendary,
  getMoment,
} from "../../utils/helper";

import "./Calendary.scss";

const db = firebase.firestore(firebase);

const Calendary = () => {
  const [month, setMonth] = useState(0);
  const [calendary, setCalendary] = useState(null);
  const [date, setDate] = useState();
  const [reserved, setReserved] = useState(null);
  const [codes, setCodes] = useState('');
  const [consult, setConsult] = useState(false);

  useEffect(() => {
    setCalendary(getCalendary(month));
    setDate(getMoment(month));
  }, [month]);

  useEffect(() => {
    if (date) {
      db.collection("reserved")
        .doc(`${date}`)
        .get()
        .then((res) => {
          setReserved(res.data());
        });
    }
  }, [date]);

  const handlerClick = (e) => {
    setReserved(null);
    switch (e.target.id) {
      case "next":
        setMonth(month + 1);
        break;
      case "prev":
        setMonth(month - 1);
        break;
      default:
        break;
    }
  };
  
  const handlerClickSubmit = () => {
    setConsult(false)
    setTimeout(( ) => {
      setConsult(true);
    }, 300)
  }

  return (
    <div className="container-fluid">
      {/* Row Principal */}
      <div className="row">
        {/* Inicio Calendario */}
        <div className="col-12 col-md-8 calendar-container ">
          <div className="calendar">
            {/* Inicio Barra Mes */}
            <div className="title">
              <i
                className="fa fa-chevron-left"
                id="prev"
                aria-hidden="true"
                onClick={handlerClick}
              />
              <span className="">
                {moment().add(month, "month").format("MMMM YYYY")}
              </span>
              <i
                className="fa fa-chevron-right"
                id="next"
                aria-hidden="true"
                onClick={handlerClick}
              />
            </div>
            {/* Fin Barra del Mes */}

            <div className="grid">
              {/* Inicio Barra dias semana */}
              <div className="weeks">
                {shortDayWeek() &&
                  shortDayWeek().map((day, iteration) => (
                    <div
                      key={day}
                      className="week"
                      title={longDayWeek()[iteration]}
                    >
                      {day}
                    </div>
                  ))}
              </div>
              {/* Fin Barra dias semana */}

              {/* inicios dias del mes */}
              <div className="date">
                {calendary &&
                  Object.values(calendary).map((week, iteration) => (
                    <div
                      key={week}
                      className={`dates ${iteration === 0 ? "first" : null} ${
                        iteration === Object.values(calendary).length - 1
                          ? "last"
                          : null
                      } `}
                    >
                      {week.map((date, iteration) => (
                        <div key={iteration}>
                          <span
                            className={
                              reserved && reserved[date] ? "reserved" : null
                            }
                          >
                            {date}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
              {/* Fin dias del mes */}
            </div>
          </div>
        </div>
        {/* Fin del calendario */}

        {/* Inicio ASIDE */}
        <div className="col-12 col-md-4 aside">
          <h3>Consultar</h3>

          <hr />
          {/* Inicio Form */}
          <div className="content-form">
            <form>
              <div className="form__code">
                <label htmlFor="code">Codigo Reservación:</label>
                <input type="text" id="code" value={codes} onChange={e => setCodes(e.target.value)} />
              </div>
            </form>
            <Button className="button-consult" onClick={handlerClickSubmit}>
              Consultar
            </Button>
          </div>
          {/* Fin del FORM */}
          <hr />

          {/*Inicio Informacion Consulta*/}
          {consult && (
            <div className="reservation container-fluid">
              <h4>Tu Reservación: </h4>
              <Reservation
                consult={consult}
                code={codes}
              />
            </div>
          )}
          {/*Fin Informacion Consulta*/}
        </div>
        {/* Fin ASIDE */}
      </div>
      {/* Fin Row Principal */}
    </div>
  );
};

export default Calendary;
