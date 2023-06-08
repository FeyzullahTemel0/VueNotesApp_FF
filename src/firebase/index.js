import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD7auiJ-ssgtxDRGnn8ks5JpvUutCXkCqg",
  authDomain: "vuenotesapp-15cfd.firebaseapp.com",
  projectId: "vuenotesapp-15cfd",
  storageBucket: "vuenotesapp-15cfd.appspot.com",
  messagingSenderId: "84729119147",
  appId: "1:84729119147:web:7a1784d53cc1d1b22752ee",
  measurementId: "G-RY5HXH4WX1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
