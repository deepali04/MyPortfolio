// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Deepali's Portfolio",
  description:
    "I am a passionate full-stack web developer based in New Jersey, wielding the power of React, Node.js, GraphQL, and APIs to transform ideas into reality. With four years of industry experience and the continuous learning journey of a master's student, I blend theoretical knowledge with practical skills to craft seamless, scalable, and engaging web solutions. Dive into my portfolio to explore how I navigate the complexities of web development to deliver projects that stand at the intersection of creativity and technology. Let's build the future, one line of code at a time.",
  og: {
    title: "Deepali Nagwade Portfolio",
    type: "website",
    url: "http://deepalinagwade.com/",
  },
};

//Home Page
const greeting = {
  title: "Deepali Nagwade",
  subTitle:
    "I am a passionate full-stack web developer based in New Jersey, wielding the power of React, Node.js, GraphQL, and APIs to transform ideas into reality. With four years of industry experience and the continuous learning journey of a master's student, I blend theoretical knowledge with practical skills to craft seamless, scalable, and engaging web solutions. Dive into my portfolio to explore how I navigate the complexities of web development to deliver projects that stand at the intersection of creativity and technology. Let's build the future, one line of code at a time.",
  resumeLink:
    "https://github.com/deepali04/deepali04.github.io/blob/main/Deepali%20Nagwade.pdf",
  gitHubProfile: "https://github.com/deepali04/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/deepali04",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deepalinagwade/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nagwade.deepali@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express & GraphQL",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on Azure and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/deepali_04/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/nagwade_deepali",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Stevens Institute of Technology",
      subtitle: "M.S. in Computer Science",
      logo_path: "stevenslogo.png",
      alt_name: "",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Throughout my career and studies, I've focused on mastering software and web application development, blending advanced technologies and agile methodologies. My expertise spans creating intricate web solutions, seamlessly integrating front-end and back-end development.",

        "⚡ In addition to my coursework, I had the opportunity to serve as a Graduate Assistant. This role entailed contributing to the development and enhancement of webpages, as well as integrating innovative features into the Stevens Institute of Technology website.",

        "⚡ Relevant Coursework : Web Programming -I,II, Advanced Algorithms and Design, Database Management Systems, Agile Methods of Software Development, Knowledge discovery and data mining, Introduction to SAS for Finance",
      ],
      website_link: "https://www.stevens.edu/",
    },
    {
      title: "Shri Govindram Seksaria Institute of Technology and Science",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "sgsitslogo.jpeg",
      alt_name: "SGSITS",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ I have completed my bachelors of Engineering in Computer Engineering, during which I immersed myself in the essential theories and principles that underpin the vast field of computing. My academic journey was rigorously designed to furnish me with a solid grounding in computer science fundamentals, setting the stage for my advanced exploration of the discipline.",
        "⚡ I've enhanced my expertise with courses in software design patterns, data structures, and full-stack Java development, enabling me to build scalable, robust web applications.",
        "⚡ Relevant Coursework: Data structures, Operating Systems, Computer Architecture, Computer Networks, Cloud Computing, Data mining and Information Retrieval.",
      ],
      website_link: "https://www.sgsits.ac.in/",
    },
  ],
};

const companies = {
  companies: [
    {
      title: "Graduate Student Assistant",
      company: "Stevens Institute of Technology",
      company_url: "https://www.stevens.edu/",
      logo_path: "stevenslogo.png",
      duration: "November 2022 - Present",
      location: "Hoboken, New Jersey",
      descriptions: [
        "⚡ Working on developing and integrating new features using React and creating web pages for courses and faculty’s information",
        "⚡ Delivered critical assistance in the formulation and execution of communication strategies aimed at engaging students, crafting targeted emails, boosting engagement, and achieving enrollment targets in a collaborative environment",
        "⚡ Skills Used: HTML, CSS, ContentFul, Microsoft Excel, SQL, Trello",
      ],
      color: "#0879bf",
    },

    {
      title: "Software Developer",
      company: "Anuta Networks",
      company_url: "https://www.anutanetworks.com/",
      logo_path: "anutalogo.png",
      duration: "July 2021 - Jul 2022",
      location: "Bengaluru, India",
      descriptions: [
        "⚡ Created microservice-based backend using Node.js to serve REST APIs (application programming interfaces) for user account management and serving data from a NoSQL (MongoDB atlas) store, allowing other systems to leverage this data.",
        "⚡ Designed and developed a React-based Information asset dashboard, empowering users to effectively manage, sort, and categorize devices for seamless configuration with the product. Implemented an end-to-end microservice for user profile verification.",
        "Deployed with a CI/CD pipeline using Docker, Jenkins, and Kubernetes and tasked with implementation of Python and Shell scripts for automation of redundant maintenance duties to save time by 57.8%",
        "⚡ Skills Used: React.js, Node.js, Azure, MongoDB, Jenkins, HTML, CSS, GitLab, Python, GraphQL",
      ],
      color: "#9b1578",
    },
    {
      title: "Senior Systems Engineer",
      company: "Infosys Ltd.",
      company_url: "https://www.infosys.com/",
      logo_path: "infosyslogo.png",
      duration: "June 2018 - July 2021",
      location: "Bengaluru, India",
      descriptions: [
        "⚡ Responsible for designing and delivering a scalable distributed system for various microservices with a team of 6 people. Tasked with gathering requirements, presenting architecture solutions, planning and delivery of products and code review.",
        "⚡ Revamped a major reporting module by updating backend REST API built with Java Spring Boot and designing and developing frontend components using Angular. Provided SEO solutions to single page web application. ",
        "⚡ Coordinated all aspects of software development lifecycle, building and testing java code and performed quality assurance testing. ",
        "⚡ Worked on payment module to re-architecture and migrate a monolith module to microservices using java spring boot framework along with JDBC, hibernate and integrated Restful API’s, external web services ensuring high performance on mobile and desktop.",
        "⚡ Skills Used: Java, SpringBoot, Grafana, Apache Kafka, Shell Script, AWS, SAP Hybris, IBM Sterling, Relational Databases, MYSQL, Python",
      ],
      color: "#fc1f20",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "SQL Intermediate",
      subtitle: "- Hackerrank",
      logo_path: "hackerranklogo.png",
      certificate_link: "https://www.hackerrank.com/certificates/c81c1dba21e0",
      alt_name: "GCP",
      color_code: "#000000",
    },

    {
      title: "Fullstack Java Developer",
      subtitle: "- Udemy",
      logo_path: "udemylogo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d5372459-763a-4a2c-b78f-fa6b3462ebc7/",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Node JS Certification",
      subtitle: "- Hackerrank",
      logo_path: "hackerranklogo.png",
      certificate_link: "https://www.hackerrank.com/certificates/6f19988cd6df",
      alt_name: "GCP",
      color_code: "#000000",
    },
    {
      title: "Algorithm Toolbox",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/V4G3BJQTAC97",
      alt_name: "NPTEL",
      color_code: "#2A73CC",
    },
    // {
    //   title: "Data Structures",
    //   subtitle: "- Coursera",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/3R5NFZTMV8H4",
    //   alt_name: "GCP",
    //   color_code: "#2A73CC",
    // },

    {
      title: "Introduction to Front-end Development",
      subtitle: "- Meta",
      logo_path: "meta-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/SH7QY897FZZG",
      alt_name: "META",
      color_code: "#1877F2",
    },

    {
      title: "Design Patterns",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/4PVK55JF9HKM",
      alt_name: "GCP",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page

const experience = {
  title: "Experience",
  description:
    "I have worked with many companies as Software Developer, Systems engineer  and Software Architect.",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Graduate Student Assistant",
          company: "Stevens Institute of Technology",
          company_url: "https://www.stevens.edu/",
          logo_path: "stevenslogo.png",
          duration: "November 2022 - Present",
          location: "Hoboken, New Jersey",
          description: [
            "⚡ Creating the microservice-based backend using NodeJS to serve APIs for account management and serving data from a NoSQL (MongoDB) store, allowing other systems to leverage this data",
            "⚡ Deployment on various environments with a CI/CD pipeline using Docker, Jenkins, and Kubernetes",
          ],
          // description:
          // [
          //   "⚡ Working on developing and integrating new features using React and creating web pages for courses and faculty’s information.",
          //   "⚡ I also manage and support application stacks from the OS through custom applications using Amazon cloud based computing ",
          // ],
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "Anuta Networks",
          company_url: "https://www.anutanetworks.com/",
          logo_path: "anutalogo.png",
          duration: "July 2021 - Jul 2022",
          location: "Bengaluru, India",
          description: [
            "⚡ Creating the microservice-based backend using NodeJS to serve APIs for account management and serving data from a NoSQL (MongoDB) store, allowing other systems to leverage this data",
            "⚡ Deployment on various environments with a CI/CD pipeline using Docker, Jenkins, and Kubernetes",
          ],
          color: "#9b1578",
        },
        {
          title: "Senior Systems Engineer",
          company: "Infosys Ltd.",
          company_url: "https://www.infosys.com/",
          logo_path: "infosyslogo.png",
          duration: "June 2018 - July 2021",
          location: "Bengaluru, India",
          description: [
            "⚡ Revamped a major reporting module by updating backend REST APIs built with Java Spring Boot and designing and developing frontend components using Angular. This led to reports that were twice as customizable as before",
            "⚡ Enabled a successful continent-wide campaign launch with a major e-commerce company by creating a registration portal and landing page using React and Node. This allowed hundreds of users to register simultaneously for Ajio’s and services with ease within the first few hours of launch ",
            "⚡ Lowered response times to unexpected downtimes and peaks by 50%, by building dashboards that track production usage metrics using Grafana and PostgreSQL ",
          ],
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Academic Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web project and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "deepali_image.jpeg",
    description:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you have a question, a proposal, or just want to say hello, my inbox is open. I'll get back to you as soon as I can.",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  companies,
};
