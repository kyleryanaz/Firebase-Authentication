import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

// Get Elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

// Add login event
btnLogin.addEventListener("click", e => {
  // Get Email and Pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // Sign In
  const promise = auth.signInWithEmailAndPassword(email, pass);

  promise.catch(e => console.log(e.message));
});

// Add signup event
btnSignUp.addEventListener("click", e => {
  // Get Email and Pass
  // TODO: Check for real emails
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // Sign In
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener("click", e => {
  firebase.auth().signOut();
});

// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    btnLogout.style.display = "inline";
  } else {
    console.log("not logged in");
    btnLogout.style.display = "none";
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Authentication</h2>
        </div>
        <p className="App-intro">lets authenticate!</p>
      </div>
    );
  }
}

export default App;
