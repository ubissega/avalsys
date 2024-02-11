

// firebase-config.js
// Contém as configurações do Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
const firebaseConfig = {

    apiKey: "AIzaSyAZZtf0byQv9USPR6DoScnA2j7DRqWJtn8",
    authDomain: "aval-12f90.firebaseapp.com",
    databaseURL: "https://aval-12f90-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "aval-12f90",
    storageBucket: "aval-12f90.appspot.com",
    messagingSenderId: "270980945421",
    appId: "1:270980945421:web:eaee7dd61861112db72744",
    measurementId: "G-9BPMM7C915"

};
const init=initializeApp(firebaseConfig)
export {init};