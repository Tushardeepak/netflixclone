import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDWUp-BStoTyEkDfPEmRutWjBMt12w7hRI",
  authDomain: "netflix-clone-c89ec.firebaseapp.com",
  databaseURL: "https://netflix-clone-c89ec.firebaseio.com",
  projectId: "netflix-clone-c89ec",
  storageBucket: "netflix-clone-c89ec.appspot.com",
  messagingSenderId: "602973227888",
  appId: "1:602973227888:web:1fef83c14bf8a8133c5db5",
  measurementId: "G-JB56EHLP6N",
});

export const auth = app.auth();

export default app;
