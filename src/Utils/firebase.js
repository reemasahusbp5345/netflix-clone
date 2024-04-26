// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJuu_c1SVx1Aona0CGWUw0hZq1LIaa0QY",
  authDomain: "netflix-gpt-aebc2.firebaseapp.com",
  projectId: "netflix-gpt-aebc2",
  storageBucket: "netflix-gpt-aebc2.appspot.com",
  messagingSenderId: "892837814940",
  appId: "1:892837814940:web:30bdc0bddbec95471c0359",
  measurementId: "G-36HKQDG4JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth = getAuth();