// pages/Slider.js
import React from 'react';

import styles from '/styles/Slider.module.css';
import Header from '@/components/Header/header'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//importar firebase
import firebaseApp from '../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util'
const db = getFirestore(firebaseApp)



const Slider = ({ cards }: any) => {
    return (
        <>
            <Header />
            <div className={styles.carouselContainer}>

                <Carousel>
                    {cards.map((card: any) => (
                        <div key={card.id}>
                            <h3>{card.nombre}</h3>
                            <img src={card.imagen}
                                alt="Descripción de la imagen"
                                width={400}
                                height={85}
                            />
                            <p>{card.descripción}</p>
                            {/* Agrega aquí el contenido adicional de la tarjeta */}
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

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

export default Slider;

