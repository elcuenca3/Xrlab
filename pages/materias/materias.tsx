// // pages/Slider.js
// import React from 'react';
// import { motion } from 'framer-motion'
// import styles from "../../components/Loader/prueba.module.css";
// //importar firebase
// import firebaseApp from '../../firebase'
// import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
// import { async } from '@firebase/util'
// import Image from 'next/image';

// import Link from "next/link";

// const db = getFirestore(firebaseApp)



// const Slider = ({ cards }: any) => {
//     return (
//         <>
//             <div className={styles.smooth_scroll_links_container}>
//                 <nav className={styles.smooth_scroll_links}>
//                     <Link href="#Titulo">
//                         <ul >Titulo </ul>
//                     </Link>
//                     {cards.map((card: any) => (
//                         <Link href={card.nombre}>
//                             <ul key={card.id}>
//                                 {card.nombre}
//                             </ul>
//                         </Link>
//                     ))}
//                 </nav>
//             </div >
//             <div>
//                 <div className={styles.todo}>
//                     <div>

//                         <motion.div initial={{ scale: 0 }}
//                             animate={{ rotate: 360, scale: 1 }}
//                             transition={{
//                                 type: 'spring',
//                                 stiffness: 260,
//                                 damping: 25
//                             }}>
//                             <div id='Titulo' className={styles.section}>
//                                 {/* Contenido de la Sección 1 */}
//                                 <h2>
//                                     Pagina interactiva con three js
//                                 </h2>
//                                 <Image
//                                     src='/images/calaca.png'
//                                     alt='Descripción de la imagen'
//                                     width={450}
//                                     height={85}
//                                 />
//                             </div>
//                         </motion.div>
//                     </div>

//                     <motion.div initial={{ scale: 0 }}
//                         animate={{ rotate: 360, scale: 1 }}
//                         transition={{
//                             type: 'spring',
//                             stiffness: 260,
//                             damping: 20
//                         }}>
//                         <div id='Resumen' className={styles.section}>
//                             <h2 >Resumen del Proyecto </h2>
//                             <p>El proyecto es de carácter interdisciplinario e internacional,
//                                 en donde trabajarán colaborativamente las carreras de Ciencias de la Educación,
//                                 Computación y Tecnologías de la Información de la UTPL;
//                                 y, desde la Universidad de EAFIT, Colombia con el laboratorio MEDIALAB.
//                                 El propósito es generar espacios de acompañamiento pedagógico en entornos inmersivos para los estudiantes de la universidad,
//                                 que ayuden a contribuir al desempeño docente y mejorar los resultados de aprendizaje, así como también,
//                                 crear entornos inmersivos gamificados para implementar refuerzos pedagógicos orientados a mejorar los niveles de
//                                 aprendizaje del alumnado de las escuelas de Educación General Básica (EGB) y de colegios del Bachillerato General Unificado (BGU). </p>
//                         </div >
//                     </motion.div>

//                     <motion.div initial={{ scale: 0 }}
//                         animate={{ rotate: 360, scale: 1 }}
//                         transition={{
//                             type: 'spring',
//                             stiffness: 260,
//                             damping: 25
//                         }}>
//                         <div id='Introducción' className={styles.section}>

//                             <h2 >Introducción</h2>
//                             <p > Producto de la pandemia COVID 19,
//                                 la educación en el mundo ha sufrido un gran retroceso no solo en el campo económico
//                                 sino también educativo. Pedreira, Domínguez y Zubizarreta en el 2018, invitaban a la
//                                 comunidad educativa a reflexionar sobre la necesidad de incluir nuevas estrategias didácticas
//                                 con el uso de la tecnología, Bayyari y Tudoreanu (2006), sostienen que la implementación de
//                                 Realidad Virtual en los procesos de aprendizaje ayuda a comprender la información que reciben, así como
//                                 generar mayor implicación y colaboración en los estudiantes.</p>
//                         </div>
//                     </motion.div>

//                     <motion.div initial={{ scale: 0 }}
//                         animate={{ rotate: 360, scale: 1 }}
//                         transition={{
//                             type: 'spring',
//                             stiffness: 260,
//                             damping: 25
//                         }}>
//                         <div id='Objetivos' className={styles.section}>
//                             <h2 >Objetivo general </h2>
//                             <p >Generar entornos virtuales inmersivos gamificados, para implementar refuerzos pedagógicos orientados a mejorar los niveles de aprendizaje de los estudiantes de Educación General Básica (EGB) y de Bachillerato General Unificado (BGU). </p>
//                         </div>
//                         <div id='Objetivos' className={styles.section}>
//                             <h2 >Objetivos específicos</h2>
//                             <p> • Capacitar a los estudiantes en la implementación y uso de
//                                 entornos virtuales inmersivos para incorporarlos en procesos de enseñanza aprendizaje. </p>
//                             <p> • Conocer los niveles de satisfacción de los estudiantes del
//                                 Prácticum frente a los entornos virtuales inmersivos gamificados implementados
//                                 para la construcción del conocimiento en la práctica docente, que permitan mejorarlos ciclo a ciclo. </p>
//                         </div>
//                     </motion.div>

//                 </div>
//             </div>




//         </>
//     );
// };

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

// export default Slider;

