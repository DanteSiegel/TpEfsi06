import React from 'react';
import styles from './Formulario.module.css';
import ItemFormulario from '../ItemFormulario/ItemFormulario';

const Formulario = ({ citas, setCitas }) => {
  const agregarCita = (e) => {
    e.preventDefault();
    if (
      e.target.Mascota.value.length !== 0 &&
      e.target.Dueño.value.length !== 0 &&
      e.target.Sintomas.value.length !== 0 &&
      e.target.Fecha.value.length !== 0 &&
      e.target.Hora.value.length !== 0
    ) {
      if (window.confirm("¿Está seguro de agregar esta cita?")) {
        setCitas([
          ...citas,
          {
            Id: Date.now(),
            Mascota: e.target.Mascota.value,
            Dueño: e.target.Dueño.value,
            Fecha: e.target.Fecha.value,
            Hora: e.target.Hora.value,
            Sintomas: e.target.Sintomas.value,
          },
        ]);
      }
    } else {
      alert('Los datos están incompletos');
    }
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.h2}>Crear mi cita</h2>
      <form onSubmit={agregarCita}>
        <ItemFormulario
          texto="Nombre Mascota"
          name="Mascota"
          placeHolder="Nombre Mascota"
          type="text"
        />
        <ItemFormulario
          texto="Nombre Dueño"
          name="Dueño"
          placeHolder="Nombre dueño de la mascota"
          type="text"
        />
        <ItemFormulario
          texto="Fecha"
          name="Fecha"
          type="date"
          className={styles.inputDate}
        />
        <ItemFormulario
          texto="Hora"
          name="Hora"
          type="time"
          className={styles.inputTime}
        />
        <label className={styles.label}>Síntomas</label>
        <input
          type="text"
          className={`u-full-width ${styles.textarea}`}
          name="Sintomas"
        />
        <input
          type="submit"
          value="Agregar Cita"
          className="u-full-width button-primary"
        />
      </form>
    </div>
  );
};

export default Formulario;
