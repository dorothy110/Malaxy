import React, { useState } from "react";
import white from "images/white-heart.png";
import red from "images/red-heart.png";

const LikeButton = () => {
  //const [likes, setLikes] = useState(100);
  const [isClicked, setIsClicked] = useState(false);
  const [heart, setHeart] = useState(white);

  const handleClick = () => {
    if (isClicked) {
      //setLikes(likes - 1);
      setHeart(white);
    } else {
      //setLikes(likes + 1);
      setHeart(red);
    }
    setIsClicked(!isClicked);
  };

  return (
    <img
      src={heart}
      style={{ marginLeft: 10, width: 30, height: 30 }}
      alt="like-heart"
      onClick={handleClick}
    />
  );
};

export default LikeButton;
