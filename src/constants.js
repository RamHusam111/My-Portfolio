import ordereDeMalte from './assets/images/ordereDeMalte.png';
import deans_list_fall2023 from './assets/images/deans_list_fall2023.jpg';
import honors_spring2024 from './assets/images/honors_spring2024.jpeg';
import third_place from './assets/images/third_place.jpeg';
import techSpot from './assets/images/techSpot.jpeg';
import automation from './assets/images/automation.webp';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/husam-ramoni';
export const GITHUB_URL = 'https://github.com/RamHusam111';
export const ABOUT_ME_PARAGRAPH = `Hi, I'm Husam Ramoni graduated from Bethlehem University with a BSc in Software Engineering. I have hands on experience in developing production ready applications using modern technologies and best practices. Known for clear communication, teamwork, and delivering solutions
that meet real-world needs.`;







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
    'MacOS', 'Windows','Linux'
  ]},

  {others: [
     'Microservices', 'Maven', 'Swagger', 'Eureka' ,'Figma', 'Windows Server','XAMPP'
  ]},
  
];







export const PROJECTS_DATA = [
  {
    img: `${ordereDeMalte}`,
    tag: 'MediSync',
    title: 'Patient Management System For Hospital Staff',
    descriptionParagraphs: [
      'MediSync is a Business-to-Business (B2B) healthcare solution designed to efficiently manage, organize, and track patient data for the Holy Family Hospital.',
      '', 
      'This project was developed as part of my graduation project in collaboration with Holy Family Hospital and under the supervision of Bethlehem University.',
    ],
    note:
      "It is not publicly accessible and is currently deployed on a local server within the hospital's network.",
    noteHighlights: [
      "is currently deployed on a local server within the hospital's network."
    ],
    authors: [
      { name: 'Husam Ramoni', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Angela Salem', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Yousef Al-Bandak', avatar: '/static/images/avatar/1.jpg' },
    ],
    technologies: ['Java', 'React', 'Spring Boot', 'React Router', 'React Query', 'Zustand', 'React Hook Form', 'MySQL' , 'Windows Server', 'Docker', 'Microservices', 'MetaBase', 'Grafana', 'MAVN', 'Postman', 'Swagger', 'Consul', 'Hibernate', 'JPA', 'Jira'],
    date: '2024 - 2025',
  },
  {
    img: `${techSpot}`,
    tag: 'TechSpot',
    title: 'Social Media Website for Developers and Tech-Interested Individuals.',
    descriptionParagraphs: [
      'TechSpot is a social media hub for developers and tech enthusiasts, offering features like multimedia posts, code sharing with markdown, real-time chat, topic-based feeds, and seamless community interaction.',
      
    ],
    note: 'This project was developed as part of my Software Engineering degree at Bethlehem University.',
    noteHighlights: [],
authors: [
      { name: 'Husam Ramoni', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Angela Salem', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Yousef Al-Bandak', avatar: '/static/images/avatar/1.jpg' },
    ], 
    technologies: ['Java', 'React', 'NodeJS', 'Spring Boot', 'React Router', 'WebSockets', 'Firebase', 'MySQL' , 'Chakra UI', 'MAVN', 'Postman', 'Swagger', 'Hibernate', 'JPA', 'Jira'],
    date: '2024',
  },
  {
    img: `${automation}`,
    tag: 'TechSpot Automation Testing',
    title: 'Quality Assurance and Automation Testing for TechSpot Website',
    descriptionParagraphs: [
      'Implemented comprehensive quality assurance and automation testing for the TechSpot website, ensuring robust functionality, seamless user experience, and high performance across all features and components.'
    ],
    note: '',
    noteHighlights: [],
    authors: [
      { name: 'Husam Ramoni', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Yousef Al-Bandak', avatar: '/static/images/avatar/1.jpg' },
    ],
    technologies: ['Java', 'Selenium', 'RestAssured', 'Junit', 'TestNG' ,'Mockito',  'MAVN', 'GitHub Actions', 'Excel', 'Postman'],
    date: '2024',
  },
];









export const ABOUT_ME_CARDS = [
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

  {
    img: `${honors_spring2024}`,
    title: 'Honors List',
    description:'GPA: 3.30/4.0',
    date: 'Semester Spring 2024',
  },

  {
    img: `${third_place}`,
    title: 'Third Place - Graduation Projects Competition',
    description:'Our project "MediSync" won third place out of 12 in the graduation projects competition at Bethlehem University.',
    date: '2025',
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



