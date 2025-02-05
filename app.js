import { signOut , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";
import { collection, addDoc, getDocs ,query, where , orderBy , Timestamp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { db } from "./firebaseconfig.js"
const loginbtn = document.querySelector("#loginbtn");
const logoutbtn = document.querySelector("#logoutbtn");
const form = document.querySelector("#form")
const todo = document.querySelector("#todo")
const ol = document.querySelector(".todo-container")
//global array
const allTodo = []

async function getDataFromFirestore(){
  const q = query(collection(db, "todos"), where("uid", "==", auth.currentUser.uid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    allTodo.push({...doc.data() , docId: doc.id})
  });
  renderData(allTodo)
  console.log(allTodo)
}


function renderData(){
  allTodo.map((item)=>{
    ol.innerHTML+= `<li>${item.todo}</li>`
  })
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    getDataFromFirestore()
    // console.log(auth);
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

form.addEventListener("submit", async(event)=>{
    event.preventDefault();
    console.log(todo.value);
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo.value,
        uid: auth.currentUser.uid,
        Date: Timestamp.fromDate(new Date()),
      });
      todo.value = ""
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })