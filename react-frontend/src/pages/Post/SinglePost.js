import React from 'react';
import Button from "@material-ui/core/Button";
import '../../css/SinglePost.css';
import {Container} from "@material-ui/core";



const singlePost = props => (
  <Container className="singlePostWrapper">
      <article className="post">
        <header className="post__header">
          <h1 className="post__title">Title: {props.title}</h1>
        </header>
        {props.content}
          <h3 className="post__meta">
            Posted by {props.author} on {props.date}
          </h3>
          <div className="post__actions">
          <Button id="edit" variant="contained" onClick={props.onStartEdit}>
            Edit
          </Button>
          <Button id="delete" variant="contained" design="danger" onClick={props.onDelete}>
            Delete
          </Button>
        </div>
      </article>
  </Container>
);

export default singlePost;