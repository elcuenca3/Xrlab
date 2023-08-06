// pages/Slider.js
import React from 'react';
import Footer from '@/components/Footer/footer'
import { motion } from 'framer-motion'

import styles from '/styles/Anexos.module.css';
import Header from '@/components/Header/header'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import SmoothScrollLinks from '@/components/Loader/SmoothScrollLinks'
//importar firebase 
import firebaseApp from '../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
const db = getFirestore(firebaseApp)

import Image from 'next/image';



const anexos = () => {
    return (
        <>
            <div className={styles.todo}>
                <div>
                    <Header />
                    {/* Contenido de la Sección 2 */}
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
                                Pagina interactiva con three js
                            </h2>
                            <Image
                                src='/images/calaca.png'
                                alt='Descripción de la imagen'
                                width={450}
                                height={85}
                            />
                        </div>
                    </motion.div>
                </div>

                <SmoothScrollLinks />

                <motion.div initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                    }}>
                    <div id='Resumen' className={styles.section}>
                        <h2 >Resumen del Proyecto </h2>
                        <p>El proyecto es de carácter interdisciplinario e internacional,
                            en donde trabajarán colaborativamente las carreras de Ciencias de la Educación,
                            Computación y Tecnologías de la Información de la UTPL;
                            y, desde la Universidad de EAFIT, Colombia con el laboratorio MEDIALAB.
                            El propósito es generar espacios de acompañamiento pedagógico en entornos inmersivos para los estudiantes de la universidad,
                            que ayuden a contribuir al desempeño docente y mejorar los resultados de aprendizaje, así como también,
                            crear entornos inmersivos gamificados para implementar refuerzos pedagógicos orientados a mejorar los niveles de
                            aprendizaje del alumnado de las escuelas de Educación General Básica (EGB) y de colegios del Bachillerato General Unificado (BGU). </p>

                    </div >
                </motion.div>

                <SmoothScrollLinks />
                <motion.div initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 25
                    }}>
                    <div id='Introducción' className={styles.section}>
                        {/* Contenido de la Sección 2 */}
                        {/* <motion.div initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                    }}> */}
                        <h2 >Introducción y Justificación del Proyecto </h2>
                        <p > Producto de la pandemia COVID 19,
                            la educación en el mundo ha sufrido un gran retroceso no solo en el campo económico
                            sino también educativo. Pedreira, Domínguez y Zubizarreta en el 2018, invitaban a la
                            comunidad educativa a reflexionar sobre la necesidad de incluir nuevas estrategias didácticas
                            con el uso de la tecnología, Bayyari y Tudoreanu (2006), sostienen que la implementación de
                            Realidad Virtual en los procesos de aprendizaje ayuda a comprender la información que reciben, así como
                            generar mayor implicación y colaboración en los estudiantes.

                            En la pandemia, la necesidad de buscar diferentes canales de comunicación,
                            motivaron a docentes de primaria, secundaria y de universidad, a buscar nuevos espacios para
                            el desarrollo de sus clases. En ese contexto, los espacios de práctica docente, que siempre
                            fueron presenciales, se vieron reducidos para algunas universidades, mientras que para otras
                            fue un espacio de innovación y de participación activa mediada por las TICs. Considerando que
                            el retorno a clases presenciales está en marcha, esto implicaría que las prácticas sean de este
                            mismo modo, pero en la virtualidad se observa muchas posibilidades para el desarrollo de clases
                            de refuerzo pedagógico, donde estudiantes universitarios a través de entornos inmersivos gamificados
                            tengan la posibilidad de poner en práctica sus conocimientos, y a la vez apoyar pedagógicamente a los niños, niñas y adolescentes
                            en aquellas destrezas que, producto de la pandemia aún requieren ser desarrolladas.

                            El presente proyecto se enmarca en trabajar interdisciplinariamente a fin de que estudiantes de Ciencias
                            de la Educación desarrollen refuerzos pedagógicos en entornos inmersivos contextualizados, con carácter
                            gamificado construidos por los estudiantes de Tecnologías de la Información y Computación, para que motive,
                            dinamice y generen participación activa en los estudiantes de Educación General Básica (EGB) y de Bachillerato
                            General Unificado (BGU) en las asignaturas de Lengua y literatura, Matemática, Física, Química y Biología; de este modo,
                            no solo se contribuye al ODS 4 (garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje
                            durante toda la vida para todos' y tiene siete metas y tres medios de ejecución), sino también ,el espíritu de trabajo en equipo como
                            valor de la UTPL y esencialmente a su misión 'Buscar la verdad y formar personas, a través de la ciencia, para servir a la sociedad'.
                            Es importante mencionar que los entornos inmersivos serán mejorados ciclo a ciclo en función de los requerimientos de los refuerzos pedagógicos,
                            aspecto que permiten la transformación de los espacios para la enseñanza aprendizaje. </p>
                        {/* <Image

                    src='/images/calaca.png'
                    alt='Descripción de la imagen'
                    width={350}
                    height={85}
                /> */}
                        {/* </motion.div> */}
                    </div>
                </motion.div>

                <SmoothScrollLinks />
                <motion.div initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 25
                    }}>
                    <div id='Objetivos' className={styles.section}>
                        {/* Contenido de la Sección 3 */}

                        {/* <motion.div initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                    }}> */}

                        <h2 >Objetivo general </h2>
                        <p >Generar entornos virtuales inmersivos gamificados, para implementar refuerzos pedagógicos orientados a mejorar los niveles de aprendizaje de los estudiantes de Educación General Básica (EGB) y de Bachillerato General Unificado (BGU). </p>

                        {/* </motion.div> */}
                    </div>


                    <div id='Objetivos' className={styles.section}>
                        {/* Contenido de la Sección 3 */}

                        {/* <motion.div initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                    }}> */}

                        <h2 >Objetivos específicos</h2>

                        <p> • Capacitar a los estudiantes en la implementación y uso de entornos virtuales inmersivos para incorporarlos en procesos de enseñanza aprendizaje. </p>
                        <p> •  Conocer los niveles de satisfacción de los estudiantes del Prácticum frente a los entornos virtuales inmersivos gamificados implementados para la construcción del conocimiento en la práctica docente, que permitan mejorarlos ciclo a ciclo. </p>


                        {/* </motion.div> */}
                    </div>
                <SmoothScrollLinks />
                    
                </motion.div>


                <Footer />
            </div>
        </>
    );
};

// export const getServerSideProps = async (context: any) => {
//     const querySnapshot = await getDocs(collection(db, 'users'))
//     const docs: {id: string }[] = []
//     querySnapshot.forEach((doc) => {
//         docs.push({...doc.data(), id: doc.id })
//     })

//     return {
//         props: {
//             cards: docs
//         }
//     }
// }

export default anexos;

