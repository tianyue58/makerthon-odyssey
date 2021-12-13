import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWv5eLouaWRd2E7IU_T3_gXIOPiDTld0Y",
  authDomain: "odyssey-ffb23.firebaseapp.com",
  projectId: "odyssey-ffb23",
  storageBucket: "odyssey-ffb23.appspot.com",
  messagingSenderId: "695412271463",
  appId: "1:695412271463:web:c3e78e3e3bf421a3cce7c2",
};

// Initialize Firebases
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
