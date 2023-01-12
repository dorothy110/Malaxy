import Avatar1 from "images/avatar1.png";
import Avatar2 from "images/avatar2.png";
import Avatar3 from "images/avatar3.png";
import Avatar4 from "images/avatar4.png";
import Avatar5 from "images/avatar5.png";
import Avatar6 from "images/avatar6.png";
import Avatar7 from "images/avatar7.png";
import Avatar8 from "images/avatar8.png";

const logos = [
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
];
function getAvatar(id) {
  return logos[id % 8];
}

export default getAvatar;
