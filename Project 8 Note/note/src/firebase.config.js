import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAlv-BOgZrCZ_JYimB1rEP_PRTTx_2Nies",
  authDomain: "note-6d1f6.firebaseapp.com",
  projectId: "note-6d1f6",
  storageBucket: "note-6d1f6.firebasestorage.app",
  messagingSenderId: "638296071121",
  appId: "1:638296071121:web:96b5a3971ad0df61fa9ef0"
};

const app = initializeApp(firebaseConfig);

export default app