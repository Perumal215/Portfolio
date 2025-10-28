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
  },

];

const experiences = [
  {
    title: "",
    company_name: "",
    icon: cognizant,
    iconBg: "#fff",
    date: "May 2024 - present",
    points: [
      "Achieved ServiceNow Certified Risk and Compliance certification.",
      "Specialized in GRC/IRM (Governance, Risk, and Compliance/Integrated Risk Management) within ServiceNow, gaining hands-on experience in this product line."
    ],
  }

];

const extracurricular = [
  {
    title: "1.5K+ Connections on LinkedIn",
    type: "Achievements",
    iconBg: "#007BB5",
    date: "April 2023",
    points: ["Credential ID: perumalsinghrajput"],
    credential: "https://www.linkedin.com/in/perumalsinghrajput/",
  },
  {
    title: "Java (Basic), CSS, SQL (Basic)-HackerRank",
    type: "Certification",
    // icon: hackerrank,
    iconBg: "#050C18",
    date: "2022-2023",
    points: [
      "Credential ID: aac000e38dc9",
      "Credential ID: a274bb1292eb",
      "Credential ID: b024370fa737",
    ],
    credential: "https://www.hackerrank.com/certificates/aac000e38dc9",
  },
  {
    title: "Web Development-Internshala",
    type: "Certification",
    // icon: internshala,
    iconBg: "#1294C8",
    date: "Sept 2021",
    points: ["Credential ID: 281DB109-2DA8-A160-DCBC-C6C0F552B57C"],
    credential:
      "https://trainings.internshala.com/verify-certificate/?certificate_number=281DB109-2DA8-A160-DCBC-C6C0F552B57C",
  },
  {
    title: "Combat Sport-Karate",
    type: "Extracurricular(Hobby)/Combat Sport",
    icon: karate,
    iconBg: "#CCCFD8",
    date: "2006-2020",
    points: [
      "State level Gold medalist in Kumite.",
      "Renshi Cup National Championship Bronze medalist in Kumite.",
    ],
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
