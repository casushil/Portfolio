import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAl2MVGKLOG9HHfIMufJtNjiPzGtUzxjCk",
  authDomain: "db-form-2a2d8.firebaseapp.com",
  projectId: "db-form-2a2d8",
  storageBucket: "db-form-2a2d8.firebasestorage.app",
  messagingSenderId: "989228920697",
  appId: "1:989228920697:web:c679ea3690cfddef9409a8",
  measurementId: "G-Y9PW5QF3BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;