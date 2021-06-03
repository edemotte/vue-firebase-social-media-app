// import * as firebase from "firebase/app";
import { firebase } from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyBDHM-R3jw1nlphG3L1fbXy8jFtk7bWhGc",
  authDomain: "eugene-demo-90bd1.firebaseapp.com",
  projectId: "eugene-demo-90bd1",
  storageBucket: "eugene-demo-90bd1.appspot.com",
  messagingSenderId: "22753494535",
  appId: "1:22753494535:web:1fe21f6e1a69fb081ccca2",
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
};
