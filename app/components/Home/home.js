import React from 'react';
import CardHome from '../CardHome';
import styles from './page.module.css'; // Importa tu archivo de estilos CSS aquí
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import Descripcion from '../Descripcion';

const Home = () => {
  const servicios = [
    {
        title: 'Consulta Veterinaria',
        description: 'Exámenes y diagnósticos completos para tu mascota.',
    },
    {
        title: 'Vacunación',
        description: 'Aplicación de vacunas y control de enfermedades comunes.',
    },
    {
        title: 'Cirugías Veterinarias',
        description: 'Intervenciones quirúrgicas para tratamientos de diversas patologías.',
    },
    {
        title: 'Cuidados Intensivos',
        description: 'Atención especializada para casos críticos y de emergencia.',
    },
    {
        title: 'Laboratorio Clínico',
        description: 'Análisis de sangre, orina y otros exámenes de laboratorio.',
    },
    {
        title: 'Radiografías y Ultrasonidos',
        description: 'Diagnóstico por imagen para evaluación interna de mascotas.',
    },
    {
        title: 'Odontología Veterinaria',
        description: 'Tratamientos dentales y cuidados bucales para mascotas.',
    },
    {
        title: 'Peluquería y Estética',
        description: 'Servicios de grooming y cuidado estético para tu mascota.',
    },
    {
        title: 'Venta de Productos Veterinarios',
        description: 'Alimentos y productos específicos para el cuidado de tu mascota.',
    },
    {
        title: 'Asesoramiento Nutricional',
        description: 'Recomendaciones de dieta y nutrición adaptadas a cada etapa de vida de tu mascota.',
    },
    {
        title: 'Hospedaje y Guardería',
        description: 'Servicio de hospedaje y cuidado temporal para tu mascota.',
    },
    {
        title: 'Atención Domiciliaria',
        description: 'Servicios de emergencia y atención veterinaria en casa.',
    },
   
  ];

  return (
    <div className={styles.body}>
      <Titulo texto="Bienvenidos a la veterinaria de Los Papus" />

      <Descripcion texto="En Los Papus nos dedicamos al cuidado integral de tus mascotas. Nos preocupamos por su salud y bienestar, ofreciendo una amplia gama de servicios veterinarios y productos especializados. Desde consultas médicas hasta cirugías y cuidados intensivos, estamos aquí para proporcionar el mejor cuidado posible. Confía en nosotros para mantener a tu mascota sana y feliz." />

      <div>
        <Subtitulo texto="Te ofrecemos" />

        <div className={styles['cards-container']}>
          {servicios.map((servicio, index) => (
            <div key={index} className={styles.cards}>
              <CardHome titulo={servicio.title} descripcion={servicio.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
