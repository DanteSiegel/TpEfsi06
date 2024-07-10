import Link from 'next/link';
import styles from './layout.module.css';
import Reservas from '../../Reservas/page'
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/quienes-somos">Quienes Somos</Link>
            </li>
            <li className={styles.navItem}>
            <Link href="/Reservas">
             Reservas
            </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}