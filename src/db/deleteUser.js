import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./db";

export const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  try {
    await deleteDoc(userDoc);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
