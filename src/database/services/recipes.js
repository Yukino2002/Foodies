import { db } from '../auth';

const getAllRecipes = async () => {
  const recipeSnapshot = await db.collection("/recipes/").get()
  return recipeSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
}

const getRecipe = async (id) => {
  const recipeSnapshot = await db.collection("/recipes/").doc(id).get()
  console.log(recipeSnapshot.data())
  return {...recipeSnapshot.data(), id: recipeSnapshot.id}
}

const deleteRecipe = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("/recipes/").doc(id).delete().then(() => {
      resolve();
    }).catch((e) => {
      reject(e);
    })
  })
}

const addRecipe = async (recipe) => {
  const recipeRef = await db.collection("/recipes/").add(recipe)
  const recipeData = await recipeRef.get()
  return {...recipeData.data(), id: recipeRef.id}
}

export default {
  getAllRecipes,
  getRecipe,
  deleteRecipe,
  addRecipe
}