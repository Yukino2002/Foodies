import {TextField} from "@mui/material";
import comments from './database/services/comments';
import {useNavigate} from "react-router-dom";
import {getAuth} from "firebase/auth";
import Button from "@mui/material/Button";
import * as React from "react";

const CommentForm = ({ id }) => {
    const navigate = useNavigate();
    const auth = getAuth();
    const onSubmit = (e) => {
        e.preventDefault();
        if (!auth.currentUser) {
            alert('Please log in to add a comment');
            return;
        }
        if (e.target.comment.value === '') {
            alert('Please add a comment');
        } else {
            comments.addComment({
              recipe: id,
              user: auth.currentUser.uid,
              content: e.target.comment.value})
              .then(() => {
                  e.target.comment.value = '';
                  navigate(`/recipes/${id}`)
              })
        }
    }

    return (
      <form onSubmit={onSubmit}>
        <TextField
            id="outlined-multiline-static"
            label="Comment"
            name='comment'
            multiline
            fullWidth
            rows={4}
            placeholder='What do you think of this recipe? Share your experience to help others. '
        />
          <Button variant="contained" color="error" type='submit' sx={{ margin: '20px' }}>
              Submit Comment
          </Button>
      </form>
    );
};

export default CommentForm