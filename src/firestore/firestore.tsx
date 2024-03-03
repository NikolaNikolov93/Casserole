/* Firebase setup */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8P8DLVZoXs1dNBWEMCYCGu-MwKLvDCxA",
  authDomain: "casserole-c23a5.firebaseapp.com",
  projectId: "casserole-c23a5",
  storageBucket: "casserole-c23a5.appspot.com",
  messagingSenderId: "804712169608",
  appId: "1:804712169608:web:3ae06a981f14f9fcd9df3d",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
