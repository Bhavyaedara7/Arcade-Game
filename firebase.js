import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { 
  getAuth, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  signInAnonymously, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzU7kf0k04xqsEFJXJRZ3MeEDWhG9xp9o",
  authDomain: "arcade-df4cc.firebaseapp.com",
  projectId: "arcade-df4cc",
  storageBucket: "arcade-df4cc.firebasestorage.app",
  messagingSenderId: "630977578431",
  appId: "1:630977578431:web:5cf965fb8bc967fa86cd0a"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// ✅ Firestore Collection
const scoresCollection = collection(db, "highscores");


// ✅ Export Firebase Services
export { auth, provider, signInWithPopup, signInWithEmailAndPassword, signInAnonymously, GoogleAuthProvider, signOut, onAuthStateChanged, db, scoresCollection };
console.log("✅ Firebase Initialized Successfully!");
