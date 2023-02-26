import { useState, useEffect } from 'react';
import comments from './database/services/comments';
import users from './database/services/users';
import { Paper, Grid, Avatar, Divider } from '@mui/material';

const Comments = ({ id }) => {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    comments.getComments(id).then((data) => {
      console.log(data)
      data.forEach(async (comment) => {
        console.log(comment)
        const { user, content } = comment;
        const commentUser = await users.getUser(user);
        const username = commentUser.username;
        const c = { user: username, content };
        setAllComments((allComments) => [...allComments, c]);
      });
    });
  }, []);

  return (
    allComments.map((comment, index) => {
      return (
        <div key={index} style={{
          padding: '15px',
          paddingTop: '0px',
        }}>
          <Paper sx={{ p: 2, margin: 'auto' }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item >
                <Avatar alt="Remy Sharp" src='url(google.com)' sx={{alignItems: 'center', display: 'flex'}} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>{comment.user}</h4>
                <p style={{ textAlign: "left" }}>
                  {comment.content}
                </p>
              </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{ margin: "5px 0" }} />
          </Paper>
        </div>
      )
    })
  )
}

export default Comments;