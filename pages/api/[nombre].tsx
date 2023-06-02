
// import { useState } from "react";
// import { Inter } from 'next/font/google'
// import Header from '@/components/Header/header'
// import Styles from '/styles/Home.module.css'
// import { motion } from "framer-motion"
// import Link from 'next/link'
// import router, { useRouter } from 'next/router'

// import firebaseApp from '../../firebase.js'
// import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, collectionGroup } from 'firebase/firestore'
// import { async } from '@firebase/util'
// const db = getFirestore(firebaseApp)

// const inter = Inter({ subsets: ['latin'] })
// const container = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: {
//             delayChildren: 0.25
//         }
//     }
// }

// const item = {
//     hidden: { opacity: 0, scale: 0 },
//     show: { opacity: 1, scale: 1 }
// }

// const Catalogue = ({ cata }) => {
//     return (
//         <div>
//             <Header />

//             <h1 >Catalogo</h1>
//             <p className={styles.text}>
//                 En esta seccion encontraras los platos tipicos mas conocidos y más
//                 vendidos de la provincia de Loja, deleitate con nuestra gatronomia que
//                 esta dividida por Categorías.
//             </p>
//             <div className={styles.container}>
//                 {cata.map(cata =>
//                 (
//                     <CardCata key={cata._id} id={cata._id} imagen={cata.imagen} nombre={cata.nombre} />
//                 ))}
//             </div>
//             <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
//                 <Link href="/catalogo/newCatalogo">
//                     <a className={styles.boton}>Agregar</a>
//                 </Link>
//             </div>
//             <Footer />
//         </div>
//     );
// };
// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:3000/api/users')
//     const cata = await res.json()
//     return {
//         props: {
//             cata,

//         }
//     }

// };
// export default Catalogue;