import emoji from 'react-easy-emoji';

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Praveesh",
  middleName: "",
  lastName: "Pavithran",
  message: " Frontend Developer",
  subTitle: emoji(
    "A passionate Frontend Developer 🚀 having an experience of building Web and Mobile applications with JavaScript and Reactjs"
  ),
  resume:
    "https://drive.google.com/file/d/1hyy-F4sNux0eCn1CJqb73Eov7rojmctD/view?usp=sharing",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/praveesh91",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/praveeshpavithran/",
    },
    {
      image: "fa-google-plus-g",
      url: `mailto:praveesh91@gmail.com`,
    },
    {
      image: "fa-codepen",
      url: "https://codepen.io/praveesh91",
    },
    {
      image: "fa-stack-overflow",
      url: "https://stackoverflow.com/users/5426201/praveesh-pavithran",
    },
  ],
};

const about = {
  show: true,
  heading: "What I do",
  imageSize: 375,
  message: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Integrate application front end with application business layer"),
    emoji("⚡ Conduct Usability Testing to resolve interface problems"),
  ],
  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },

    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins",
    },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "praveesh91@gmail.com",
};

const projects = [
  {
    title: "E-waste Managemnt",
    startDate: "2016",
    description:
      "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
    images: [
      "images/portfolio/animal-shelter/demo4.png",
      "images/portfolio/animal-shelter/demo2.png",
      "images/portfolio/animal-shelter/demo3.png",
      "images/portfolio/animal-shelter/demo1.png",
    ],
    url: "https://main.d31ttz1ari6y6f.amplifyapp.com/",
    technologies: [
      {
        class: "devicon-angularjs-plain",
        name: "Angular",
      },
      {
        class: "devicon-typescript-plain",
        name: "TypeScript",
      },
      {
        class: "devicon-csharp-plain",
        name: "C#",
      },
    ],
  },
  {
    title: "Parking Management",
    startDate: "2020",
    description:
      "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
    images: [
      "images/portfolio/photography/demo2.jpg",
      "images/portfolio/photography/demo1.png",
      "images/portfolio/photography/demo3.jpg",
    ],
    url: "https://master.d33iiktbeebmnt.amplifyapp.com/",
    technologies: [
      {
        class: "devicon-react-original",
        name: "React",
      },
      {
        class: "devicon-javascript-plain",
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Quiz App",
    startDate: "2020",
    description:
      "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
    images: [
      "images/portfolio/quiz-app/demo1.jpg",
      "images/portfolio/quiz-app/demo2.jpg",
      "images/portfolio/quiz-app/demo3.jpg",
    ],
    url: "https://master.d3ezzvdpu3szgl.amplifyapp.com/",
    technologies: [
      {
        class: "devicon-react-original",
        name: "React",
      },
      {
        class: "devicon-javascript-plain",
        name: "JavaScript",
      },
    ],
  },
  {
    title: "User Directory",
    startDate: "2020",
    description:
      "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
    images: [
      "images/portfolio/user-directory/demo1.png",
      "images/portfolio/user-directory/demo2.png",
    ],
    url: "https://master.d2m6ws5ulckit0.amplifyapp.com/one",
    technologies: [
      {
        class: "devicon-react-original",
        name: "React",
      },
      {
        class: "devicon-javascript-plain",
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Corporate Website",
    startDate: "2019",
    description:
      "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
    images: [
      "images/portfolio/adventure/demo3.jpg",
      "images/portfolio/adventure/demo1.png",
      "images/portfolio/adventure/demo2.jpg",
    ],
    url: "https://master.d39vzl9oqgwjit.amplifyapp.com/",
    technologies: [
      {
        class: "devicon-angularjs-plain",
        name: "Angular",
      },
      {
        class: "devicon-typescript-plain",
        name: "TypeScript",
      },
      {
        class: "devicon-csharp-plain",
        name: "C#",
      },
    ],
  },
];

const experience = [
  {
    company: "Robert Bosch",
    title: "Software Engineer",
    years: "07/2020 - current",
    mainTech: ["ReactJS", "Hooks", "Axios"],
    technologies: [
      "JavaScript",
      "ReactJS",
      "AntD",
      "Swagger",
      "JIRA",
      "Docker",
      "Jenkins",
      "localization",
    ],
  },
  {
    company: "Webenza India Pvt Ltd",
    title: "Software Engineer",
    years: "08/2019 - 05/2020",
    mainTech: ["ReactJS", "API"],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "Material Design",
      "Postman",
    ],
  },
  {
    company: "IBM India Pvt Ltd",
    title: "Software Engineer",
    years: "08/2018 - 04/2019",
    mainTech: ["Responsive"],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "SAP UI5",
      "SOAP UI",
    ],
  },
  {
    company: "Amrita CREATE",
    title: "Front-End Developer",
    years: "08/2014 - 12/2017",
    mainTech: ["JavaScript", "Bootstrap"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "VS Code"],
  },
];

export { navBar, mainBody, about, getInTouch, projects, experience };
