import ordereDeMalte from './assets/images/ordereDeMalte.png';
import deans_list_fall2023 from './assets/images/deans_list_fall2023.jpg';
import honors_spring2024 from './assets/images/honors_spring2024.jpeg';
import honors_spring2025 from './assets/images/honors_spring2025.jpg';
import third_place from './assets/images/third_place.jpeg';
import techSpot from './assets/images/techSpot.jpeg';
import automation from './assets/images/automation.webp';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/husam-ramoni';
export const GITHUB_URL = 'https://github.com/RamHusam111';
export const EMAIL = 'husamramoni@gmail.com';
export const ABOUT_ME_PARAGRAPH = (
  <>
    Hi, I'm <strong>Husam Ramoni</strong>, a <strong>Software Engineering</strong> graduate from <strong>Bethlehem University</strong> with hands on experience in building <strong>scalable, production ready applications</strong>. I value <strong>clear communication</strong>, <strong>collaboration</strong>, and creating <strong>innovative</strong> solutions that solve real world problems.
  </>
);







export const SKILLS = [
  {programmingLanguages: [
    'Java', 'Python', 'JavaScript','NodeJS', 'HTML', 'CSS',
  ]},
  {frameWorksAndLibraries:[
    'React', 'Spring Boot','Bootstrap', 'Material UI', 'Chakra UI', 'Frappe', 'ERPNext' 
  ]},
  {databases: [
    'MySQL', 'MongoDB', 'Firebase', 'Hibernate', 'JPA'
  ]},
  {testingTools:[
    'Postman', 'Junit', 'TestNG', 'Selenium', 'RestAssured', 'Mockito'
  ]},
  {managementTools: [
    'Agile', 'Jira', 'Scrum', 'Git', 'GitHub', 'GitHub Actions', 'Docker', 'Excel', 
  ]},

  {operatingSystems: [
    'MacOS', 'Windows','Linux', 'Windows Server'
  ]},

  {others: [
     'Microservices', 'MAVN', 'Swagger', 'Eureka', 'Consul' ,'Figma','XAMPP', 'MetaBase', 'Grafana', 'WebSockets', 'React Router', 'React Query', 'Zustand', 'React Hook Form', 'REST APIs', 'OpenVPN', 'Feign Client',
  ]},
  
];


export const ABOUT_ME_CARDS = [

  {
    img: `${third_place}`,
    title: 'Third Place - Graduation Projects Competition',
    description:'Our project "MediSync" won third place out of 12 in the graduation projects competition at Bethlehem University.',
    date: 'Semester Spring 2025',
  },

  {
    img: `${honors_spring2025}`,
    title: 'Honors List',
    description:'GPA: 3.10/4.0',
    date: 'Semester Spring 2025',
  },

  {
    img: `${honors_spring2024}`,
    title: 'Honors List',
    description:'GPA: 3.30/4.0',
    date: 'Semester Spring 2024',
  },

  {
    img: `${deans_list_fall2023}`,
    // tag: 'MediSync',
    title: 'Dean\'s List',
    description:
      'GPA: 3.62/4.0',
    // authors: [
    //   { },
    // ],
    // technologies: [],
    date: 'Semester Fall 2023',
  },
];




export const PROJECTS_DATA = [
  {
    img: `${ordereDeMalte}`,
    tag: 'MediSync',
    title: 'Patient Management System For Holy Family Hospital Staff',
    
    descriptionParagraphs: [
      <><strong>MediSync is a Business-to-Business (B2B)</strong> healthcare solution designed to efficiently manage, organize, and track patient data for the <strong>Holy Family Hospital</strong>.</>,
      <>Completed as a <strong>graduation project</strong> in partnership with <strong>Holy Family Hospital</strong> and supervised by <strong>Bethlehem University</strong>.</>,
      <><strong>Awarded third place</strong> in a competition of <strong>12 graduation projects</strong>.</>,
    ],

    note:
      <>Deployed on a <strong>secure local server</strong> within the hospital’s network, <strong>restricted to internal access only.</strong></>,

    authors: [
      { name: 'Husam Ramoni', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Angela Salem', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Yousef Al-Bandak', avatar: '/static/images/avatar/1.jpg' },
    ],
    technologies: ['Java', 'React', 'Spring Boot', 'React Router', 'React Query', 'Zustand', 'React Hook Form', 'MySQL' , 'Windows Server', 'Docker', 'Microservices', 'MetaBase', 'Grafana', 'MAVN', 'Postman', 'Swagger', 'Consul', 'Hibernate', 'JPA', 'Jira'],
    date: '2024 - 2025',
    githubUrl: GITHUB_URL,
  },
  {
    img: `${techSpot}`,
    tag: 'TechSpot',
    title: 'Social Media Website for Developers and Tech-Interested Individuals.',
    descriptionParagraphs: [
      <><strong>TechSpot</strong> is a <strong>social media platform</strong> designed for <strong>developers and tech enthusiasts</strong>.</>,
      <>It offers a range of features, including <strong>multimedia posts</strong>, <strong>Markdown supported code sharing</strong>, <strong>real time chat</strong>, <strong>topic based feeds</strong>, and <strong>an engaging community experience</strong>.</>,
      <>Developed a <strong>Docker</strong> image to containerize the system, ensuring simplified deployment, scalability, and environment consistency across setups.</>
    ],
    note: '',

authors: [
      { name: 'Husam Ramoni', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Angela Salem', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Yousef Al-Bandak', avatar: '/static/images/avatar/1.jpg' },
    ], 
    technologies: ['Java', 'React', 'NodeJS', 'Spring Boot', 'Docker' , 'React Router', 'WebSockets', 'Firebase', 'MySQL' , 'Chakra UI', 'MAVN', 'Postman', 'Swagger', 'Hibernate', 'JPA', 'Jira'],
    date: '2024',
    githubUrl: 'https://github.com/ObjectOrienters/Techspot-Monolithic',
  },
  {
    img: `${automation}`,
    tag: 'TechSpot Automation Testing',
    title: 'Quality Assurance and Automation Testing for TechSpot Website',
    descriptionParagraphs: [
      <>Implemented a comprehensive <strong>Quality Assurance (QA) and Automation Testing</strong> strategy for the <strong>TechSpot</strong> social media platform.</>,
      <>Developed and executed <strong>automated test scripts</strong> using <strong>Java</strong>, <strong>Selenium</strong>, and <strong>RestAssured</strong> to ensure the reliability and functionality of both front-end and back-end components.</>,
      <>Conducted extensive <strong>manual testing</strong> to identify and document bugs, performance issues, and user experience improvements.</>,
    ],
    note: '',
    authors: [
      { name: 'Husam Ramoni', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Yousef Al-Bandak', avatar: '/static/images/avatar/1.jpg' },
    ],
    technologies: ['Java', 'Selenium', 'RestAssured', 'Junit', 'TestNG' ,'Mockito',  'MAVN', 'GitHub Actions', 'Excel', 'Postman'],
    date: '2024',
    githubUrl: 'https://github.com/ObjectOrienters/Automation_Testing_TechSpot_Project'
  },
];











export const EXPERIENCE_DATA = [
  {
    tag: 'Internship',
    title: 'Focus Solutions - Full-Stack Engineer',
    description: [
      'Designed and tested e-commerce applications using Frappe and ERPNext frameworks, collaborating with senior developers.',
      'Customized ERPNext modules and integrated APIs.',
      'Trained in ERPNext Frappe JavaScript Python and REST APIs.',
      'Gained experience with Agile Linux and Git.'
    ],
    date: '2024 - 2025',
    technologies: ['Frappe', 'ERPNext', 'integrated APIs', 'JavaScript', 'Python', 'REST APIs', 'Agile', 'Linux', 'Git',]
  },
  {
    tag: 'Internship',
    title: ' IT Unit, Bethlehem University - Software Engineering and QA Automation',
    description: [
      'Designed and tested software with senior engineers to enhance reliability.',
      'Contributed to code reviews, coding standards, and Agile/Scrum meetings.',
      'Trained in Software QA and Automation with Java and Selenium.',
      'Built responsive React UIs with reusable components for better performance.',
    ],
    date: '2024',
    technologies: ['Agile', 'Scrum', 'Networking', 'Java', 'Selenium', 'React', 'Software QA' ]
  },
];



