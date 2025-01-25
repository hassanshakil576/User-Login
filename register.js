import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const para = document.querySelector(".para")

form.addEventListener("submit" , (event)=>{
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);


    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    email.value =""
    password.value = ""
    const user = userCredential.user;
    console.log(user);
    para.innerHTML = "Your account have been registered"
    
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    para.innerHTML = errorMessage
    
    // ..
  });
  
  
//   email.value = ""
//   password.value = ""

})