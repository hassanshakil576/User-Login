import { signOut , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

const loginbtn = document.querySelector("#loginbtn")
const logoutbtn = document.querySelector("#logoutbtn")

loginbtn.addEventListener("click" , ()=>{
    window.location = "./login.html"
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
          
        } else {
          console.log("User login nahi hai");
          
        }
      });
})


logoutbtn.addEventListener("click" , ()=>{
    signOut(auth).then(() => {
        window.location = "./login.html"
      }).catch((error) => {
        console.log(error);
        
      });

})
