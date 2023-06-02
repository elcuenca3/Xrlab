import React, { useState } from 'react'
import { useRouter } from 'next/router'

import firebaseApp from '../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
// import Layout from '../components/Layout'

const db = getFirestore(firebaseApp)

export default function Formulario() {

    const router = useRouter()

    const valorInicial = {
        nombre: "",
        descripción: "",
        imagen: "",
        // cantidad: ""
    }

    const [dato, setDato] = useState(valorInicial)

    //capturar los inputs
    const obtenerInputs = (e:any) => {
        const { name, value } = e.target;
        setDato({ ...dato, [name]: value })
    }


    //esta funcion es para guardar la info en firebase
    const enviarInfo = async (e:any) => {
        e.preventDefault();
        //console.log(dato);
        try {
            await addDoc(collection(db, 'users'), {
                ...dato
            })
        } catch (error) {
            console.log(error);
        }
        //setDato({...valorInicial})

        //que esta funcion lo que hace es una redireccion
        router.push('/')
    }

    return (

        <div>
            <div >
                <h2 className='text-center'>Formulario de creacion de productos</h2>
                <div >
                    <form onSubmit={enviarInfo}>
                        <div >
                            <input type="text" placeholder='ingresar nombre'
                                name='nombre' value={dato.nombre} onChange={obtenerInputs} required />
                        </div>

                        <div>
                            <input type="text" placeholder='ingresar descripción'
                                name='descripción' value={dato.descripción} onChange={obtenerInputs} required />
                        </div>
                        <div>
                            <input type="text" placeholder='ingresar Link de imagen'
                                name='imagen' value={dato.imagen} onChange={obtenerInputs} required />
                        </div>
                        {/* 
                            <div className='form-group'>
                                <input type="text" placeholder='ingresar cantidad' className='form-control mb-3'
                                    name='cantidad' value={dato.cantidad} onChange={obtenerInputs} required />
                            </div> */}

                        <button >
                            Enviar
                        </button>
                        <button onClick={() => router.push('/')} >volver</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
