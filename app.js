import { signOut , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

const loginbtn = document.querySelector("#loginbtn")
const logoutbtn = document.querySelector("#logoutbtn")

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    
  } else {
    window.location = "./login.html"
    
  }
});

loginbtn.addEventListener("click" , ()=>{
    window.location = "./login.html"
})


logoutbtn.addEventListener("click" , ()=>{
    signOut(auth).then(() => {
        window.location = "./login.html"
      }).catch((error) => {
        console.log(error);
        
      });

})
