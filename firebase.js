// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
    getFirestore 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { 
    getAuth 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Your Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAdt5kLb_mHzvzCtZFpmjysFJmsO48Y2B4",

  authDomain: "tokuma-d0931.firebaseapp.com",

  projectId: "tokuma-d0931",

  storageBucket: "tokuma-d0931.firebasestorage.app",

  messagingSenderId: "407451225160",

  appId: "1:407451225160:web:9d92d6ddd0bb81b5625c7d"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Create database connection

const db = getFirestore(app);


// Create authentication connection

const auth = getAuth(app);


// Export so other files can use Firebase

export { db, auth };
