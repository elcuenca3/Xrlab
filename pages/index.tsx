
import { Inter } from 'next/font/google'
import Header from '@/components/Header/header'
import Styles from '/styles/Home.module.css'
import { motion } from "framer-motion"
import Link from 'next/link'
import router, { useRouter } from 'next/router'

//importar firebase
import firebaseApp from '../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util'
const db = getFirestore(firebaseApp)



const inter = Inter({ subsets: ['latin'] })
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.25
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 }
}


export default function Home({ materias }: any) {
  return (
    <>
      <Header />
      {/* imagenes 3d */}
      <motion.div className={Styles.cardcontainer}
        variants={container}
        initial="hidden"
        animate="show">
        <div className={Styles.box}>
          <motion.img src="/images/3d.png"
            alt="Descripción de la imagen"
            width={400}
            height={500}
            layoutId="/images/u8e8tuhh.png"
          />
        </div>
      </motion.div>
      <main>
        <div className={Styles.containerbox}>
          <p>Bienvenido a los entornos inmersivos de Xrlab</p>
        </div>
        
        <section>
          <motion.div className={Styles.cardcontainer}>
            {materias.map((materia: any) => (
              <motion.div className={Styles.card}
                variants={item} >
                <Link href="/2pantalla">
                  <br></br>
                  <h2>{materia.nombre}</h2>
                  <motion.img src={materia.imagen}
                    alt="Descripción de la imagen"
                    width={400}
                    height={85}
                    layoutId="/images/calaca.png"
                  />
                </Link>
                <p>{materia.descripción}</p>
                <br></br>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main >
    </>
  );


};
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