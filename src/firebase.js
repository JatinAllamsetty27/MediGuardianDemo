// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq-BcLLZWFapsC_nb7Da0AlIIkjhdxK_s",
  authDomain: "mediguardian-react.firebaseapp.com",
  projectId: "mediguardian-react",
  storageBucket: "mediguardian-react.appspot.com",
  messagingSenderId: "591891496635",
  appId: "1:591891496635:web:acc0a532fa643e2189b39e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore()