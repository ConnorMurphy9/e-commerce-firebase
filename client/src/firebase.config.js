// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH4_8gHCaxhHbTtyeVh16UBChkM2rires",
  authDomain: "pizzeriaecommerceapp.firebaseapp.com",
  projectId: "pizzeriaecommerceapp",
  storageBucket: "pizzeriaecommerceapp.appspot.com",
  messagingSenderId: "697924699454",
  appId: "1:697924699454:web:68c7029bb8a547e80a986f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);