import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth"
import { db, auth } from "../auth"
import firebase from "firebase/compat/app"

const signup = async (email, username, password) => {
  //check if user exists
  const user = await db.collection("users").where("email", "==", email).get()
  if (!user.empty) {
    throw new Error("User already exists")
  }

  await createUserWithEmailAndPassword(auth, email, password)
  console.log(auth.currentUser)

  db.collection("users").add({
    id: auth.currentUser.uid,
    email: email,
    username: username
  }).then(r => console.log(r))
}

const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
  console.log(auth.currentUser)
}

const logout = async () => {
  await signOut(auth)
  console.log(auth.currentUser)
}

const getUser = async (id) => {
  const userQuery = db.collection("users").where("id", "==", id)
  const user = await userQuery.get()
  if (!user) {
    throw new Error("User does not exist")
  }
  console.log(user.docs)
  return user.docs[0].data()
}

const saveRecipe = async (userId, recipeId) => {
  const userQuery = db.collection("users").where("id", "==", userId)
  const user = await userQuery.get()
  if (user.length === 0) {
    throw new Error("User does not exist")
  }

  const recipeRef = await db.collection("recipes").doc(recipeId).get()
  if (!recipeRef.exists) {
    throw new Error("Recipe does not exist")
  }

  await db.collection("users").doc(user.docs[0].id).update({
    savedRecipes: firebase.firestore.FieldValue.arrayUnion(recipeId)
  })
}



export default {
  signup,
  login,
  logout,
  saveRecipe,
  getUser
}