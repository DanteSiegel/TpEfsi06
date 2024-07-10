
import React from 'react';
import styles from './style.module.css'; 

const Papus = ({ member }) => {
  const { name, role, bio, photo } = member;

  return (
    <div className={styles.memberCard}>

        <div className={styles.imageContainer}>
          <img src={photo} alt={name} className={styles.image} />
        </div>
      
      <h2>{name}</h2>
      <p><strong>{role}</strong></p>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
};

export default Papus;
