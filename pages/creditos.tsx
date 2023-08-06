import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '@/components/Footer/footer'

import styles from '../styles/creditos.module.css';
import Header from '@/components/Header/header'
//importar firebase
import firebaseApp from '../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
const db = getFirestore(firebaseApp)
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import { motion } from 'framer-motion';



interface Card {
    id: number;
    nombre: string;
    imagen: string;
    descripción: string;
}

interface SliderProps {
    cards: Card[];
}

function Slider({ cards }: SliderProps) {
    return (
        <>
            <Header />
            <main className={styles.boxmain}>
                <h2 className={styles.containerbox}>Creditos de entornos </h2>
                <div className={styles.continerslider}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className={styles.colum}>
                                    <div className={styles.card}>
                                        {/* <div className={styles.colum}> */}
                                        {/* </div> */}
                                        <div className={styles.image}>

                                            <Image
                                                src={card.imagen}
                                                alt="Descripción de la imagen"
                                                width={350}
                                                height={85}
                                            />
                                        </div>
                                        <p className={styles.text}>Rol: {card.descripción}</p>
                                        <br></br>
                                        <h3 className={styles.nombre}> {card.nombre}</h3>

                                        <motion.img src="/images/xrlabnew.png"
                                            className={styles.imagelogo}
                                            alt="Descripción de la imagen"
                                            width={100}
                                            height={125}
                                        />
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Slider;

export const getServerSideProps = async (context: any) => {
    const querySnapshot = await getDocs(collection(db, 'users'))
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
