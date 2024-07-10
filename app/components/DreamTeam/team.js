import React from 'react';
import styles from './team.module.css';
import Papus from '../Papus';
import Titulo from '../Titulo';

const DreamTeam = () => {
  const miembros = [
    {
      id: 1,
      name: 'Dante',
      role: 'Médico Veterinario',
      bio: 'Con más de una década de experiencia en medicina veterinaria, Dante se especializa en cirugías y cuidados intensivos para asegurar la salud y el bienestar de todas las mascotas que atiende.',
      photo: 'https://i.ibb.co/zsB00F1/dante.jpg', 
    },
    {
      id: 2,
      name: 'Ivan',
      role: 'Estilista Canino',
      bio: 'Con una dedicación excepcional al arte del estilismo canino, Ivan garantiza que cada perro reciba un tratamiento de belleza personalizado para lucir radiante y saludable en todo momento.',
      photo: 'https://i.ibb.co/N9X8k7c/ivan.jpg', 
    },
  ];

  return (
    <div className={styles.dreamTeam}>
      <Titulo texto="Dream Team" />
      <div className={styles.center}>
        <div className={styles.team}>
          {miembros.map((miembro) => (
            <Papus key={miembro.id} member={miembro} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DreamTeam;
