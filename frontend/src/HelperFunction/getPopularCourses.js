const courses = [
  {
    code: "Astron 550",
    color: "darkred",
    position: 0,
    size: 4,
    radius: 0,
    speed: 0,
    rotationSpeed: 0.2,
  },
  {
    code: "Astron 735",
    color: "skyblue",
    position: 1,
    size: 3,
    radius: 10,
    speed: 1,
    rotationSpeed: 0.2,
  },
  {
    code: "CS 400",
    color: "green",
    position: 2,
    size: 4,
    radius: 20,
    speed: 1.5,
    rotationSpeed: 0.2,
  },
  {
    code: "CS 506",
    color: "pink",
    position: 5,
    size: 3,
    radius: 25,
    speed: 3,
    rotationSpeed: 0.2,
  },
  {
    code: "CS 537",
    color: "brown",
    position: 6,
    size: 2,
    radius: 30,
    speed: 2,
    rotationSpeed: 0.2,
  },
];

function getPopularCourses() {
  return courses;
}

export default getPopularCourses;
