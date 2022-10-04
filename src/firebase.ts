import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5sxeemPXFs-xzTDV0ty2XWV31yo7I5hM",
  authDomain: "auth-16e49.firebaseapp.com",
  projectId: "auth-16e49",
  storageBucket: "auth-16e49.appspot.com",
  messagingSenderId: "412681518351",
  appId: "1:412681518351:web:cbdf0c0bee92c99e36927a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);