// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// for env file setup
// const firebaseConfig = {
//   apiKey: import.meta.env.FIREBASE_API_KEY,
//   authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.FIREBASE_APP_ID,
//   measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
// };

// hardcoded 
const firebaseConfig = {
  apiKey: "AIzaSyBCRANhNNegW6JZJeaYzLhipO-FlaUo5rA",
  authDomain: "gdgwtmcloudindore.firebaseapp.com",
  projectId: "gdgwtmcloudindore",
  storageBucket: "gdgwtmcloudindore.firebasestorage.app",
  messagingSenderId: "648949307797",
  appId: "1:648949307797:web:8dbfedfc7a63b48bfbbe9c",
  measurementId: "G-QRVLMN5S1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics works only on the web and only in production/localhost
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
