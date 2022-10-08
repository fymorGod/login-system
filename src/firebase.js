
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDCovtXi1EftEkS8RMl8eSE9b8r9okEeK8",
  authDomain: "login-teste-1d30a.firebaseapp.com",
  projectId: "login-teste-1d30a",
  storageBucket: "login-teste-1d30a.appspot.com",
  messagingSenderId: "350111044795",
  appId: "1:350111044795:web:b207e7224c24fb4b77059e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth};