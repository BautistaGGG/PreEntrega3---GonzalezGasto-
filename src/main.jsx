import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./pages/home/App"
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy5UlQ5qWjMkcsLZXW-ROxruKORUVyy8I",
  authDomain: "e-commerce-coderhouse-f6303.firebaseapp.com",
  projectId: "e-commerce-coderhouse-f6303",
  storageBucket: "e-commerce-coderhouse-f6303.appspot.com",
  messagingSenderId: "1067821560475",
  appId: "1:1067821560475:web:43b857ae4e120416f90c3e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
