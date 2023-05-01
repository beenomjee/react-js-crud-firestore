import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAThmmjX39RNb2DX7Ar3Qjlxn-skPMQFDs",
  authDomain: "react-js-crud-79772.firebaseapp.com",
  projectId: "react-js-crud-79772",
  storageBucket: "react-js-crud-79772.appspot.com",
  messagingSenderId: "230171244975",
  appId: "1:230171244975:web:cf8d1b5f52ce43d357575a",
  measurementId: "G-1229FD13QX",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
