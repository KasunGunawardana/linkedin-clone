import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: "AIzaSyAzHAly9DmP4CDAq_Guuyebnw87CThZq3w",
	authDomain: "linkedin-clone-c899b.firebaseapp.com",
	projectId: "linkedin-clone-c899b",
	storageBucket: "linkedin-clone-c899b.appspot.com",
	messagingSenderId: "687788657275",
	appId: "1:687788657275:web:a904aa1d6a66980670b0de"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export { auth, provider, storage };
export default db;