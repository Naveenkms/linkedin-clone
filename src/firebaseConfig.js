import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIRW8y54nbuOcj3W8oD5urCrzg9-qldtc",
    authDomain: "linkedin-clone-7e22a.firebaseapp.com",
    projectId: "linkedin-clone-7e22a",
    storageBucket: "linkedin-clone-7e22a.appspot.com",
    messagingSenderId: "826346354121",
    appId: "1:826346354121:web:d73180584701b06fa4a418",
    measurementId: "G-Y3BBYXS4BP"
  };

  const app = initializeApp(firebaseConfig); 
  export const db = getFirestore(app);
