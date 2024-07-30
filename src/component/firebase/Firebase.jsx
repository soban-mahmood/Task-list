
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCS5D9dAZp5c5FMLYRa3qdJc11nMp4vr_4",
  authDomain: "todo-auth-24db7.firebaseapp.com",
  projectId: "todo-auth-24db7",
  storageBucket: "todo-auth-24db7.appspot.com",
  messagingSenderId: "691843743094",
  appId: "1:691843743094:web:65108283415923375a4e57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth()
export const  db = getFirestore(app)
export default app;