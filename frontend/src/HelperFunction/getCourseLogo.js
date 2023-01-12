import Earth from "images/Earth.png";
import Jupiter from "images/Jupiter.png";
import Mars from "images/Mars.png";
import Mercury from "images/Mercury.png";
import Neptune from "images/Neptune.png";
import Pluto from "images/Pluto.png";
import Venus from "images/Venus.png";

const logos = [Earth, Jupiter, Mars, Mercury, Neptune, Pluto, Venus];
function getCourseLogo(id) {
  return logos[id % 7];
}

export default getCourseLogo;
