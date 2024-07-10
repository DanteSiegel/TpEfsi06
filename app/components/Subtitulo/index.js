import React from 'react';
import styles from './style.module.css'; 

const Subtitulo = ({ texto }) => {
  return <h2 className={styles.subtitulo}>{texto}</h2>;
}

export default Subtitulo;
