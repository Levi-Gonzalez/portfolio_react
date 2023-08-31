import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSIUyVOMN8n9QLIUth3OLudg823u0Ikjc",
  authDomain: "portfolio-levi.firebaseapp.com",
  projectId: "portfolio-levi",
  storageBucket: "portfolio-levi.appspot.com",
  messagingSenderId: "441266695603",
  appId: "1:441266695603:web:7b8c3df4680aeb9fbbafc6",
};

export const getFireBase = () => {
    const app =  initializeApp(firebaseConfig)
};

