import React from 'react';
import styles from './Ayuda.module.css';

const Formulario = () => {


  return (
    <form className={styles.formulario}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Nombre</label>
        <input type="text" className={`${styles.inputField} u-full-width`} placeholder="Nombre" />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Correo Electrónico</label>
        <input type="email" className={`${styles.inputField} u-full-width`} placeholder="Correo Electrónico" />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Mensaje</label>
        <textarea className={`${styles.input} ${styles.textarea}`} placeholder="Mensaje"></textarea>
      </div>

      <button type="submit" className="u-full-width button-primary">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;