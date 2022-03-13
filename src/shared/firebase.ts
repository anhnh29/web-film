import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_hV2_aiNrCKvAXoS82rJmUN_exh2wx38",
  authDomain: "h-film-a22d5.firebaseapp.com",
  projectId: "h-film-a22d5",
  storageBucket: "h-film-a22d5.appspot.com",
  messagingSenderId: "1067270081162",
  appId: "1:1067270081162:web:e5e2a503ffcb47ddf77b73",
  measurementId: "G-2ZYYHW5L71"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
