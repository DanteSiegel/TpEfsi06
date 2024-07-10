"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Layout/layout";
import Head from "next/head";
import Inicio from './components/Home/home';


export default function Home() {
  return (
    <>
      <Head>
        <title>Veterinaria de los Papus</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Inicio />
      </main>

   
    </>
  );
}
