import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/header'
import Styles from '/styles/pantalla.module.css'
import { motion } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 }
}


export default function Home() {
  return (
    <>
      <Header />
      <div className={Styles.container}>

        <h1>hola que tal Bienvenido </h1>

        <div className={Styles.cuerpo}>

          <motion.img src="/images/u8e8tuhh.png"
            alt="Descripción de la imagen"
            width={500}
            height={50}
            layoutId="/images/u8e8tuhh.png"
          />

          <p> La tripulación de la nave espacial se encontraba a millones de kilómetros de casa, explorando un planeta desconocido. Todo parecía tranquilo hasta que detectaron una extraña señal en el horizonte. Intrigados, decidieron investigar y se encontraron con una civilización alienígena avanzada, con tecnología que superaba todo lo que habían visto antes. ¿Serían amigos o enemigos? La tripulación debía decidir si confiar en ellos o seguir adelante en su aventura espacial.</p>

        </div>
      



      </div>
      <div className={Styles.botones}>
          <motion.button
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 5 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={Styles.boton}>


            Sala De zoom</motion.button>
          <motion.button layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { ease: "backIn" },
              layout: { duration: 5 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={Styles.boton}>
            Mas informacion</motion.button>

        </div>

    </>
  );
};
