import { useRouter } from 'next/router';

import { Inter } from 'next/font/google'
import Header from '@/components/Header/header'
import Styles from '/styles/Home.module.css'
import { motion } from "framer-motion"
import { useState } from 'react';
import Link from 'next/link';

//importar firebase
import firebaseApp from '../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util'
const db = getFirestore(firebaseApp)

function obtenerMensajePredeterminado() {
  return "Mensaje predeterminado";
}


function obtenerMensajeDesdeURL(router: any) {
  const mensaje = router.query.dato || '';
  return mensaje;
}

const DestinoPage = ({ materias }: any) => {
  const router = useRouter();
  const mensaje = obtenerMensajeDesdeURL(router);
  getServerSideProps(mensaje);

  return (
    <div>
      <h1>Página de Destino</h1>
      <p>Dato recibido: {mensaje}</p>
      <section>
        



        {materias.map((materia: any) => (
          <div>

          <p className={Styles.containerbox}>   {materia.nombre}</p>

          <div className={Styles.cardcontainer}>
            <div key={materia.id} className={Styles.card} >
              <Link href={`/pantalla?dato=${materia.nombre}`}>
                <br></br>
                <h2 >{materia.nombre}</h2>
              </Link>
              <br></br>
            </div>
          </div>
          </div>
        ))}
        <div>
        </div>
      </section>
    </div>

  );
};

export default DestinoPage;
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