import { onAuthStateChanged , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");



form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);
   
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    window.location = "./index.html"
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });

  });
  


