"use client";

import React, { useEffect, useState } from 'react';
import './page.module.css';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario';
import Cita from './components/Citas/Cita';

const Page = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    // Solo se ejecutará en el cliente
    setCitas([
      {
        Id: 1,
        Mascota: "Nina",
        Dueño: "Martin",
        Fecha: "2021-08-05",
        Hora: "8:20",
        Sintomas: "Le duele la pierna"
      },
      {
        Id: 2,
        Mascota: "Sifon",
        Dueño: "Flecha",
        Fecha: "2023-08-05",
        Hora: "09:24",
        Sintomas: "Duerme mucho"
      },
      {
        Id: 3,
        Mascota: "Floki",
        Dueño: "Ari",
        Fecha: "2023-08-05",
        Hora: "16:15",
        Sintomas: "No está comiendo"
      }
    ]);
  }, []);

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

export default Page;
