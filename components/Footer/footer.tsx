import React from 'react';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.imagen} >
        <motion.img src="/images/xrlabnew.png"

          alt="Descripción de la imagen"
          width={100}
          height={125}
          layoutId="/images/u8e8tuhh.png"
        />
      </div>
      <div  className={styles.titulo}>
      <p>XRlab</p>
      </div>
    </footer>
  );
};
export default Footer;