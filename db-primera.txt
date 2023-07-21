// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxodcuXiMw0rjsg6Uyc2oiCXgdLcQ5coE",
  authDomain: "restaurante-app-55ba8.firebaseapp.com",
  projectId: "restaurante-app-55ba8",
  storageBucket: "restaurante-app-55ba8.appspot.com",
  messagingSenderId: "596429413377",
  appId: "1:596429413377:web:b1b4276483357f8e467400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);