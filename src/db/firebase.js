import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	query,
	where,
} from 'firebase/firestore';
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function newFormSend(newData) {
	if (!newData || typeof newData !== 'object') {
		return { status: 'failed', error: 'Datos inválidos' };
	}

	try {
		let ref = await addDoc(collection(db, 'messages'), newData);
		return { status: 'success', id: ref.id };
	} catch (error) {
		return {
			status: 'failed',
			error: error?.message || 'Error al registrar el mensaje',
			code: error?.code || 'unknown',
		};
	}
}
