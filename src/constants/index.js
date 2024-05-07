import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  C,
  cpp,
  flutter,
  java,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  clglogo,
  IANT,
  python,
  prodigy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name : "Python",
    icon : python
  }
];

const experiences = [
  {
    title: "Technical Team Member",
    company_name: "Government Polytechnic Pune",
    icon: clglogo,
    iconBg: "#383E56",
    date: "Sep 2022 - Sep 2023",
    points: [
      "Organized many teachnical events and workshops.",
      "Introduced new technologies to the students.",
      "Arranged E-Sports event of Valorant and PUBG.",
      "Arranged technical talk on Cloud Computing and Cyber Security.",
    ],
  },
  {
    title: "Intern - Python Developer",
    company_name: "IANT, Pune",
    icon: IANT,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Gained experience in developing web applications using Python and Django.",
      "Worked on projects involving data analysis and visualization.",
      "Learned about software development best practices and version control.",
      "Observed and participated in code reviews and team meetings.",
    ],
  },
  {
    title: "Technical Secretary",
    company_name: "Government Polytechnic Pune",
    icon: clglogo,
    iconBg: "#383E56",
    date: "Sep 2023 - Jun 2024",
    points: [
      "Organized Tech Events.",
      "Created innovative way to display talent of students on social media.",
      "Lead the team for major technical event at GPP.",
    ],
  },
  {
    title: "Intern - Android Developer",
    company_name: "Prodigy Infotech, Pune",
    icon: prodigy,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Developed Android applications using Java and Kotlin.",
      "Worked on projects involving data storage and retrieval using SQLite.",
      "Created user interfaces and implemented functionality based on requirements.",
      "Understood the software development lifecycle and the importance of testing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Do It - Task Manager App",
    description:
      "Flutter application for managing day to day tasks, Available on Playstore, please check out.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "hive",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "GuideMe Website",
    description:
      "Web Application for guiding students in their career path, with the help of mentors and AI also, This is a project for my college and it is manual website for using Mobile App.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "hygraph",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://guideme-website-aefoocth4-kunal-khairnar-05s-projects.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "Weather app created using React, which shows the weather of input city along with humidity and wind speed.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "openweatherapi",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
