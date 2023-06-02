
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
            const { name, email } = req.body;
            const newUser = { name, email };

            const docRef = await db.collection('Materia').add(newUser);
            const createdUser = { id: docRef.id, ...newUser };

            res.status(201).json(createdUser);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}
