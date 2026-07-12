// ==============================
// Tokuma Hotel - Firebase Config
// ==============================

// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase Firestore
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Authentication
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Storage (for future image uploads)
import {
  getStorage
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhsqdbW9C4e_wQ1XCkjghmlUnugCV1S-s",
  authDomain: "batu-hotel-f00fd.firebaseapp.com",
  projectId: "batu-hotel-f00fd",
  storageBucket: "batu-hotel-f00fd.firebasestorage.app",
  messagingSenderId: "60513617208",
  appId: "1:60513617208:web:1d5e09432b26591944edcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export services
export { app, db, auth, storage };
