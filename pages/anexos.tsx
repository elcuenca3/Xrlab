// pages/Slider.js
import React from 'react';
import Footer from '@/components/Footer/footer'
import { motion, useScroll } from "framer-motion"

import styles from '/styles/Anexos.module.css';
import Header from '@/components/Header/header'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//importar firebase 
import firebaseApp from '../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util'
const db = getFirestore(firebaseApp)




const Slider = ({ cards }: any) => {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div className="progress-bar"
                style={{ scaleX: scrollYProgress }} />
            <Header />

            <div className={styles.container}>
                <div className={styles.titulomain}>
                    <h2>
                        Pagina interactiva con three js
                    </h2>
                </div>
                {/* <div className={styles.image} >
                    <motion.img src="/images/tigre.png"
                        alt="Descripción de la imagen"
                        width={450}
                        height={50}
                        layoutId="/images/calaca.png"

                    />
                </div> */}
                <div className={styles.container}>
                    <div className={styles.column}>
                        <motion.div initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}>
                            <h1 className={styles.titulo}>Resumen del Proyecto </h1>

                            <p className={styles.texto}>Este texto es sobre un proyecto interdisciplinario e internacional entre la UTPL y la Universidad de EAFIT.
                                El objetivo es crear entornos inmersivos para apoyar a los estudiantes de la universidad y de las escuelas y colegios.
                                Se busca mejorar el desempeño docente y los resultados de aprendizaje con pedagogía y gamificación.</p>
                            <h2 className={styles.titulo}>Introducción y Justificación del Proyecto </h2>
                            <p className={styles.texto}> La pandemia del COVID-19 y su impacto en la educación,
                                surge un proyecto interdisciplinario e internacional entre UTPL y Universidad de EAFIT para implementar refuerzos pedagógicos en entornos inmersivos gamificados.
                                Estudiantes de Ciencias de la Educación desarrollarán estrategias en colaboración con Tecnologías de la Información y Computación,
                                para apoyar a estudiantes de Educación General Básica y Bachillerato. Esto no solo contribuye al ODS 4 de educación inclusiva y de calidad,
                                sino también promueve el valor del trabajo en equipo y la misión de la UTPL. Los entornos inmersivos se mejorarán ciclo a ciclo,
                                transformando así los espacios de enseñanza-aprendizaje.</p>
                        </motion.div>
                    </div>
                    <br></br>
                    <div className={styles.column}>
                        <motion.div initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}>

                            <h2 className={styles.titulo}>Objetivo general </h2>
                            <p className={styles.texto}>Generar entornos virtuales inmersivos gamificados, para implementar refuerzos pedagógicos orientados a mejorar los niveles de aprendizaje de los estudiantes de Educación General Básica (EGB) y de Bachillerato General Unificado (BGU). </p>
                            <br></br>
                            <h2 className={styles.titulo}>Objetivos específicos</h2>
                            <ul>
                                <li className={styles.texto}>Capacitar a los estudiantes en la implementación y uso de entornos virtuales inmersivos para incorporarlos en procesos de enseñanza aprendizaje. </li>
                                <li className={styles.texto}>Conocer los niveles de satisfacción de los estudiantes del Prácticum frente a los entornos virtuales inmersivos gamificados implementados para la construcción del conocimiento en la práctica docente, que permitan mejorarlos ciclo a ciclo. </li>
                            </ul>
                        </motion.div>
                    </div>
                    <br></br>
                </div>
            </div >
            <Footer />
        </>
    );
};

// export const getServerSideProps = async (context: any) => {
//     const querySnapshot = await getDocs(collection(db, 'users'))
//     const docs: { id: string }[] = []
//     querySnapshot.forEach((doc) => {
//         docs.push({ ...doc.data(), id: doc.id })
//     })

//     return {
//         props: {
//             cards: docs
//         }
//     }
// }

export default Slider;

