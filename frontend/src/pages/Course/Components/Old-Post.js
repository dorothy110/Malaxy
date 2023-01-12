import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/*
 * This function displays a discussion post
 */
const PostView = (props) => {
  const postBody = props.postBody;
  const idx = props.idx;

  const editorFormat = {
    margin: "1em 0%",
  };

  return (
    <div className="form-control" style={editorFormat}>
      {postBody}
    </div>
  );
};

export default PostView;
