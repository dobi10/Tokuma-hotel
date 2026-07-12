// Import Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// Tokuma Hotel Firebase Configuration

const firebaseConfig = {

  apiKey: "AIzaSyAdt5kLb_mHzvzCtZFpmjysFJmsO48Y2B4",

  authDomain: "tokuma-d0931.firebaseapp.com",

  projectId: "tokuma-d0931",

  storageBucket: "tokuma-d0931.firebasestorage.app",

  messagingSenderId: "407451225160",

  appId: "1:407451225160:web:9d92d6ddd0bb81b5625c7d"

};



// Start Firebase

const app = initializeApp(firebaseConfig);



// Connect Firestore Database

const db = getFirestore(app);



// Connect Authentication

const auth = getAuth(app);



// Export for other files

export { db, auth };
