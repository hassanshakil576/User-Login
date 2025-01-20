import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIAEJJB27_WzfbWAwjaRO8ekpzgJhjtHY",
  authDomain: "user-project-1234.firebaseapp.com",
  projectId: "user-project-1234",
  storageBucket: "user-project-1234.firebasestorage.app",
  messagingSenderId: "1086262789713",
  appId: "1:1086262789713:web:46f1d92c04d8734b6d1a70",
  measurementId: "G-7E8D1YHGP6"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
