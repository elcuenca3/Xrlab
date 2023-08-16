import React from 'react';
import styles from "../Loader/Loader.module.css";

const SmoothScrollLinks: React.FC = () => {
  return (
    <>
      <div>
        <nav className={styles.smooth_scroll_links}>
          <a href="#Titulo">Titulo </a>
          <a href="#Resumen">Resumen </a>
          <a href="#Introducción">Introducción </a>
          <a href="#Objetivos">Objetivos </a>
        </nav>
      </div>
    </>
  );
};

export default SmoothScrollLinks;
