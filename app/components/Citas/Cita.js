import React from 'react';
import styles from './Cita.module.css'; // Importa estilos como objeto
import Card from '../Cards/Card';

const Cita = ({ citas, setCitas }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Administra tus citas</h2>
      <div className={styles.content}>
        <form className={styles.form}>
          {citas.map(c => (
            <Card
              key={c.Id}
              Id={c.Id}
              Mascota={c.Mascota}
              Dueño={c.Dueño}
              Fecha={c.Fecha}
              Hora={c.Hora}
              Sintomas={c.Sintomas}
              citas={citas}
              setCitas={setCitas}
            />
          ))}
        </form>
      </div>
    </div>
  );
}

export default Cita;
