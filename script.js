
// Import the functions you need from the SDKs you need
// 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase , ref , set , get , child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = 
{
    apiKey: "AIzaSyAZ6ntUcF4TSG49y6Cyar4JXp50cP3dNbM",
    authDomain: "changepassword-947ce.firebaseapp.com",
    projectId: "changepassword-947ce",
    storageBucket: "changepassword-947ce.appspot.com",
    messagingSenderId: "911077916411",
    appId: "1:911077916411:web:517e8a235b3f3d39443a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
document.getElementById("confirmpass").addEventListener('click',function(e)
{

})

