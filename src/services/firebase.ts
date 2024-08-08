import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCDOMm8UI56HUfRNQ52E1aFT-SWJbbd1BM',
	authDomain: 'banxso-dragon.firebaseapp.com',
	projectId: 'banxso-dragon',
	storageBucket: 'banxso-dragon.appspot.com',
	messagingSenderId: '425083152240',
	appId: '1:425083152240:web:f112fbaef7d063e03b91b5',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
