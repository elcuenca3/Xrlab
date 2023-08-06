// components/SmoothScrollLinks.js
import React from 'react';
import styles from "../Loader/Loader.module.css"

const SmoothScrollLinks = () => {
  return (
    <nav className={styles.smooth_scroll_links}>
      <a href="#Titulo">Titulo </a>
      <a href="#Resumen">Resumen </a>
      <a href="#Introducción">Introducción </a>
      <a href="#Objetivos">Objetivos </a>

    </nav>
  );
};

export default SmoothScrollLinks;