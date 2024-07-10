import React from 'react';
import styles from './style.module.css'; 

const CardHome = ({ titulo, descripcion }) => {
  return (
    <div className={styles.card}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default CardHome;
