// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjyRDwtT084mlEl_qkjiUUcCOqpZ5HX9Y",
  authDomain: "fitnessapp-253ee.firebaseapp.com",
  projectId: "fitnessapp-253ee",
  storageBucket: "fitnessapp-253ee.appspot.com",
  messagingSenderId: "522233549271",
  appId: "1:522233549271:web:6b9711896f96891342fb92"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const db=getFirestore();

export {auth,db}