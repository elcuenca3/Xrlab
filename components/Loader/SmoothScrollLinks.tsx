import React from 'react';
import Link from "next/link";
// import styles from "../Loader/Loader.module.css";
import styles from "../Loader/prueba.module.css";


const SmoothScrollLinks: React.FC = () => {
  return (
    <>
      <div  className={styles.smooth_scroll_links_container}>
        <nav className={styles.smooth_scroll_links}>
          <Link href="#Titulo">
            <ul >Titulo </ul>
          </Link>
          <Link href="#Resumen">
            <ul >Resumen </ul>
          </Link>
          <Link href="#Introducción">
            <ul >Introducción </ul>
          </Link>
          <Link href="#Objetivos">
            <ul >Objetivos </ul>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SmoothScrollLinks;
