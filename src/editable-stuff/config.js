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
    "https://drive.google.com/file/d/1-SzM8vVCw7P5BVasRAiGFf3xpSzNSxu1/view?usp=sharing",
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
      image: "fab fa-dev",
      url: `https://dev.to/praveesh91`,
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
    "I'm currently looking for full-time Front-end Developer opportunities! If you know of any positions available, if you have any questions, please feel free to reach me out at",
  email: "praveesh91@gmail.com",
};

const projects = [
  {
    title: "NCA Portal",
    startDate: "2021",
    description:
      "Web interface build purely in HTML5, CSS3, and Bootstrap components.",
    images: [
      "images/portfolio/NCA/demo2.png",
      "images/portfolio/NCA/demo1.png",
      "images/portfolio/NCA/demo4.png",
      "images/portfolio/NCA/demo3.png",
      "images/portfolio/NCA/demo5.png",
    ],
    url: " ",
    technologies: [
      {
        class: "fab fa-react",
        name: "React",
      },
      {
        class: "fab fa-js",
        name: "JavaScript",
      },
      {
        class: "fab fa-jenkins",
        name: "Jenkins",
      },
      {
        class: "fab fa-docker",
        name: "Docker",
      },
      {
        class: " fa-js",
        name: "Typescript",
      },
      {
        class: " fa-js",
        name: "Swagger",
      },
    ],
  },
  {
    title: "STORE",
    startDate: "2021",
    description:
      "A product inventory for the client to showcase their wide range of products to the users (organisarions). The user could subscribe to various plans provided by the client for those products.",
    images: [
      "images/portfolio/store/demo2.png",
      "images/portfolio/store/demo1.png",
      "images/portfolio/store/demo4.png",
      "images/portfolio/store/demo3.png",
    ],
    url: "",
    technologies: [
      {
        class: "fab fa-react",
        name: "React",
      },
      {
        class: "fab fa-js",
        name: "JavaScript",
      },
      {
        class: "fab fa-jenkins",
        name: "Jenkins",
      },
      {
        class: "fab fa-docker",
        name: "Docker",
      },
      {
        class: " fa-js",
        name: "Typescript",
      },
      {
        class: " fa-js",
        name: "Swagger",
      },
    ],
  },

  {
    title: "Parking Management",
    startDate: "2020",
    description:
      "Parking Solution admin which keeps track of the parking data of a parking provider. Fetch live updated data from the API's. Build using react and material UI",
    images: [
      "images/portfolio/photography/demo2.jpg",
      "images/portfolio/photography/demo1.png",
      "images/portfolio/photography/demo3.jpg",
    ],
    url: "https://master.d33iiktbeebmnt.amplifyapp.com/",
    technologies: [
      {
        class: "fab fa-react",
        name: "React",
      },
      {
        class: "fab fa-js",
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Quiz App",
    startDate: "2020",
    description:
      "This is one of the task website which I created during my hiring process",
    images: [
      "images/portfolio/quiz-app/demo1.jpg",
      "images/portfolio/quiz-app/demo2.jpg",
      "images/portfolio/quiz-app/demo3.jpg",
    ],
    url: "https://master.d3ezzvdpu3szgl.amplifyapp.com/",
    technologies: [
      {
        class: "fab fa-react",
        name: "React",
      },
      {
        class: "fab fa-js",
        name: "JavaScript",
      },
    ],
  },
  {
    title: "User Directory",
    startDate: "2020",
    description:
      "This is one of the task website which I created during my hiring process",
    images: [
      "images/portfolio/user-directory/demo1.png",
      "images/portfolio/user-directory/demo2.png",
    ],
    url: "https://master.d2m6ws5ulckit0.amplifyapp.com/one",
    technologies: [
      {
        class: "fab fa-react",
        name: "React",
      },
      {
        class: "fab fa-js",
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Corporate Website",
    startDate: "2019",
    description:
      "This is one of the task website which I created during my hiring process",
    images: [
      "images/portfolio/adventure/demo3.jpg",
      "images/portfolio/adventure/demo1.png",
      "images/portfolio/adventure/demo2.jpg",
    ],
    url: "https://master.d39vzl9oqgwjit.amplifyapp.com/",
    technologies: [
      {
        class: "fab fa-html5",
        name: "HTML",
      },
      {
        class: "fab fa-css3",
        name: "CSS3",
      },
      {
        class: "fab fa-js",
        name: "Javascript",
      },
    ],
  },
  {
    title: "Online labs",
    startDate: "2016",
    description:
      "The OLabs is based on the idea that lab experiments can be taught using the Internet, more efficiently and less expensively. The labs can also be made available to students with no access to physical labs or where equipment is not available owing to being scarce or costly.",
    images: [
      "images/portfolio/olabs/demo3.png",
      "images/portfolio/olabs/demo2.png",
      "images/portfolio/olabs/demo1.png",
      "images/portfolio/olabs/demo4.png",
    ],
    url: "http://www.olabs.edu.in/",
    technologies: [
      {
        class: "fab fa-html5",
        name: "HTML",
      },
      {
        class: "fab fa-css3",
        name: "CSS3",
      },
      {
        class: "fab fa-js",
        name: "Javascript",
      },
    ],
  },
  {
    title: "E-waste Managemnt",
    startDate: "2016",
    description:
      "Web interface build purely in HTML5, CSS3, and Bootstrap components.",
    images: [
      "images/portfolio/animal-shelter/demo4.png",
      "images/portfolio/animal-shelter/demo2.png",
      "images/portfolio/animal-shelter/demo3.png",
      "images/portfolio/animal-shelter/demo1.png",
    ],
    url: "https://main.d31ttz1ari6y6f.amplifyapp.com/",
    technologies: [
      {
        class: "fab fa-html5",
        name: "HTML",
      },
      {
        class: "fab fa-css3",
        name: "CSS3",
      },
      {
        class: "fab fa-js",
        name: "Javascript",
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
