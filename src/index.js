import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Router from './screens/Router';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

//Configuración FirseBase y Firestore
const firebaseConfig = {
  apiKey: "AIzaSyD-2RF4XVy9CisoI4luFw9EhJ-PAP_z_Kg",
  authDomain: "comixecomerce.firebaseapp.com",
  projectId: "comixecomerce",
  storageBucket: "comixecomerce.appspot.com",
  messagingSenderId: "440534830391",
  appId: "1:440534830391:web:a56bd4e664d003f46b9eb2"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
