import { db } from '../auth'

const getComments = async (recipeId) => {
  const query = db.collection("/comments/").where("recipe", "==", recipeId);
  const commentsSnapshot = await query.get();
  return commentsSnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
}

const addComment = async (comment) => {
  const newComment = await db.collection("/comments/").add(comment);
  const newCommentData = await newComment.get();
  return {...newCommentData.data(), id: newCommentData.id}
}

const editComment = (id, comment) => {
  return new Promise((resolve, reject) => {
    db.collection("/comments/").doc(id).update(comment).then(() => {
      resolve();
    }).catch((e) => {
      reject(e);
    })
  })
}

const deleteComment = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("/comments/").doc(id).delete().then(() => {
      resolve();
    }).catch((e) => {
      reject(e);
    })
  })
}

export default {
  getComments,
  addComment,
  editComment,
  deleteComment
}