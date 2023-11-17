import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC88Ym3h1ycnqYXEX8GbUwhvgH6K8Br_u0",
  authDomain: "olympusgg-d1bb3.firebaseapp.com",
  projectId: "olympusgg-d1bb3",
  storageBucket: "olympusgg-d1bb3.appspot.com",
  messagingSenderId: "756022298455",
  appId: "1:756022298455:web:ca5e099b7532c26dd62012",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit=()=>app;