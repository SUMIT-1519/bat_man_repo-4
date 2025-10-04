import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBypVA3Eb6PTDngHimjYU5ykNR9A9d3Kv0",
  authDomain: "fir-content-delivery.firebaseapp.com",
  projectId: "fir-content-delivery",
  storageBucket: "fir-content-delivery.firebasestorage.app",
  messagingSenderId: "928380948383",
  appId: "1:928380948383:web:e3b66142aee10e5184b7aa",
  measurementId: "G-1QJJB584T0"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);