import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, collection } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyAWA35qY8cWy0R-q6ZYIKy0CCSqUCmznlQ",
 authDomain: "bookshopuser-9190a.firebaseapp.com",
 databaseURL: "https://bookshopuser-9190a-default-rtdb.firebaseio.com",
 projectId: "bookshopuser-9190a",
 storageBucket: "bookshopuser-9190a.appspot.com",
 messagingSenderId: "913751891572",
 appId: "1:913751891572:web:0a3370b9891cb10893fb21",
 measurementId: "G-60T8Q6RX8N"
};
const app = initializeApp(firebaseConfig);

export default function writeUserData(userId, name, userPassword) {
 const db = getDatabase();
 const reference = ref(db, 'users/' + userId)
 const reference2 = ref(db, 'username/' + name)

 set(reference, {
  username: name,
  password: userPassword,
 })

 set(reference2, {
  username: name,
 })
}

export const auth = getAuth();


