
import { Inter } from 'next/font/google'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'

import Styles from '/styles/Home.module.css'
import { motion } from "framer-motion"
import { useState } from 'react';
import Link from 'next/link';
// import ThreeScene from '../pages/3d';
import dynamic from 'next/dynamic';

//importar firebase
import firebaseApp from '../../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util'
const db = getFirestore(firebaseApp)



const LitterWitch = dynamic(() => import('../../components/objeto/LitterWitch'), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

// const inter = Inter({ subsets: ['latin'] })
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.25
//     }
//   }
// }

// const item = {
//   hidden: { opacity: 0, scale: 0 },
//   show: { opacity: 1, scale: 1 }
// }
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
  const querySnapshot = await getDocs(collection(db, 'qui'))
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



export default function Matemáticas({ materias }: any) {
  const [dato, setDato] = useState('');

  const handleButtonClick = (newDato: any) => {
    setDato(newDato);
  };
  return (
    <>
      <Header />
      {/* imagenes 3d */}
      <div className={Styles.box3d}>
        {/* <LitterWitch /> */}
      </div>
      {/* <motion.div className={Styles.cardcontainer}
        variants={container}
        initial="hidden"
        animate="show">
        <div className={Styles.box}>
          <motion.img src="/images/xrlabnew.png"
            alt="Descripción de la imagen"
            width={400}
            height={500}
            layoutId="/images/u8e8tuhh.png"
          />
        </div>
      </motion.div> */}

      <main>
        <div className={Styles.containerbox}>
          <p>Bienvenido a los entornos inmersivos de Xrlab</p>
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
                <br></br>
                <h2 >{materia.nombre}</h2>
                <motion.img src={materia.imagen}
                  alt="Descripción de la imagen"
                  width={400}
                  height={85}
                  layoutId="${materia.nombre}"
                />

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
