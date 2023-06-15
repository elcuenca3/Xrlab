
import firebaseApp from '../../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util'
const db = getFirestore(firebaseApp)
export default async function usersHandler(req, res) {
    if (req.method === 'GET') {
        try {
            // const querySnapshot = await getDocs(collection(db, 'Materias'))
            const snapshot = await getDocs(collection(db, 'Materias'))
            const users = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los usuarios' });
        }
    } else if (req.method === 'POST') {
        try {
            const { descripción, nombre, imagen } = req.body;
            const newUser = { descripción, nombre, imagen };
            // const docRef = await db.collection('Materias').addDoc(newUser);
            const docRef = await addDoc(collection(db, 'mate'), { ...newUser })
            const createdUser = { id: docRef.id, ...newUser };
            res.status(201).json(createdUser);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
    } else if (req.method === 'PUT') {
        try {
            // Actualizar un documento en la colección
            const { id, descripción, nombre, imagen } = req.body;
            await db.collection('mate').docs(id).update({
                descripción, nombre, imagen
            });
            res.status(200).json({ id });
        } catch (error) {
            res.status(500).json({ error: 'User no actualizado' });

        }
    } else if (req.method === 'DELETE') {
        // Eliminar un documento de la colección
        const { id } = req.body;
        await db.collection('mate').doc(id).delete();
        res.status(200).json({ id });
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}
