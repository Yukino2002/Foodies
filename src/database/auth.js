import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import "firebase/compat/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0khdcpQhjlBmbCfMNhrEHTsCgaYH0FDg",
  authDomain: "recipe-app-test-c130b.firebaseapp.com",
  projectId: "recipe-app-test-c130b",
  storageBucket: "recipe-app-test-c130b.appspot.com",
  messagingSenderId: "201144745981",
  appId: "1:201144745981:web:f934664ad4a6231ba72394",
  measurementId: "G-H3F7SJMDT1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);

const storage = firebase.storage();

export { db, auth, storage };