// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9CHMRj6pLDrMXthoz0Z3wWT6wQ9lq0_k",
  authDomain: "my-site-ec2e4.firebaseapp.com",
  projectId: "my-site-ec2e4",
  storageBucket: "my-site-ec2e4.appspot.com",
  messagingSenderId: "251949923845",
  appId: "1:251949923845:web:c4e246a9a2a98c43cea66c",
  measurementId: "G-R38XLX2NF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);