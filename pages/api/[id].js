
// import firebaseApp from '../../firebase'
// import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
// import { async } from '@firebase/util'
// const db = getFirestore(firebaseApp)
// export default async function user(req, res) {
//     if (req.method === 'PUT') {
//         try {
//             const { descripción, nombre, imagen } = req.body;
//             await db.collection('mate').doc(id).update({
//                 descripción, nombre, imagen
//             });

//             res.status(200).json({ id });
//         } catch (error) {
//             res.status(500).json({ error: 'Error al crear el usuario' });
//         }

//     } else if (req.method === 'DELETE') {
//         // Eliminar un documento de la colección
//         const { id } = req.body;
//         await db.collection('mate').doc(id).delete();
//         res.status(200).json({ id });
//     } else {
//         res.status(405).json({ error: 'Método no permitido' });
//     }
// }

