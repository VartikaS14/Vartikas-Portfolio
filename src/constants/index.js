import {
  hack,
  haaga,
  cisco,
  wwt,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  chitkara,
  satluj,
  cpp,
  java,
  python,
  mysql,
  bids,
  sign,
  classroom,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
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
    title: "All India Women Hackathon 2024",
    icon: wwt,
    description:"1st Runner-Up at the All India Women Hackathon by WWT,among 130 teams nationwide."  
  },
  {
    title: "HackIndia 2024 Hackathon",
    icon: hack,
    description:"Top 25 position for an innovative Web3 project at Spark 4" 

  },
  {
    title: "Haaga-Helia University Virtual Exchange",
    icon: haaga,
    description:"Data-driven marketing program at Haaga-Helia University,Finland" 

  },
  {
    title: "Cisco Virtual Internship",
    icon: cisco,
    description:"Completed hands-on networking and IT solutions training." 

  },
];

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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
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
    name: "Python",
    icon: python,
  },
  {
    name: "MySql",
    icon: mysql,
  },
];

const education = [
  {
    title: "Bachelor of Computer Science Engineering (B.Tech)",
    institution_name: "Chitkara University, Punjab",
    icon: chitkara,
    iconBg: "#383E56",
    date: "2022 - Present",
    percentage:"8.83 (CGPA)"
  },
  {
    title: "12th Grade (Senior Secondary)",
    institution_name: "Satluj Public School, Haryana",
    icon: satluj,
    iconBg: "#E6DEDD",
    date: "2021-2022",
    percentage: "92.6%",
  },
  {
    title: "10th Grade (Secondary)",
    institution_name: "Satluj Public School, Haryana",
    icon: satluj,
    iconBg: "#E6DEDD",
    date: "2019 - 2020",
    percentage: "97%",
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
    name: "BidShere",
    description:
    "An online auction system where users can place bids on various items, manage their bids, and track auction progress in real time. This platform supports a seamless, interactive bidding experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bids,
    source_code_link: "https://github.com/VartikaS14/BidSphere-Mern-Project",
  },
  {
    name: "Sign Language Detection",
    description:
    "A real-time web application that uses machine learning to detect and translate American Sign Language (ASL) gestures into text, promoting accessibility and communication for the hearing impaired.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "green-text-gradient",
      },
      {
        name: "Real-time",
        color: "pink-text-gradient",
      },
    ],
    image: sign,
    source_code_link: "https://github.com/",
  },
  {
    name: "Classroom Management System",
    description:"An application that  manages classroom activities like attendance, assignments, and student performance, improving efficiency and organization in the learning environment.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Turtle Library",
        color: "pink-text-gradient",
      },
    ],
    image: classroom,
    source_code_link: "https://github.com/VartikaS14/Classroom-management-",
  },
];

export { services, technologies, education, testimonials, projects };
