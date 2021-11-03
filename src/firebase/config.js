// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMKME2mvzSuNqiYdPAVz8Ff2MN23eXetM",
  authDomain: "myapp-82f6b.firebaseapp.com",
  projectId: "myapp-82f6b",
  storageBucket: "myapp-82f6b.appspot.com",
  messagingSenderId: "441931538103",
  appId: "1:441931538103:web:2d92dd4c1131f68c17f732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init the Authentication service
const auth = getAuth()

export { auth }
