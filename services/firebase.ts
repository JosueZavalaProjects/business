// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
  apiKey: "AIzaSyBMkkL4UUhc3Y-0oHtkhg9HB_QUu4WhHso",
  authDomain: "buzines-3023e.firebaseapp.com",
  databaseURL: "https://buzines-3023e-default-rtdb.firebaseio.com",
  projectId: "buzines-3023e",
  storageBucket: "buzines-3023e.appspot.com",
  messagingSenderId: "509831758479",
  appId: "1:509831758479:web:12a12e596363b838a6a6fa",
  measurementId: "G-X9897NJKPT",
}; */

const firebaseConfig = {
  apiKey: "AIzaSyCoOpLG2bORFmgCLMC8nBQPm4BwvCGWwdo",
  authDomain: "biznes2-58e51.firebaseapp.com",
  projectId: "biznes2-58e51",
  storageBucket: "biznes2-58e51.appspot.com",
  messagingSenderId: "70420505672",
  appId: "1:70420505672:web:f55d93139776ba6230a47d",
  measurementId: "G-JJJPYHB286",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

export const db = getFirestore(app);
