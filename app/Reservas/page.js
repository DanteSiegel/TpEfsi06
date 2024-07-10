"use client";
import React, { useEffect, useState } from 'react';
import Titulo from '../components/Titulo/Titulo';
import Formulario from '../components/Formulario/Formulario';
import Cita from '../components/Citas/Cita';
import { useClient } from 'next/client'; // Ensure correct import

const Reservas = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    // This will only execute on the client side
    setCitas([]);
  }, []);

  // Marking Reservas component as a client component
  

  return (
    <div className="page">
      <Titulo />
      <div className="container">
        <div className="row">
          <Formulario citas={citas} setCitas={setCitas} />
          <Cita citas={citas} setCitas={setCitas} />
        </div>
      </div>
    </div>
  );
}

export default Reservas;
