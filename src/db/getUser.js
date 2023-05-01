import { collection, getDocs } from "firebase/firestore";
import { db } from "./db";

export const getUsers = async () => {
  const collectionReference = collection(db, "users");
  try {
    const docs = await getDocs(collectionReference);
    console.log(docs);
    const users = docs.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(users);

    return users;
  } catch (err) {
    console.log(err);
    return [];
  }
};
