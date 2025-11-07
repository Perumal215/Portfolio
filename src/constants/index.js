import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  tailwind,
  mysql,
  git,
  oist,
  oist1,
  cognizant,
  karate,
  ecommerce,
  resumebuilder,
  aws,
} from "../assets";

export const navLinks = [
    {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
 
 
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
 
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "E.S College of Engineering and Technology",
    company_name: "Affiliated to Anna University",
    icon: oist,
    iconBg: "#fff",
    date: "2022-2026 - present",
    points: ["Bachelors in  Electronics and Communication  Engineering",      "CGPA: 8.2/10",
    ],
  },
  {
    title: "GOVT BOYS HIGHER SECONDARY SCHOOL ,PUTHUPETTAI",
    company_name: "State Board of Tamilnadu",
    icon: oist1,
    iconBg: "#fff",
    date: "2022",
    points: ["computer science",      "CGPA: 6.3/10",
    ],
  },
 
]
const technologies = [

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MySQL",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  }

];

const experiences = [
  {
    title: "",
    company_name: "",
    icon: cognizant,
    iconBg: "#fff",
    date: "",
    points: [
      
    ],
  }

];

const extracurricular = [
  {
    title: "",
    type: "Achievements",
    iconBg: "#007BB5",
    date: "",
    points: ["Credential ID: "],
    credential: "",
  },

];

const projects = [
  {
    name: " Prototype E-commerce Website",
    description:
" Designed and developed a test-phase e-commerce platform with features like user login, product catalog, cartsystem, and order summary.  Practiced full-stack development concepts with Django and database integration.",
    tags: [
      {
        name: " Django",
        color: "blue-text-gradient",
      },
      {
        name: " HTML",
        color: "orange-text-gradient",
      },
      {
        name: " CSS",
        color: "pink-text-gradient",
      },
      {
        name: " Bootstrap",
        color: "  green-text-gradient",
      },
      {
        name: " SQLite3",
        color: "blue-text-gradient",
      },{
        name: " Python",
        color: "red-text-gradient",
      },
      {
        name: " JavaScript",
        color: "orange-text-gradient",
      }
    ],
    image: ecommerce,
    source_code_link: " ",
    live_project_link: " ",
  },
    {
    name: "Resumebuilder ",
    description:"The Resume Builder is a full-stack web application that allows users to create, customize, and download professional resumes online. The platform provides multiple pre-designed templates, an easy-to-use form-based interface, and real-time preview functionality." ,   tags: [
      {
        name: " Django",
        color: "blue-text-gradient",
      },
      {
        name: " HTML",
        color: "orange-text-gradient",
      },
      {
        name: " CSS",
        color: "pink-text-gradient",
      },
      {
        name: " Bootstrap",
        color: "  green-text-gradient",
      },
      {
        name: " SQLite3",
        color: "blue-text-gradient",
      },{
        name: " Python",
        color: "red-text-gradient",
      },
      {
        name: " JavaScript",
        color: "orange-text-gradient",
      }
    ],
    image: resumebuilder,
    source_code_link: "https://github.com/Perumal215/Resumebuilder-django",
    live_project_link: "https://github.com/Perumal215/Resumebuilder-django",
  },
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
