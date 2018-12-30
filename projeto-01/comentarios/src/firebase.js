import firebase from "firebase/app";
import "firebase/database";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAiMs15slwSEQrO1V9euiM7x3F-fGG3PB8",
  authDomain: "dp-comentarios.firebaseapp.com",
  databaseURL: "https://dp-comentarios.firebaseio.com",
  projectId: "dp-comentarios",
  storageBucket: "dp-comentarios.appspot.com",
  messagingSenderId: "988567685204"
};
firebase.initializeApp(config);

export const database = firebase.database();
