import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const app = initializeApp({
  apiKey: "AIzaSyA8fZN9Gvb5Haoy_JYOEjr0Y60TJtF-Uto",
  authDomain: "straw-poll-1d153.firebaseapp.com",
  projectId: "straw-poll-1d153",
  storageBucket: "straw-poll-1d153.appspot.com",
  messagingSenderId: "692456148530",
  appId: "1:692456148530:web:1b72d4f37df5915c64362b",
});

const db = getFirestore(app);

export const votesCollection = collection(db, "votes");
