"use client";
import React, { useEffect, useState } from 'react';
import Titulo from '../components/Titulo/index.js';
import Formulario from '../components/Formulario/Formulario';
import Cita from '../components/Citas/Cita';
import { useClient } from 'next/client'; 
import Layout from "../components/Layout/layout";

const Reservas = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {

    setCitas([]);
  }, []);

 
  

  return (
    
    <div className="page">
      <Layout></Layout>
      <Titulo texto={"Reservas"} />
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
