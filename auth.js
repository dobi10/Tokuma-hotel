import { auth } from "./firebase.js";


import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword

} 

from 

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";




// SIGNUP


const signupForm = document.getElementById("signupForm");


if(signupForm){


signupForm.addEventListener("submit", async(e)=>{


e.preventDefault();



const email =
document.getElementById("email").value;



const password =
document.getElementById("password").value;



try{


await createUserWithEmailAndPassword(

auth,

email,

password

);



alert("Account created successfully");


window.location.href="dashboard.html";


}


catch(error){


alert(error.message);


}



});


}




// LOGIN


const loginForm =
document.getElementById("loginForm");



if(loginForm){


loginForm.addEventListener("submit", async(e)=>{


e.preventDefault();



const email =
document.getElementById("loginEmail").value;



const password =
document.getElementById("loginPassword").value;



try{


await signInWithEmailAndPassword(

auth,

email,

password

);



alert("Login successful");


window.location.href="dashboard.html";



}


catch(error){


alert("Wrong email or password");


}



});


}
