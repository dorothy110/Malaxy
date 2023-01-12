import React, { useState } from "react";
import PostView from "./Post";
import "bootstrap/dist/css/bootstrap.min.css";

/*
 * This function creates the discussion board
 */
const CommentBoard = (props) => {
  const boardFormat = {
    margin: "1em 20%",
    display: "flex",
    flexDirection: "column",
  };

  const buttonFormat = {
    float: "right",
    marginTop: "1em",
  };

  const [posts, addPosts] = useState([]);
  const [newPost, setPost] = useState("");

  const postItem = posts.map((post, idx) => (
    <PostView postBody={post} key={idx} />
  ));

  return (
    <div style={boardFormat}>
      {postItem}
      <div className="form-control">
        <textarea
          className="form-control"
          onChange={(e) => {
            setPost(e.target.value);
          }}
        />
        <button
          className="btn btn-success"
          style={buttonFormat}
          onClick={() => {
            addPosts((posts) => [...posts, newPost]);
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentBoard;
