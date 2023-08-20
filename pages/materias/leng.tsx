// pages/Slider.js
import React from 'react';
import Footer from '@/components/Footer/footer'
import { motion } from 'framer-motion'
import styles from "../../components/Loader/prueba.module.css";
import Header from '@/components/Header/header'
import Image from 'next/image';
//importar firebase
import firebaseApp from '../../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

import Link from "next/link";

const db = getFirestore(firebaseApp)

interface info {
  id: number;
  nombre: string;
  imagen: string;
  enlace: string;
}

interface SliderProps {
  cards: info[];
}


const Slider = ({ cards }: SliderProps) => {
  return (
    <>
      <div className={styles.todo}>
        <div>
          <Header />
          <motion.div initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 25
            }}>
            <div id='Titulo' className={styles.section}>
              {/* Contenido de la Sección 1 */}
              <h2>
                Entornos de Lengua y Literatura
              </h2>
              <Image
                src='/images/legua.png'
                alt='Descripción de la imagen'
                width={450}
                height={85}
              />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}>
          <div id='Descripcion' className={styles.section}>
            <h2 >Descripcion de los entornos </h2>
            <p>Aquí encontraras los entornos de aprendizaje los cuales se enfocarán en el área de Lengua y literatura ,
              disfruta de todo lo que tenamos preparado para ti.</p>
          </div >
        </motion.div>
      </div>
      <div>
        <motion.div initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}>
          <div id='links'>

            {cards.map((info) => (
              <motion.div initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 25
                }}>
                <div className={styles.color}>

                  <div id={`${info.nombre}`} className={styles.section}>
                    <h2 > {info.nombre} </h2>
                    <Image
                      src={info.imagen}
                      alt={info.nombre}
                      width={450}
                      height={85}
                    />
                    <Link href={info.enlace} className={styles.button}>
                      <ul> Entorno de {info.nombre} </ul>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div >
        </motion.div>
      </div>
      <Footer />
      <div className={styles.smooth_scroll_links_container}>
        <nav className={styles.smooth_scroll_links}>
          <Link href="#Titulo">
            <ul >Titulo </ul>
          </Link>
          <Link href="#Descripcion">
            <ul >Descripción</ul>
          </Link>
          <Link href="#links">
            <ul >Links</ul>
          </Link>
          {/* {cards.map((card: any) => (
                        <Link href={`#${card.nombre}`}>
                            <ul key={card.id} >
                                {card.nombre}
                            </ul>
                        </Link>
                    ))} */}
        </nav>
      </div >



    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const querySnapshot = await getDocs(collection(db, 'lengua'))
  const docs: { id: string }[] = []
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id })
  })

  return {
    props: {
      cards: docs
    }
  }
}

export default Slider;

