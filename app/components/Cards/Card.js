import React from 'react';
import styles from './Card.module.css';



const Card = ({
  Id = Date.now(),
  Mascota = "Default mascota",
  Dueño = "Default dueño",
  Fecha = "2021-08-05",
  Hora = "08:20",
  Sintomas = "Le duele la pierna",
  citas,
  setCitas
}) => {

  const eliminarCita = (e) => {
    e.preventDefault();
    if (window.confirm("¿Está seguro de eliminar esta cita?")) {
      setCitas(
        citas.filter(e =>
          e.Id !== Id
        ));
    }
  }

  return (

    
    <div className={styles.cita}>
      <p>Mascota: <span>{Mascota}</span></p>
      <p>Dueño: <span>{Dueño}</span></p>
      <p>Fecha: <span>{Fecha}</span></p>
      <p>Hora: <span>{Hora}</span></p>
      <p>Síntomas: <span>{Sintomas}</span></p>
      <button onClick={eliminarCita} className={`button eliminar ${styles['u-full-width']}`}>Eliminar ×</button>
    </div>
  );
}

export default Card;
