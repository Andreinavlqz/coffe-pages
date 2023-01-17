import React from 'react';
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link>
      </nav>
      <h1>Acerca de nuestra gran cafetería</h1>
      <p>Somos una pequeña cafetería independiente ubicada en el corazón de la ciudad. Ofrecemos una selección de café de alta calidad y un ambiente acogedor para disfrutar de tu bebida favorita. Nuestra misión es brindar una experiencia única y excepcional a cada uno de nuestros clientes.</p>
    </div>
  )
}

export default AboutPage;