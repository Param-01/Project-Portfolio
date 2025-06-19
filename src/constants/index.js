import { d, f } from "maath/dist/index-43782085.esm";
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
  git,
  figma,
  docker,
  jobit,
  tripguide,
  threejs,
  python,
  django,
  mysql,
  firebase,
  restapi,
  nextuprecruitment,
  appstore
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Mobile Application Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Engineer",
    icon: web,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Pyhton",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
   {
    name: "Firebase",
    icon: firebase,
  },
   {
    name: "REST API",
    icon: restapi,
  },
];

const experiences = [
  {
    title: "Full-Stack Software Engineering Co-op",
    company_name: "Freshbooks",
    icon: "https://media.licdn.com/dms/image/v2/D4E0BAQGKyZ7mdU__sQ/company-logo_100_100/B4EZW5FQFqHcAU-/0/1742566916818/freshbooks_logo?e=1755734400&v=beta&t=Na-tSDYg-zrE-D9HIrg2bDpirsuzBFIKK0Tp6jU6g6U",
    iconBg: "#FFFFFF",
    date: "May 2024 - December 2024",
    points: [
      "Enhanced server-side rendering and client performance in React.js and Ember.js apps using Next.js in an Agile team.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Palm Infotech",
    icon: "https://media.licdn.com/dms/image/v2/C560BAQHr4bbbvX4nsg/company-logo_100_100/company-logo_100_100/0/1675679988292/palm_infotech_logo?e=1755734400&v=beta&t=KQMWkUlr6nn-lHifxhnrCMEqh1jgmWULZb1Wt0v6hj8",
    iconBg: "#FFFFFF",
    date: "June 2021 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      `I managed Param as a Full Stack Engineering co-op at FreshBooks for 2 consecutive terms. 
      Param was a pleasure to work with and a great team player. Once he got comfortable with the team,
      environment and codebase, he really started to showcase his technical ability and interest to
      learn and grow. Early on, he worked closely with several other engineers, often pairing with 
      them to learn and better understand the codebase and engineering practices we used. He was 
      able to effectively contribute to high quality PRs, code reviews, technical discussions and 
      ask thoughtful contributions, both technical and product-related.`, 
    name: "Adam Mascherin",
    designation: "Engineering Manager",
    company: "Freshbooks",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQHctEOHv24vnA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1576524478174?e=1755734400&v=beta&t=59Q8Iq834M33FCPf_8QKJsDib7cs_KIlIbCzEnIHF8M  ",
  },
  {
    testimonial:
      `I had the pleasure of managing Param Mehta during his tenure as a React Native Developer 
      on our team. Param's technical expertise in React Native, combined with his sharp skills 
      in Node.js for REST api development, greatly contributed to the success of our projects.
      Param's dedication to his work, coupled with his proactive approach, made him a valuable 
      asset to our team. His passion for staying ahead in the ever-evolving tech landscape was 
      evident in his continuous pursuit of knowledge. I highly recommend Param for his exceptional 
      skills, collaborative spirit, and commitment to delivering high-quality results.`,
    name: "Parth Patel",
    designation: "COO",
    company: "Palm Infotech",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFqkm_0fe-jkg/profile-displayphoto-shrink_100_100/B4EZXjyZD.HgAU-/0/1743283393865?e=1755734400&v=beta&t=sE8ASeFdlKi4tTG06bffUg9lIPQ_7l9h7PKYXybjUWE",
  },
  {
    testimonial:
      `I am pleased to write this recommendation for Param mehta, who consistently demonstrates
      his skills in logic building and in programming. He has profound understanding of programming
      languages like javascript and typescripts , also has knowledge of node.js , he has good experience
      in mobile applications development and also knowledge of backend services.
      He is always keen to learn new things and an excellent team player. I am confident that param will excel
      in any role he would assign to and can be valuable asset to any organisation.`,
    name: "Krunal Deogharakar",
    designation: "Chief Solution Architect",
    company: "Palm Infotech",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQFmdnS-5gWv3w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1622383485190?e=1755734400&v=beta&t=FaFo2RZ-mDgWLAG1zUr2v9uNv1j6nVwV4dZ-pY5t9CM",
  },
];

const projects = [
  {
    name: "NextUpRecruitment",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase datastore",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: nextuprecruitment,
    source_code_link: "https://apps.apple.com/ca/app/nextuprecruitment/id1469439039",
    icon_image: appstore,
    icon_background_color: "blue",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
