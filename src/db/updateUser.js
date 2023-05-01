import { updateDoc, doc } from "firebase/firestore";
import { db } from "./db";

export const updateUser = async (id, name, email, age) => {
  const userDoc = doc(db, "users", id);
  try {
    await updateDoc(userDoc, { name, email, age });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
