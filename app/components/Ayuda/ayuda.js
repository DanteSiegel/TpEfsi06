import Titulo from '../Titulo/index';
import Descripcion from '../Descripcion/index';
import Form from '../Form/Ayuda'
import styles from './ayuda.module.css';
    
const Ayuda = () => {
  return (
    <div className={styles.container}>
      <Titulo texto="Contactanos" />
      <Form />
    </div>
  );
};

export default Ayuda;