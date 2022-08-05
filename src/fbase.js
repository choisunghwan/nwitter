import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjl5SXjGytAnI0CI_VlZZep1qmyuppKE4",
  authDomain: "nwitter-8b13b.firebaseapp.com",
  projectId: "nwitter-8b13b",
  storageBucket: "nwitter-8b13b.appspot.com",
  messagingSenderId: "163650367561",
  appId: "1:163650367561:web:366cf7c5060348d3d0cf98"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
