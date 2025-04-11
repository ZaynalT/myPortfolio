import volvoConnect from '@/assets/images/volvoConnect.jpg'
import bilia from '@/assets/images/bilia.png'
import ellos from '@/assets/images/ellos.png'
import scope360 from '@/assets/images/scope360.png'
import call4help from '@/assets/images/call4help.png'
import figure8 from '@/assets/images/figure8.png'
import techSeed from '@/assets/images/techSeed.png'
import myPortfolio from '@/assets/images/myPortfolio.png'

export const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my professional journey, projects, and skills with a focus on clean design and user experience.",
      image: myPortfolio,
      tags: ["Vue.js", "Vue Router", "Pinia", "CSS", "Responsive Design", "Dark Mode", "LocalStorage"],
      github: "https://github.com/ZaynalT/myPortfolio",
      demo: "",
      period: "2025 February - Present",
      fullText: `This portfolio website represents my journey as a front-end developer, built with Vue.js to showcase my skills and projects. The website features a modern, responsive design with a focus on user experience and clean code.

Key features include:
• Dark/light mode toggle with persistent user preferences
• Smooth animations and transitions
• Responsive layout that works seamlessly across all devices
• Reusable components for consistent UI elements
• Project showcase with detailed views
• Tag-based project filtering

Technical Implementation:
The project was built using Vue.js 3 with Vite for optimal performance. I implemented a component-based architecture using reusable components:
• Tag component for consistent tag styling
• Button component with multiple variants (primary, secondary, outline, text)
• ProjectCard component for project displays
• Navigation components for responsive menus

The codebase is organized into modular components and centralized data files for better maintainability. The design emphasizes readability and accessibility while maintaining a professional aesthetic.

You can view the source code by clicking the "GitHub" button at the top of this page.`
    },
    {
      id: 2,
      title: "TechSeed",
      description: "At TechSeed, I focused on developing key skills, especially in React, while working on in-house IoT projects. However, in early 2024, my mother was diagnosed with cancer, and we sought treatment in Turkey. I supported her from May 2024 to January 2025, which led to a gap in my resume and a brief tenure at TechSeed.",
      image: techSeed,
      tags: ["React", "Node.js", "IoT"],
      github: "",
      demo: "",
      period: "2024 February - 2024 May",
      fullText: "The reason for this explanation is to explain the gap I have in my resume and the reason for my short time on TechSeed.\n\nDuring my time at TechSeed, I focused on honing the skills I knew would be essential for securing an assignment as quickly as possible. I began by working on in-house IoT projects available within the company, gaining hands-on experience. As I progressed, I shifted my focus to refining my expertise in React, recognizing its dominance in the market. My goal was to build a strong portfolio by creating and showcasing projects on GitHub.\n\nIn early 2024, I received devastating news—my mother had been diagnosed with cancer. Unfortunately, no viable treatment options were available for her in Sweden, and the proposed alternatives offered little hope. As a family, we made the difficult decision to seek medical care in Turkey, where she underwent extensive surgery and treatment. My brother and I traveled with her, staying from May 2024 to January 2025 to provide support during this critical period."
    },
    {
      id: 3,
      title: "Call4Help Emergency Response",
      description: "An emergency response system connecting users with nearest emergency services and providing real-time location tracking.",
      image: call4help,
      tags: ["Flutter", "Spring Boot", "Java", "Figma", "Tailwind", "Docker", "PostgreSQL", "AWS", "pgAdmin", "Automatic Testing", "Jest"],
      github: "",
      demo: "https://call4help.se/",
      period: "2023 October - 2024 January",
      fullText: "Call4Help is a location-based application designed to assist people in emergency situations. Users can create alarms that are broadcast to individuals within a specified radius of the alarm's location.\n\nThe application supports multiple alarm formats, including text, photos, and videos, ensuring flexibility in communication during emergencies. It is developed using Flutter for the frontend and Java Spring for the backend, with PostgreSQL handling data management.\n\nAWS is used for both the CI/CD pipeline and backend hosting. When I joined the project, I took full ownership as the sole developer, handling both frontend and backend responsibilities.\n\nI implemented new UI components, built corresponding backend endpoints, and dockerized the backend for efficient deployment on AWS. I also carried out extensive refactoring, applying Clean Code principles to enhance scalability and maintainability.\n\nMy contributions brought structure and clarity to the codebase, resulting in a more maintainable architecture. The backend was successfully deployed to the cloud, setting the stage for the app's upcoming release on Android and iOS platforms."
    },
    {
      id: 4,
      title: "Volvo Connect",
      description: "A comprehensive fleet management system for Volvo trucks, enabling real-time tracking, maintenance scheduling, and driver performance monitoring.",
      image: volvoConnect,
      tags: ["React", "NextJS", "Redux", "JavaScript", "CSS", "AWS", "Material-UI", "Jest", "Git", "Cypress", "Styled Components", "Rest", "GraphQL", "Node.js"],
      github: "",
      demo: "",
      period: "2022 - 2023",
      fullText: "Timocin contributed to the Customer Portal section of Volvo Connect, a platform where users were granted role-based access, ensuring a personalized experience with a dashboard that displayed only the most relevant services.\n\nThe application was designed as a marketplace, where each service was structured as a widget, allowing for flexible reuse with different configurations tailored to various customers. Timocin was responsible for developing and maintaining three key widgets: Messaging, Notifications Panel, and Settings.\n\nHis primary challenges involved implementing and refining new functionality, enhancing the customer experience, and providing continued support for existing users. Development took place within a microservice architecture, ensuring modular and scalable solutions.\n\nTo enable a more efficient CI/CD pipeline, tests were continuously updated after each change, ensuring faster and safer deployment. The application was hosted on AWS.\n\nAs a result, the project delivered a well-tested, secure, and user-friendly application that received positive feedback from customers, contributing to an increase in user adoption."
    },
    {
      id: 5,
      title: "Bilia Website Modernization",
      description: "An interactive car configuration platform for Bilia, allowing customers to customize and visualize their dream car with real-time pricing.",
      image: bilia,
      tags: ["Vue.js", "TypeScript", "JavaScript", "EPiServer", "GraphQL", "CSS"],
      github: "",
      demo: "https://www.bilia.se/",
      period: "2021 - 2022",
      fullText: "Bilia, one of the largest car dealership chains in the Nordics, undertook a major initiative to transition from a monolithic architecture to a more modular system, breaking down the application into smaller, individual components.\n\nThe system was built on a headless CMS (EPiServer), with Azure DevOps managing the CI/CD pipeline. Timocin played a key role in modernizing the legacy system, ensuring seamless integration with the new architecture.\n\nHis responsibilities included updating the majority of the website to align with the new UI library and enhancing system compatibility. Additionally, he utilized Vue's ShallowMount to develop comprehensive component tests, improving code reliability and maintainability.\n\nAs a result, the team successfully met a strict deadline, receiving highly positive feedback from both the Product Owner and the board. The project's modularization significantly streamlined future development, making the system more scalable and maintainable."
    },
    {
      id: 6,
      title: "Ellos E-commerce Platform",
      description: "A modern e-commerce platform for Ellos, featuring advanced search, personalized recommendations, and seamless checkout experience.",
      image: ellos,
      tags: ["Vue.js", "Node.js", "JavaScript", "Stylus", "Amplience", "GraphQL"],
      github: "",
      demo: "https://jotex.se/",
      period: "2019 - 2021",
      fullText: "Timocin was part of an internal Squeed team responsible for the development of Jotex, Homeroom, and Stayhard. His contributions included defining the architecture for the headless CMS within Amplience and conducting training sessions to onboard the business team onto the new platform.\n\nHe played a key role in ensuring that the visual development aligned with the client's expectations while expanding the functionality of the component library used across Ellos Group. Additionally, he prioritized short feedback loops, allowing components to be rapidly updated and deployed to production as specifications evolved.\n\nSince Ellos had not previously worked with agile development and sprint planning, the team introduced these methodologies, improving workflow efficiency. Jenkins was used for automated testing to ensure code quality.\n\nThrough this project, Timocin gained hands-on experience in agile methodologies, advanced Vue.js development, and professional customer interactions. The project was a resounding success, with all requirements met and overwhelmingly positive feedback from stakeholders.\n\nThe team's efforts empowered Ellos' content team to independently manage and display website components through Amplience, significantly reducing developer workload and increasing operational efficiency."
    },
    {
      id: 7,
      title: "Scope360 Analytics",
      description: "A business intelligence platform providing 360-degree insights into company performance with interactive dashboards and reports.",
      image: scope360,
      tags: ["Typescript", "Heroku", "MongoDB", "Vue", "REST API", "Auth0", "Lerna", "Sentry"],
      github: "",
      demo: "https://scope360-demo.com",
      period: "2018 - 2019",
      fullText: "Scope360 is a Chrome extension designed to visualize workflows in Jira. As part of this project, Timocin developed a web application responsible for client authentication, ensuring that only authorized users could edit and update configuration files within Scope360.\n\nTo enable seamless functionality, he modified and extended the existing REST API implementations, integrating them with the new authentication system.\n\nHis contributions enhanced both security and usability, resulting in a more user-friendly experience for customers."
    },
    {
      id: 8,
      title: "KFC - Figure8",
      description: "Timocin developed an iOS app for KFC's Figure-Eight system, using Bluetooth beacons to track staff performance in real time. The app sent data to a Python backend, generating reports that helped optimize kitchen operations and improve efficiency.",
      image: figure8,
      tags: ["Swift", "Cocoapods", "iBeacon", "Rest-API", "API Design", "Python"],
      github: "",
      demo: "",
      period: "2018 - 2019",
      fullText: "Kentucky Fried Chicken (KFC) initiated a project to optimize kitchen staff efficiency by improving their checkpoint system, known as the 'Figure-Eight.' This system consists of four stations that must be checked within a set time frame to be considered approved.\n\nTo enhance process visibility and efficiency, the client sought a digital solution to monitor and analyze performance in real time. Timocin designed and developed a solution where each station was equipped with a Bluetooth beacon.\n\nHe created an iOS application that logged timestamps and identified which device passed each station within the approved range. Completed Figure-Eight sessions were then transmitted to a Python-based backend, where data was structured and exported into Excel reports according to KFC's specifications.\n\nThe implementation provided real-time insights into staff performance, allowing KFC to identify stores or employees struggling to complete sessions on time. Additionally, the system laid the foundation for future data analysis, enabling the creation of performance graphs and trend analysis to further optimize operations."
    },
    {
      id: 9,
      title: "Bayyinah Mosque App",
      description: "Developed a mobile app to improve mosque-member communication with donations, questions, and event access. Focused on intuitive UX for elderly users.",
      image: "",
      tags: ["iOS", "Objective-C", "User Experience", "Communication"],
      github: "",
      demo: "",
      period: "2015-2016",
      fullText: "The Bayyinah Mosque App was developed to enhance communication between the mosque and its members, with a particular focus on elderly users who were less tech-savvy. The app featured several key functionalities:\n\n- Donation system with secure payment processing\n- Question and answer section for religious inquiries\n- Event calendar and registration system\n- Prayer time notifications\n- Community announcements\n\nNote: Due to the passage of time and organizational changes, I no longer have access to the original resources and images for this project. Additionally, the app has been removed from the App Store following the completion of its service period."
    },
    {
      id: 10,
      title: "Magic Scissors Booking App",
      description: "iOS application that solved double bookings and reduced admin work in a local hair salon with a seamless booking interface.",
      image: "",
      tags: ["iOS", "Objective-C", "Booking System", "Local Business"],
      github: "",
      demo: "",
      period: "2015-2015",
      fullText: "The Magic Scissors Booking App was developed to address the specific needs of a local hair salon struggling with double bookings and administrative overhead. The app featured:\n\n- Real-time booking system\n- Staff availability tracking\n- Customer history and preferences\n- Automated reminders\n- Service duration management\n\nNote: As this was an early project in my career, I no longer have access to the original resources and images. The app has been removed from the App Store as the salon has since closed its business."
    },
    {
      id: 11,
      title: "Livescore for Gothenburg Lower Leagues",
      description: "Live sports tracking app tailored for Gothenburg's lower league football. Featured real-time updates using web crawlers and user inputs.",
      image: "",
      tags: ["iOS", "Objective-C", "Sports", "Real-time Updates"],
      github: "",
      demo: "",
      period: "2015-2015",
      fullText: "Livescore is a real-time sports service that provides live updates on scores, goal scorers, match times, and red/yellow cards. For the first time in Gothenburg, a Livescore service of this scale was introduced specifically for lower division leagues.\n\nRecognizing the need for an improved and tailored solution, I developed my own Livescore system dedicated to lower division football leagues. The application utilized a web crawler to retrieve daily match information, ensuring up-to-date and accurate reporting.\n\nUsers could login and update match details, enhancing the platform's interactivity and engagement. The project was a resounding success, gaining significant traction among football players across Gothenburg.\n\nThe application received high praise on social media, with screenshots widely shared, and even gained recognition on a prominent local football blog. To develop this system, I expanded my technical expertise by learning Objective-C, further strengthening my skills in iOS development.\n\nNote: This being one of my earliest projects, I no longer have access to the original resources and images. The app has been removed from the App Store."
    }
];
