// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsv-t_SJ887ML_SH9o82d7ZBfKTdqdQYo",
  authDomain: "veggift-recipes.firebaseapp.com",
  projectId: "veggift-recipes",
  storageBucket: "veggift-recipes.firebasestorage.app",
  messagingSenderId: "256912400680",
  appId: "1:256912400680:web:cf7f5384b57e9d264bf01d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;