import React from 'react';
import styles from './style.module.css'; 

const Descripcion = ({ texto }) => {
  return (
    <div className={styles.descripcion}>
      <p>{texto}</p>
    </div>
  );
};

export default Descripcion;
