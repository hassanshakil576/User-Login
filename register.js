import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

form.addEventListener("submit" , (event)=>{
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);


    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
    // ..
  });
  
  
//   email.value = ""
//   password.value = ""

})