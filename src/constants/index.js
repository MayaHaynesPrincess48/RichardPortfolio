import {
  frontend, backend, ux, prototyping,
  javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, git, figma, docker, postgresql, rubyrails, graphql,
  komikult, leaderboard, math, movie, nyeusi,
  squarespace, hear, usf, lizard,
  s_angular, s_boostrap, s_css3, s_cassandra, s_django, s_docker, s_html5, s_javascript, s_jquery,
  s_laravel, s_mongodb, s_mysql, s_nodejs, s_reactjs, s_typescript, s_vuejs,
  s_postgresql, s_python, s_redux, s_firebase, s_amazon,
  r_platoon, r_dwntwn, r_yetimotion, r_dffrntera, r_racksimply,
} from '../assets'

const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
    text: 'Reat, Next, Vue, Angular, Shopify, WordPress',
  },
  {
    title: 'Backend Developer',
    icon: backend,
    text: 'Node, Express, Nest, PHP, Laravel',
  },
  {
    title: 'UI/UX Design',
    icon: ux,
    text: 'Figma, Sketch, Adobe Illustrator, Webflow',
  },
  {
    title: 'DevOps',
    icon: prototyping,
    text: 'AWS, Docker, Nginx, Apache, Github CI/CD',
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const svgTech = [
  s_amazon,
  // s_android,
  s_angular,
  s_boostrap,
  // s_c,
  // s_cPlus,
  s_css3,
  s_cassandra,
  s_django,
  s_docker,
  s_firebase,
  s_html5,
  // s_java,
  s_javascript,
  s_jquery,
  // s_kotlin,
  s_laravel,
  s_mongodb,
  s_mysql,
  s_nodejs,
  s_postgresql,
  s_python,
  s_reactjs,
  // s_redis,
  s_redux,
  // s_ruby,
  // s_rubyrails,
  // s_rust, 
  // s_spring,
  s_typescript,
  s_vuejs,
]

const experiences = [

  {
    title: 'Student',
    company_name: 'University of San Francisco',
    company_site: 'https://www.usfca.edu/',
    icon: usf,
    iconBg: '#111111',
    content: [
      'Engaged in various coursework projects, including a capstone project that involved designing a web application aimed at enhancing student engagement on campus.',
      'Dynamic and accomplished individual with a diverse skill set and strong academic background.',
      'Graduated summa cum laude with a GPA of 3.7+.',
      'Skilled in leadership, communication, and problem-solving.',
      'Played WR for the school football team, demonstrating teamwork and discipline.',
      'Received the esteemed Merit-Based Scholarships and Athletic Scholarships, a testament to exceptional academic prowess and unwavering dedication for 3 years.',
      `Bachelor's Degree`,
    ],
    date: 'September 2010 - October 2014',
    location: 'San Francisco, CA',
    project: [
      { url: 'https://www.usfca.edu/', title: 'USF' },
    ],
    skill: {
      frontend: 'HTML, CSS, JavaScript, React',
      backend: 'Node.js, Express',
      deployment: 'AWS',
    },
  },
  {
    title: 'Front End Developer',
    company_name: 'Hear',
    company_site: 'https://www.hear.com/',
    icon: hear,
    iconBg: '#111111',
    content: [
      'Translated designs and wireframes into high-quality code using HTML, CSS, and JavaScript.',
      'Worked closely with developers, designers, copywriters, and other cross-functional teams (CRO, Video, Marketing, etc..) to drive innovation and maximize conversions by 40 %.',
      'Provided input to leaders 7 times a year about the future development of new features.',
      'Ensured the technical feasibility of UI/UX designs.',
    ],
    date: 'Aprill 2015 - August 2018',
    location: 'Miami, FL',
    project: [
      { url: '', title: '' },
      { url: '', title: '' },
    ]
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Squarespace ',
    company_site: 'https://www.squarespace.com/',
    icon: squarespace,
    iconBg: '#111111',
    content: [
      'Developed and maintained multiple web applications using JavaScript (React, Next, Vue), Python (Django, Flask), PHP (Laravel), resulting in a 20% increase in application performance.',
      'Led a team of 3 developers, successfully managing projects from conception to deployment, improving team productivity by 15%.',
      'Ensured efficient task management and collaboration through github, increasing project completion rates by 20%.',
      'Deployed and maintained applications on AWS, ensuring 99.9% uptime.',
      'Utilized Git, RabbitMQ, Redis, Nginx, Apache to optimize performance and scalability.',
    ],
    date: 'August 2018 - October 2021',
    location: 'New York, NY',
    project: [
      { url: '', title: '' },
      { url: '', title: '' },
    ]
  },
  {
    title: 'Lead Full Stack Developer',
    company_name: 'Lounge Lizard LLC',
    company_site: 'https://www.loungelizard.com/',
    icon: lizard,
    iconBg: '#111111',
    content: [
      'Led and managed a team of 12 developers and designers to create efficient, effective, and visually aesthetic websites for 600+ clients.',
      'Spearheaded the development of concept mock-ups and wireframe designs, resulting in a 35% increase in client satisfaction through strategic design enhancements.',
      'Developed and implemented a customer-specific design framework, streamlining production processes and reducing site production time by 10 Days.',
      'Collaborated with VP of sales to create digital marketing designs that led to an average 20,000 + additional clients per month.',
      'Led bi-weekly standup meetings to celebrate team successes, address project weaknesses, and assign tasks based on team capacity and project priorities.',
      'Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 50%.',
    ],
    date: 'October 2021 - June 2024',
    location: 'New York, NY',
    project: [
      { url: '', title: '' },
      { url: '', title: '' },
    ]
  },
]

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/mayaHaynesPrincess48/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/mayaHaynesPrincess48/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/mayaHaynesPrincess48/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/mayaHaynesPrincess48/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/mayaHaynesPrincess48/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
]

const r_projexts = [
  {
    id: 'project-1',
    name: 'Flyplatoon',
    description: 'Created by a core team of aviation- industry experts, PLATOON is the most sophisticated way to fly private.Our unrivalled connections, collective experience and class- leading hospitality elevate jet charter to a whole new level – where premium is paramount and style comes as standard.Come join us in the stratosphere and become part of the next generation in aviation.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_platoon,
    repo: 'https://www.flyplatoon.com',
    demo: 'https://www.flyplatoon.com',
  },
  {
    id: 'project-2',
    name: 'DWNTWN',
    description: 'We Are A Full-Service Digital Agency And Business Consulting Firm That Helps Companies Grow And Thri',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_dwntwn,
    repo: 'https://dwntwnmedia.consulting/',
    demo: 'https://dwntwnmedia.consulting/',
  },
  {
    id: 'project-3',
    name: 'Yetimotion',
    description: 'Yeti Pictures is a team of designers/directors with focus in motion graphics, 3D animation and art direction based in Athens, Greece.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_yetimotion,
    repo: 'https://yetimotion.com/',
    demo: 'https://yetimotion.com/',
  },
  {
    id: 'project-4',
    name: 'Dffrntera',
    description: 'Envision ideas, branding, distribution & retail trade for a new era.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_dffrntera,
    repo: 'https://www.dffrntera.com',
    demo: 'https://www.dffrntera.com',
  },
  {
    id: 'project-5',
    name: 'RackSimply',
    description: `RackSimply is a North American solution provider specializing in industry-leading IT hardware, software, services, and cloud consulting. RackSimply is taking on a traditionally slow sales process and creating a customer-centric experience for your organization's technical team.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_racksimply,
    repo: 'https://racksimply.com/',
    demo: 'https://racksimply.com/',
  },
]

const situationinfo = [
  {
    question: 'Describe a time when you had to manage a difficult project.',
    situation: `In my previous role as a project manager at XYZ Corporation, we were tasked with developing a new software product that would integrate with our clients' existing systems. The project had a tight deadline of six months, and we faced significant challenges, including limited resources and a team that was unfamiliar with some of the new technologies required.`,
    task: `My responsibility was to ensure the project was completed on time and met all the client's requirements. This involved coordinating with different departments, managing the project timeline, and ensuring that the team was adequately trained and motivated.`,
    action: `To tackle these challenges, I first organized a kick-off meeting to clearly define the project scope, objectives, and deadlines with all stakeholders. I then broke down the project into smaller, manageable tasks and assigned them to team members based on their strengths and expertise. Recognizing the knowledge gap in new technologies, I arranged for training sessions and brought in an external consultant for critical phases of the project. Additionally, I implemented agile methodologies, holding daily stand-up meetings to monitor progress, address any roadblocks promptly, and keep everyone aligned with the project's goals.`,
    result: `As a result of these actions, we completed the project two weeks ahead of schedule and within budget. The software product was successfully integrated with the clients' systems, leading to high customer satisfaction. Furthermore, the project was highlighted as a model for future initiatives, and the team gained valuable skills in the new technologies, which benefitted subsequent projects.`,
  },
  {
    question: `Can you give an example of a time when you demonstrated leadership skills?`,
    situation: `In my role as a team lead at ABC Marketing Agency, we were tasked with launching a major marketing campaign for a new client within a very tight three-month deadline. The project was high-stakes, as it involved a substantial budget and high expectations from the client. However, the team was under significant pressure, and there were initial conflicts about the campaign direction.`,
    task: `My task was to lead the team through this challenging project, ensuring that we met the deadline while delivering high-quality work that aligned with the client’s vision. It was also crucial to resolve internal conflicts and foster a collaborative environment.`,
    action: `To address these challenges, I first held a series of meetings with the team to understand their perspectives and concerns. I facilitated open discussions to brainstorm ideas and find common ground, which helped in aligning everyone’s vision for the campaign. I then delegated specific responsibilities based on each team member’s strengths, ensuring clear communication and setting realistic milestones. Recognizing the pressure the team was under, I organized team-building activities to boost morale and reduce stress. Additionally, I maintained regular check-ins with both the client and the team to ensure transparency and adapt to any changes promptly.`,
    result: `The campaign was successfully launched on time and received positive feedback from the client, who praised our creativity and execution. The internal conflicts were resolved, resulting in a more cohesive and motivated team. Our campaign also garnered significant attention in the market, leading to increased engagement and sales for the client. The success of this project also led to an expanded contract with the client, securing more business for the agency.`,
  },
  {
    question: ``,
    situation: ``,
    task: ``,
    action: ``,
    result: ``,
  },
  {
    question: ``,
    situation: ``,
    task: ``,
    action: ``,
    result: ``,
  },
]

export { navLinks, services, technologies, svgTech, experiences, projects, r_projexts, situationinfo }
