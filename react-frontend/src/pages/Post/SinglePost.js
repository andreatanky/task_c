import React from 'react';
import Button from "@material-ui/core/Button";
import '../../css/SinglePost.css';
import {Container} from "@material-ui/core";



const singlePost = props => (
  <article className="post">
    <header className="post__header">
      <h3 className="post__meta">
        Posted by {props.author} on {props.date}
      </h3>
      <h1 className="post__title">Title:{props.title}</h1>
    </header>
    {props.content}
    <div className="post__actions">
      <Button mode="flat" onClick={props.onStartEdit}>
        Edit
      </Button>
      <Button mode="flat" design="danger" onClick={props.onDelete}>
        Delete
      </Button>
    </div>
  </article>
);

export default singlePost;