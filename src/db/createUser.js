import { collection, addDoc } from "firebase/firestore";
import { db } from "./db";

export const createUser = async (name, email, age) => {
  const collectionReference = collection(db, "users");
  try {
    await addDoc(collectionReference, { name, email, age });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
