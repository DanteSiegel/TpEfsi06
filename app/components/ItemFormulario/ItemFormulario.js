import React from 'react';
import styles from './ItemFormulario.module.css';

const ItemFormulario = ({
  texto = "default",
  placeHolder = "Ingrese texto aquí",
  name = "nombre",
  clase = "u-full-width",
  type = "text"
}) => {
 
  const additionalClass = type === 'date' ? styles.inputDate : type === 'time' ? styles.inputTime : '';

  return (
    <>
      <label className={styles.label}>{texto}</label>
      <input
        name={name}
        placeholder={placeHolder}
        className={`${clase} ${additionalClass}`}
        type={type}
      />
    </>
  );
}

export default ItemFormulario;
