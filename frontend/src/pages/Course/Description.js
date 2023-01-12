import React, { useState } from "react";
import Board from "./Components/DiscussionBoard";
import CourseView from "./Components/CourseView";
import GradeDistribution from "./Components/Grade";
//import logo from "../../images/Planet.png";
import styled from "styled-components";
import { useCourseInfo } from "apicache";
import getCourseLogo from "HelperFunction/getCourseLogo";

/*
 * This is the course description page.
 * It displays following information of a course:
 *              course overview
 *              instructors who taught this course
 *              which semester this course was taught
 *              grade distribution
 *              discussion board
 */
const CourseDescription = (props) => {
  let currentPage = window.location.pathname.substring(8);
  // const {
  //   data: { results: courseInfo },
  // } = useCourseInfo(currentPage);
  const valid = [
    "1184",
    "1196",
    "2358",
    "2368",
    "2380",
    "2388",
    "2395",
    "7015",
    "7024",
    "8731",
    "8743",
  ];
  if (valid.includes(currentPage) === false) {
    currentPage = "2380";
  }
  const courses = {
    1184: {
      code: "Astron 550",
      name: "Astrodynamics",
      overView:
        "Coordinate system transformations, central force motion, " +
        "two body problem, three and n-body problem, " +
        "theory of orbital perturbations, artificial satellites, " +
        "elementary transfer orbits, and elementary rocket dynamics.",
      instructors: [
        { key: 1, text: "Jennifer Choy", value: "jenniferC" },
        { key: 2, text: "Robbert Witt", value: "robbertW" },
      ],
      semesters: [
        { key: 1, text: "Fall 2022", value: "fall2022" },
        { key: 3, text: "Spring 2022", value: "spring2022" },
      ],
      grades: {
        default: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [138, 67, 84, 22, 3, 0, 4],
            },
          ],
        },
        jenniferC: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        robbertW: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [50, 40, 24, 12, 7, 0, 0],
            },
          ],
        },
        fall2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        spring2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [48, 30, 40, 17, 5, 3, 7],
            },
          ],
        },
      },
    },
    1196: {
      code: "Astron 735",
      name: "Observational Cosmology",
      overView:
        "Extragalactic distance scale; groups and clusters of galaxies; " +
        "distribution of galaxies and radio sources. " +
        "Introduction to general relativity, cosmological models, " +
        "microwave background, early universe, galaxy formation.",
      instructors: [
        { key: 1, text: "Christina Tremonti", value: "christinaT" },
        { key: 2, text: "Amy Barger", value: "amyB" },
      ],
      semesters: [
        { key: 1, text: "Fall 2022", value: "fall2022" },
        { key: 3, text: "Spring 2022", value: "spring2022" },
      ],
      grades: {
        default: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [138, 67, 84, 22, 3, 0, 4],
            },
          ],
        },
        christinaT: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        amyB: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [50, 40, 24, 12, 7, 0, 0],
            },
          ],
        },
        fall2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        spring2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [48, 30, 40, 17, 5, 3, 7],
            },
          ],
        },
      },
    },
    2358: {
      code: "CS 400",
      name: "Programming III",
      overView:
        "The third course in our programming fundamentals sequence. " +
        "It presumes that students understand and use functional and " +
        "object-oriented design and abstract data types as needed. " +
        "This course introduces balanced search trees, graphs, graph traversal algorithms, " +
        "hash tables and sets, and complexity analysis and about classes of problems that require each data type.",
      instructors: [
        { key: 1, text: "Gary Dahl", value: "garyD" },
        { key: 2, text: "Florian Heimerl", value: "florianH" },
      ],
      semesters: [
        { key: 1, text: "Fall 2022", value: "fall2022" },
        { key: 3, text: "Spring 2022", value: "spring2022" },
      ],
      grades: {
        default: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [138, 67, 84, 22, 3, 0, 4],
            },
          ],
        },
        garyD: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        florianH: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [50, 40, 24, 12, 7, 0, 0],
            },
          ],
        },
        fall2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        spring2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [48, 30, 40, 17, 5, 3, 7],
            },
          ],
        },
      },
    },
    2368: {
      code: "CS 506",
      name: "Software Engineering",
      overView:
        "Ideas and techniques for designing, developing, and modifying large software systems. " +
        "Topics include software engineering processes; requirements and specifications; project team organization and management. " +
        "Students will work in large teams on a substantial programming project.",
      instructors: [{ key: 1, text: "Tracy Lewis-Williams", value: "tracyLW" }],
      semesters: [{ key: 1, text: "Fall 2020", value: "fall2020" }],
      grades: {
        default: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [138, 67, 84, 22, 3, 0, 4],
            },
          ],
        },
        tracyLW: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        fall2020: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
      },
    },
    2380: {
      code: "CS 537",
      name: "Introduction to Operaeting System",
      overView:
        "This course will introduce you to an exciting range of materials " +
        "from the broad field of operating systems, including basic operating " +
        "system structure, process and thread synchronization and " +
        "concurrency, file systems and storage servers, memory management " +
        "techniques, process scheduling and resource management, " +
        "virtualization, security, and even distributed systems.",
      instructors: [
        { key: 1, text: "Remzi Arpaci-Dusseau", value: "remziA" },
        { key: 2, text: "Yuvraj Patel", value: "yuvrajP" },
        { key: 3, text: "Michael Swift", value: "michaelS" },
      ],
      semesters: [
        { key: 1, text: "Fall 2022", value: "fall2022" },
        { key: 2, text: "Summer 2022", value: "summer2022" },
        { key: 3, text: "Spring 2022", value: "spring2022" },
      ],
      grades: {
        default: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [138, 67, 84, 22, 3, 0, 4],
            },
          ],
        },
        remziA: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        yuvrajP: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [50, 40, 24, 12, 7, 0, 0],
            },
          ],
        },
        michaelS: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [48, 30, 40, 17, 5, 3, 7],
            },
          ],
        },
        fall2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        summer2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [50, 40, 24, 12, 7, 0, 0],
            },
          ],
        },
        spring2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [48, 30, 40, 17, 5, 3, 7],
            },
          ],
        },
      },
    },
    2388: {
      code: "CS 559",
      name: "Computer Graphics",
      overView:
        "Survey of computer graphics. Image representation, formation, presentation, " +
        "composition and manipulation. Modeling, transformation, " +
        "and display of geometric objects in two and three dimensions. " +
        "Representation of curves and surfaces. Rendering, animation, multi-media and visualization. ",
      instructors: [
        { key: 1, text: "Michael Gleicher", value: "michaelG" },
        { key: 2, text: "Young Wu", value: "youngW" },
      ],
      semesters: [
        { key: 1, text: "Fall 2022", value: "fall2022" },
        { key: 3, text: "Spring 2022", value: "spring2022" },
      ],
      grades: {
        default: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [138, 67, 84, 22, 3, 0, 4],
            },
          ],
        },
        michaelG: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        youngW: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [50, 40, 24, 12, 7, 0, 0],
            },
          ],
        },
        fall2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        spring2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [48, 30, 40, 17, 5, 3, 7],
            },
          ],
        },
      },
    },
    2395: {
      code: "CS 577",
      name: "Introduction to Algorithms",
      overView:
        "Basic paradigms for the design and analysis of efficient algorithms: " +
        "greed, divide-and-conquer, dynamic programming, reductions, " +
        "and the use of randomness. Computational intractability " +
        " including typical NP-complete problems and ways to deal with them.",
      instructors: [
        { key: 1, text: "Jin-Yi Cai", value: "jinyiC" },
        { key: 2, text: "Marc Renault", value: "marcR" },
      ],
      semesters: [
        { key: 1, text: "Fall 2022", value: "fall2022" },
        { key: 3, text: "Spring 2022", value: "spring2022" },
      ],
      grades: {
        default: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [138, 67, 84, 22, 3, 0, 4],
            },
          ],
        },
        jinyiC: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        marcR: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [50, 40, 24, 12, 7, 0, 0],
            },
          ],
        },
        fall2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        spring2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [48, 30, 40, 17, 5, 3, 7],
            },
          ],
        },
      },
    },
    7015: {
      code: "Math 234",
      name: "Calculus--Functions of Several Variables",
      overView:
        "Introduction to calculus of functions of several variables; calculus on " +
        "parameterized curves, derivatives of functions of " +
        "several variables, multiple integrals, vector calculus.",
      instructors: [
        { key: 1, text: "Botong Wang", value: "botongW" },
        { key: 2, text: "Andrew Zimmer", value: "andrewZ" },
      ],
      semesters: [
        { key: 1, text: "Fall 2022", value: "fall2022" },
        { key: 3, text: "Spring 2022", value: "spring2022" },
      ],
      grades: {
        default: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [138, 67, 84, 22, 3, 0, 4],
            },
          ],
        },
        botongW: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        andrewZ: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [50, 40, 24, 12, 7, 0, 0],
            },
          ],
        },
        fall2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        spring2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [48, 30, 40, 17, 5, 3, 7],
            },
          ],
        },
      },
    },
    7024: {
      code: "Math 321",
      name: "Applied Mathematical Analysis",
      overView:
        "Vector analysis: algebra and geometry of vectors, vector differential and integral calculus, " +
        "theorems of Green, Gauss, and Stokes; complex analysis: " +
        "analytic functions, complex integrals and residues, Taylor and Laurent series.",
      instructors: [
        { key: 1, text: "Shubin Fu", value: "shubinF" },
        { key: 2, text: "Fabian Waleffe", value: "fabianW" },
      ],
      semesters: [
        { key: 1, text: "Fall 2022", value: "fall2022" },
        { key: 3, text: "Spring 2022", value: "spring2022" },
      ],
      grades: {
        default: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [138, 67, 84, 22, 3, 0, 4],
            },
          ],
        },
        shubinF: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        fabianW: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [50, 40, 24, 12, 7, 0, 0],
            },
          ],
        },
        fall2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        spring2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [48, 30, 40, 17, 5, 3, 7],
            },
          ],
        },
      },
    },
    8731: {
      code: "Physics 249",
      name: "A Modern Introduction to Physics",
      overView:
        "Continuation of Physics 248. Modern physics: introduction to quantum mechanics, " +
        "topics from nuclear and particle physics, " +
        "condensed matter physics, and atomic physics.",
      instructors: [
        { key: 1, text: "Moritz Munchmeyer", value: "moritzM" },
        { key: 2, text: "Keith Bechtol", value: "keithB" },
      ],
      semesters: [
        { key: 1, text: "Fall 2022", value: "fall2022" },
        { key: 3, text: "Spring 2022", value: "spring2022" },
      ],
      grades: {
        default: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [138, 67, 84, 22, 3, 0, 4],
            },
          ],
        },
        moritzM: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        keithB: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [50, 40, 24, 12, 7, 0, 0],
            },
          ],
        },
        fall2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        spring2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [48, 30, 40, 17, 5, 3, 7],
            },
          ],
        },
      },
    },
    8743: {
      code: "Physics 311",
      name: "Mechanics",
      overView:
        "Origin and development of classical mechanics; mathematical techniques, " +
        "especially vector analysis; conservation laws and their relation to symmetry principles; " +
        "brief introduction to orbit theory and rigid-body dynamics; accelerated coordinate systems; " +
        "introduction to the generalized-coordinate formalisms of Lagrange and Hamilton.",
      instructors: [
        { key: 1, text: "Paul Terry", value: "paulT" },
        { key: 2, text: "Keith Bechtol", value: "keithB" },
      ],
      semesters: [
        { key: 1, text: "Fall 2022", value: "fall2022" },
        { key: 3, text: "Spring 2022", value: "spring2022" },
      ],
      grades: {
        default: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [138, 67, 84, 22, 3, 0, 4],
            },
          ],
        },
        paulT: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        keithB: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [50, 40, 24, 12, 7, 0, 0],
            },
          ],
        },
        fall2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [40, 50, 30, 10, 2, 1, 0],
            },
          ],
        },
        spring2022: {
          labels: ["A", "AB", "B", "BC", "C", "D", "F"],
          datasets: [
            {
              label: "students",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [48, 30, 40, 17, 5, 3, 7],
            },
          ],
        },
      },
    },
  };
  //const courseCode = "CS 537";
  // const courseName = "Introduction to Operaeting System";
  // const instructors = [
  //   { key: 1, text: "Remzi Arpaci-Dusseau", value: "remziA" },
  //   { key: 2, text: "Yuvraj Patel", value: "yuvrajP" },
  //   { key: 3, text: "Michael Swift", value: "michaelS" },
  // ];
  // const semesters = [
  //   { key: 1, text: "Fall 2022", value: "fall2022" },
  //   { key: 2, text: "Summer 2022", value: "summer2022" },
  //   { key: 3, text: "Spring 2022", value: "spring2022" },
  // ];

  // const grades = {
  //   default: {
  //     labels: ["A", "AB", "B", "BC", "C", "D", "F"],
  //     datasets: [
  //       {
  //         label: "students",
  //         backgroundColor: "rgba(75,192,192,1)",
  //         borderColor: "rgba(0,0,0,1)",
  //         borderWidth: 2,
  //         data: [138, 67, 84, 22, 3, 0, 4],
  //       },
  //     ],
  //   },
  //   remziA: {
  //     labels: ["A", "AB", "B", "BC", "C", "D", "F"],
  //     datasets: [
  //       {
  //         label: "students",
  //         backgroundColor: "rgba(75,192,192,1)",
  //         borderColor: "rgba(0,0,0,1)",
  //         borderWidth: 2,
  //         data: [40, 50, 30, 10, 2, 1, 0],
  //       },
  //     ],
  //   },
  //   yuvrajP: {
  //     labels: ["A", "AB", "B", "BC", "C", "D", "F"],
  //     datasets: [
  //       {
  //         label: "students",
  //         backgroundColor: "rgba(75,192,192,1)",
  //         borderColor: "rgba(0,0,0,1)",
  //         borderWidth: 2,
  //         data: [50, 40, 24, 12, 7, 0, 0],
  //       },
  //     ],
  //   },
  //   michaelS: {
  //     labels: ["A", "AB", "B", "BC", "C", "D", "F"],
  //     datasets: [
  //       {
  //         label: "students",
  //         backgroundColor: "rgba(75,192,192,1)",
  //         borderColor: "rgba(0,0,0,1)",
  //         borderWidth: 2,
  //         data: [48, 30, 40, 17, 5, 3, 7],
  //       },
  //     ],
  //   },
  //   fall2022: {
  //     labels: ["A", "AB", "B", "BC", "C", "D", "F"],
  //     datasets: [
  //       {
  //         label: "students",
  //         backgroundColor: "rgba(75,192,192,1)",
  //         borderColor: "rgba(0,0,0,1)",
  //         borderWidth: 2,
  //         data: [40, 50, 30, 10, 2, 1, 0],
  //       },
  //     ],
  //   },
  //   summer2022: {
  //     labels: ["A", "AB", "B", "BC", "C", "D", "F"],
  //     datasets: [
  //       {
  //         label: "students",
  //         backgroundColor: "rgba(75,192,192,1)",
  //         borderColor: "rgba(0,0,0,1)",
  //         borderWidth: 2,
  //         data: [50, 40, 24, 12, 7, 0, 0],
  //       },
  //     ],
  //   },
  //   spring2022: {
  //     labels: ["A", "AB", "B", "BC", "C", "D", "F"],
  //     datasets: [
  //       {
  //         label: "students",
  //         backgroundColor: "rgba(75,192,192,1)",
  //         borderColor: "rgba(0,0,0,1)",
  //         borderWidth: 2,
  //         data: [48, 30, 40, 17, 5, 3, 7],
  //       },
  //     ],
  //   },
  // };

  // const overView =
  //   "This course will introduce you to an exciting range of materials " +
  //   "from the broad field of operating systems, including basic operating " +
  //   "system structure, process and thread synchronization and " +
  //   "concurrency, file systems and storage servers, memory management " +
  //   "techniques, process scheduling and resource management, " +
  //   "virtualization, security, and even distributed systems.";
  //console.log(courses[currentPage].grades.default);
  const [grade, setGrade] = useState(courses[currentPage].grades.default);
  const changeGrade = (e, { value }) => {
    setGrade(courses[currentPage].grades[value]);
  };

  return (
    <PageFormat>
      <CourseInfoWrapper>
        <img
          src={getCourseLogo(currentPage)}
          alt="Planet"
          style={{ width: "15%", marginLeft: "-6%" }}
        />
        <NameFormat>
          <p style={{ fontSize: 25, fontWeight: "bold", marginTop: 10 }}>
            {courses[currentPage].name}
          </p>
          <p style={{ fontSize: 20, color: "grey" }}>
            {courses[currentPage].code}
          </p>
        </NameFormat>
        <ButtonWrapper>
          <ButtonFormat>Add to Favorite</ButtonFormat>
        </ButtonWrapper>
      </CourseInfoWrapper>
      <ViewFormat>
        <div style={{ marginTop: 50, marginRight: 100 }}>
          <p style={{ marginBottom: 75, fontSize: 15 }}>
            {" "}
            {courses[currentPage].overView}{" "}
          </p>
          <CourseView
            instructor={courses[currentPage].instructors}
            semester={courses[currentPage].semesters}
            grade={grade}
            onClick={changeGrade}
          />
        </div>
        <GradeWrapper>
          <GradeDistribution gradeData={grade} />
        </GradeWrapper>
      </ViewFormat>
      <CommentFormat>
        <Board />
      </CommentFormat>
    </PageFormat>
  );
};

export default CourseDescription;

const PageFormat = styled.div`
  margin-top: 75px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
`;

const CourseInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-left: 150px;
  margin-bottom: 50px;
`;

const ViewFormat = styled.div`
  margin-left: 150px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 75px;
`;

const NameFormat = styled.div`
  margin-left: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CommentFormat = styled.div`
  margin-left: 150px;
  width: 90%;
  align-self: flex-start;
`;

const GradeWrapper = styled.div`
  margin-left: 100px;
  margin-right: 75px;
`;

const ButtonWrapper = styled.div`
  margin-top: 50px;
  margin-left: 200px;
`;

const ButtonFormat = styled.button`
  width: 150px;
  height: 50px;
  font-size: 20px;
  background-color: grey;
  color: white;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
