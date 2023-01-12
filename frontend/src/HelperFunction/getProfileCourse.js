const courses = {
  1184: {
    code: "Astron 550",
  },
  1196: {
    code: "Astron 735",
  },
  2358: {
    code: "CS 400",
  },
  2368: {
    code: "CS 506",
  },
  2380: {
    code: "CS 537",
  },
  2388: {
    code: "CS 559",
  },
  2395: {
    code: "CS 577",
  },
  7015: {
    code: "Math 234",
  },
  7024: {
    code: "Math 321",
  },
  8731: {
    code: "Physics 249",
  },
  8743: {
    code: "Physics 311",
  },
};

function getProfileCourse(id) {
  return courses[id].code;
}

export default getProfileCourse;
