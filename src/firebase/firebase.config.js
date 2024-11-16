// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLsmnLGA02ELX577B2WpMpwol1zw57QEI",
  authDomain: "fir-demo-ed266.firebaseapp.com",
  projectId: "fir-demo-ed266",
  storageBucket: "fir-demo-ed266.firebasestorage.app",
  messagingSenderId: "460710468132",
  appId: "1:460710468132:web:f73783c95061ad47f0d6b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;