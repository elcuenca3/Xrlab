
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'

import Styles from '/styles/Home.module.css'
import { motion } from "framer-motion"
import { useState } from 'react';
import Link from 'next/link';
// import ThreeScene from '../pages/3d';
import dynamic from 'next/dynamic';

//importar firebase
import firebaseApp from '../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
const db = getFirestore(firebaseApp)


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const getServerSideProps = async (context: any) => {
  const querySnapshot = await getDocs(collection(db, 'Materias'))
  const docs: { id: string }[] = []
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id })
  })

  return {
    props: {
      materias: docs
    }
  }
}



export default function Home({ materias }: any) {
  const [dato, setDato] = useState('');

  const handleButtonClick = (newDato: any) => {
    setDato(newDato);
  };
  return (
    <>
      <Header />
      {/* imagenes 3d */}
      <main>
        <div className={Styles.containerbox}>
          <p>Bienvenido a los entornos inmersivos de Xrlab</p>
        </div>
        <div className={Styles.Containeranexos}>
          <p>El proyecto busca ofrecer refuerzos pedagógicos a estudiantes de Educación General Básica (EGB) y Bachillerato General Unificado (BGU) a través de espacios de acompañamiento en entornos inmersivos gamificados. Impulsado la necesidad de adoptar nuevas estrategias didácticas con tecnología, como la realidad virtual, que ha demostrado mejorar la comprensión y motivación en los estudiantes. El proyecto incluye varias etapas, desde la ideación hasta la capacitación y soporte para estudiantes y colegios beneficiados.</p>
        </div>

        <div className={Styles.containerbox}>
          <p>Entornos inmersivos de Xrlab</p>
        </div>

        <section>
          <motion.div className={Styles.cardcontainer}
          >
            {materias.map((materia: any) => (

              <motion.ul key={materia.id} className={Styles.card}
                variants={container}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href={`materias/${materia.page}`}>
                  <br></br>
                  <h2 >{materia.nombre}</h2>
                  <motion.img src={materia.imagen}
                    alt="Descripción de la imagen"
                    width={400}
                    height={85}
                    layoutId="${materia.nombre}"
                  />
                </Link>
                <p>{materia.descripción}</p>
                <br></br>
              </motion.ul>
            ))}
          </motion.div>
          <div>
          </div>
        </section>

      </main >
      <Footer />
    </>
  );


};
