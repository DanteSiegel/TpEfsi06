import styles from "./page.module.css";
import ElTeam from "../components/DreamTeam/team";
import Layout from "../components/Layout/layout";

export default function Home() {
  return (
    <Layout>
    <main className={styles.main}>
    <ElTeam/>
    </main>
    </Layout>
  );
}