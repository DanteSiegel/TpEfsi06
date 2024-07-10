
import styles from "./page.module.css";
import Ayuda from '../components/Ayuda/ayuda'
import Layout from "../components/Layout/layout";

export default function Home() {
  return (
    <main className={styles.main}>
        <Layout/>
      <Ayuda/>
      
    </main>
  );
}