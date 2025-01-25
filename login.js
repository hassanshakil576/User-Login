import { signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

const provider = new GoogleAuthProvider(); //variable of firebase

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const googlebtn = document.querySelector("#googlebtn")
const para = document.querySelector(".para")


form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);
   
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    window.location = "./index.html"
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    para.innerHTML = errorMessage
    
  });

  });

  googlebtn.addEventListener("click", () => {
    console.log('google called');


    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            window.location = "./index.html"
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });

})
  


