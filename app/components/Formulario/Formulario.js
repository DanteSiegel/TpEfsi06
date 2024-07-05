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
    React.createElement('div', { className: styles.oneHalfColumn },
      React.createElement('h2', { className: styles.h2 }, 'Crear mi cita'),
      React.createElement('form', { onSubmit: agregarCita, className: styles.formStyles },
        React.createElement(ItemFormulario, {
          texto: 'Nombre Mascota',
          name: 'Mascota',
          placeHolder: 'Nombre Mascota',
          type: 'text',
          clase: styles.input,
        }),
        React.createElement(ItemFormulario, {
          texto: 'Nombre Dueño',
          name: 'Dueño',
          placeHolder: 'Nombre dueño de la mascota',
          type: 'text',
          clase: styles.input,
        }),
        React.createElement(ItemFormulario, {
          texto: 'Fecha',
          name: 'Fecha',
          type: 'date',
          clase: styles.input,
        }),
        React.createElement(ItemFormulario, {
          texto: 'Hora',
          name: 'Hora',
          type: 'time',
          clase: styles.input,
        }),
        React.createElement('label', { className: styles.label }, 'Síntomas'),
        React.createElement('input', {
          type: 'text',
          className: `${styles.input} ${styles.textarea}`,
          name: 'Sintomas',
          id: 'textarea',
        }),
        React.createElement('input', {
          type: 'submit',
          value: 'Agregar Cita',
          className: `${styles.button} ${styles['button-primary']}`,  // Usar corchetes para acceder a la clase con guión
        })
      )
    )
  );
};

export default Formulario;
