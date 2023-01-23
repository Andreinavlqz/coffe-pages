import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";
import imagen from "./acerca-de.jpg";
import "../Navbar/Navbar";
import "../Navbar/Navbar.css";


const AboutPage = () => {
  return (
    <>
      <section className="main">
        <section className="acerca-de" id="acerca-de">
          <div className="contenedor">
            <div className="foto">
              <img src={imagen} alt="coffe" />
            </div>
            <article>
              <h3>Acerca de</h3>
              <p>
                Mocca fue creada hace 5 años con el objetivo de dar a conocer a
                la población del municipio de Funza la diversidad de sabores y
                el arte que envuelve al café , con el fin de representar cada
                región del país. Queremos ser reconocidos por nuestros aromas,
                sabores y el amor que le entregamos a cada uno de nuestros
                clientes
              </p>
            </article>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutPage;
