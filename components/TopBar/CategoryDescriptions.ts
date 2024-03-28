type CategoryDescriptions = {
  [key: string]: string
}

const categoryDescriptions: CategoryDescriptions = {
  //frontend
  accessibility:
    'Accessibility is the concept of whether a product or service can be used by everyone—however they encounter it. Accessibility laws exist to aid people with disabilities, but designers should try to accommodate all potential users in many contexts of use anyway. ',
  animations:
    'Animation is the state of being full of life and energy, like a room full of excited kids at a birthday party. It is a method of photographing successive drawings, models, or even puppets, to create an illusion of movement in a sequence.',
  colors:
    'Colors mean the aspects of the appearance of objects and light sources that may be described in terms of hue, lightness, and saturation',
  'design-inspiration':
    'The right kind of inspiration will always help you come up with creative and unique ideas for your projects but sometimes you need some help getting inspired. Luckily, there are a TON of great resources for design inspiration.',
  'css-games':
    'CSS games are a fun way to learn and practice CSS. They are a great way to learn new CSS properties and techniques, and they can help you improve your skills in a fun and interactive way.',
  tuto: 'Hello this is the tuto',
  fonts:
    'A font is a graphical representation of text that may include a different typeface, point size, weight, color, or design. Fonts are text characters of different types and sizes. They help designers convey interface content intuitively and guide web or mobile app users to interact with the interface smoothly. The term “font” actually refers to a set of graphics that correspond to some or all of the Unicode glyphs',
  icons:
    'An icon is a symbol or graphic representation on a screen of a program, option, or window. Icons make it easier to recognize and locate items on your computer or features within a program and improve accessibilty and understandability.',
  illustrations:
    'Illustrations are visual representations of text, concepts, or ideas. They can be used to convey complex information in a simple and easy-to-understand way.',
  notes:
    'Images are the visual representations of objects or concepts. They can be used to convey information in a simple and easy-to-understand way.',
  'online-code-editor':
    'Online code editors are web-based tools that allow you to write and test code in your browser. They are useful for quickly testing out code snippets or for working on small projects.',
  react:
    'React is a JavaScript library for building user interfaces. It was developed by Facebook and is used by many popular websites such as Netflix, Airbnb, and Instagram. React allows developers to create reusable UI components and makes it easy to manage the state of an application.',
  'themes-templates':
    'Theme templates are pre-designed website themes that can be customized to fit your needs. They are useful for quickly setting up a website without having to design everything from scratch.',
  videos:
    'Videos are visual representations of moving images and sound. They can be used to convey information in a simple and easy-to-understand way.',
  '3d-libraries':
    '3D Libraries are collections of reusable components that can be used to create 3D graphics and animations. They are often used in conjunction with frameworks like Three.js to create web applications.',
  'next-js':
    'Next.js is a flexible React framework that gives you building blocks to create fast web applications.',
  'ui-generators':
    'The UI Generator, or User Interface Generator, is an Eclipse tool that takes a user model and generates a role-based user interface for a J2EE Web application.',
  'online-code-editors':
    "Online code editors, also called cloud-based code editors, are convenient because they usually require no setup. Plus, it's way easier to collaborate with someone over the cloud.",
  'ui-libraries':
    'UI libraries are collections of reusable components that can be used to build user interfaces. They are often used in conjunction with frameworks like React or Vue.js to create web applications.',
  'js-chart-libraries':
    'JavaScript chart libraries are used to create interactive and visually appealing charts and graphs for web applications. They are often used in data visualization and reporting applications.',
  angular:
    'Angular is a popular open-source web application framework similar to react developed and maintained by Google. ',
  //backend
  api: 'Interfaces that allow different software applications to communicate and share data with one another.',
  architecture: 'test',
  authentication: 'test',
  caching:
    'Caching is the process of storing frequently accessed data in a cache so that it can be quickly retrieved when needed. Caching can improve the performance of applications by reducing the amount of time it takes to retrieve data from a database or other data source.',
  database:
    'A database is an organized collection of data that can be easily accessed, managed, and updated. Databases are used to store and manage data for various applications such as websites, mobile apps, and enterprise systems.',
  'email-providers': 'test',
  security:
    'Security is the practice of protecting systems, networks, and data from unauthorized access, use, disclosure, disruption, modification, or destruction.',
  'system-design':
    'System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.',
  testing:
    'Testing is the process of evaluating a system or its component(s) with the intent to find whether it satisfies the specified requirements or not.',
  validation: 'test',

  //languages
  'c-programming':
    'C is a general-purpose programming language that was developed in the early 1970s by Dennis Ritchie at Bell Labs. C is widely used for developing system software, embedded systems, and application software.',
  cpp: "C++ is a versatile and powerful programming language that builds upon the features of C, offering object-oriented programming capabilities and support for low-level memory manipulation. It's widely used for developing system software, games, high-performance applications, and more.",
  dart: "Dart is a programming language primarily used for building web and mobile applications with a focus on client-side development. It's the language behind the Flutter framework, allowing developers to create cross-platform apps with a single codebase. Dart offers features like a Just-In-Time (JIT) compiler for development speed and an Ahead-Of-Time (AOT) compiler for production performance optimization.",
  kotlin:
    'Kotlin is a modern, statically-typed programming language that seamlessly interoperates with Java, making it a popular choice for Android app development. Known for its concise syntax and enhanced safety features, Kotlin offers nullable types and expressive constructs to streamline development processes.',
  java: 'Java is a widely-used, object-oriented programming language known for its "write once, run anywhere" philosophy, enabling developers to create platform-independent applications. It provides a robust standard library, automatic memory management through garbage collection, and a strong emphasis on safety and portability in various domains, from web development to enterprise applications.',
  rust: 'Rust is a systems programming language designed for safety and performance, featuring a strong focus on memory safety without sacrificing low-level control. Its ownership and borrowing system ensures prevention of common programming errors like null pointer dereferences, making it suitable for tasks ranging from system-level programming to building web services.',
  csharp: 'test',
  golang: 'test',
  javascript: 'test',
  python: 'test',
  typescript:
    ' TypeScript is a statically typed language that supports object-oriented and functional programming styles, used for developing web applications, mobile applications, and desktop applications.',
  solidity:
    'Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms, most notably, Ethereum.',
  swift:
    'Swift is a powerful and intuitive programming language developed by Apple. It is used to create apps for iOS, macOS, watchOS, and so on. Swift code is concise yet expressive (easier to understand and write).',

  // Open-source
  articles: 'test',
  projects: 'test',
  tools: 'test',
  tutorials:
    'Tutorials helps you to learn-by-watching. It contains the list most helping tutorials on open-source.',
  'os-programs': 'test',
  //devops
  cicd: 'test',
  'devops-life-cycle': 'test',
  'devops-methodologies': 'test',
  docker: 'test',
  jenkins:
    'As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.',
  kubernetes:
    'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.',
  microservices:
    'Microservices are a software development technique—a variant of the service-oriented architecture (SOA) architectural style that structures an application as a collection of loosely coupled services.',
  iac: 'Infrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes.',

  // AI
  'artificial-intelligence': 'test',
  'data-science': 'test',
  'deep-learning': 'test',
  'machine-learning': 'test',
  'natural-language-processing':
    'Natural Language Processing is a branch of artificial intelligence that focuses on the interaction between computers and human language. It involves the development of algorithms and models that enable machines to understand and generate human language, allowing them to perform tasks like language translation an more. ',

  // cyber-security
  'offensive-security': 'test',
  'defensive-security': 'test',
  'malware-analysis': 'test',
  'web-security': 'test',

  //resources
  blogs: '',
  'e-book': '',
  hosting: '',
  dsa: '',
  officialdocs: '',
  'project-ideas':
    'Projects play an important role in your resume. So here is a list of some great projects and their repositories.',

  //youtube
  android:
    'Android programming is the process of creating applications that run on the Android operating system. Android applications are written in Java or Kotlin programming languages .',
  'competitive-programming':
    'Competitive programming is a mental sport that involves writing source code of computer programs that are able to solve given problems.',
  'computer-science':
    'Computer science programming is the process of creating computer software using programming languages. Computer science programming is a subset of computer science that focuses on the development of software .',
  css: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts ',
  'data structures':
    'Data structures are a way of organizing and storing data in a computer so that it can be accessed and used efficiently .',
  fintech:
    'It is a catch-all term for technology used to augment, streamline, digitize or disrupt traditional financial services. Fintech refers to software, algorithms, and applications for both desktop and mobile.',
  'game-development':
    'Game development is the process of creating games for various platforms. It involves different stages and aspects, such as design, development, release, storyboarding, writing, audio, art, coding, music, animation, modelling, testing and marketing. ',
  'machine-learning-yt':
    'Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. ',
  tensorflow:
    'TensorFlow is a free and open-source software library for machine learning and artificial intelligence. It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks.',
  'software-testing':
    'Testing is executing a system in order to identify any gaps, errors, or missing requirements.For example, YouTube also uses A/ B testing to test different versions of their website to see which version performs better.',
  'web-development':
    'Web development is the process of building, programming, and maintaining websites and web applications. It involves various disciplines such as web design, coding, programming, database management, and web server administration.',
  'web3-metaverse':
    'Web3 is the next generation of the internet. It is a decentralized network that allows users to interact with each other without the need for intermediaries. ',

  //competitive programming
  'cp-helpers':
    'Coding libraries, templates, and community forums serve as valuable aids for competitive programmers, offering pre-written code snippets, discussions, and collaborative support to optimize problem-solving efficiency.',
  'cp-platforms':
    'Online platforms such as Codeforces, HackerRank, and LeetCode provide a virtual arena for programmers to engage in competitive programming challenges, honing their problem-solving skills.',
  'cp-tutorials':
    'Various online resources offer tutorials on algorithms, data structures, and problem-solving techniques, assisting aspiring competitive programmers in enhancing their coding proficiency and strategic thinking.',

  //other
  events:
    'An event is a gathering where professionals and enthusiasts explore, discuss, and showcase advancements in technology. It fosters learning, networking, and collaboration among individuals passionate about various technical fields.',
  communities:
    'Communities are groups of like-minded people who work on projects and help their peers to grow  and improve their skills.',
  devtools:
    'This list of Development tools will help you boost your programming speed and modify your projects to the next level.',
  github: 'Well, Github does not need description, devs know well!',
  git: 'Your friendly neighborhood version control system to track the development activities.',
  'other-resources':
    'Some extra resources to help you in your coding projects.',
  podcasts: 'Coding podcasts to listen to when you feel demotivated.',
  contributors:
    'These are the people that have helped LinksHub come to life! Thank you for your support! Note: M = Maintainer and C = Contributors',
  'text-formatting':
    'Your ultimate solution for all your text formatting needs!',
  roadmaps:
    'Roadmaps are strategic plans that outline key milestones, goals, and timelines. They serve as guides for project development, ensuring a systematic and organized approach to achieving objectives.',
  domains:
    'DNS is a crucial component of the internet infrastructure. It translates human-readable domain names into IP addresses, facilitating seamless communication between devices on the internet.',

  // Placement-Prep
  'interview-preparation':
    'Diverse resources for developers to enhance interview skills, including articles, videos, and mock interview platforms.',
  'job-portals':
    'Explore top job portals, their features, and expert tips for efficient job searching and connecting with employers.',
  'resume-building':
    'Providing resources to help developers create compelling resumes that showcase their skills and experience.',
  'portfolio-building':
    'Offer templates and examples to assist developers in building impressive portfolios that highlight their work and accomplishments.',
  'career-guidance':
    'Explore resources, articles, and guidance for career planning, goal setting, and professional growth in the tech industry.',
  certifications:
    'Curated list of globally recognized tech certifications, including requirements, benefits, and preparation strategies, emphasizing industry recognition and validity.',
  'cover-letters':
    "A cover letter is a formal document accompanying a resume, providing a personalized introduction to a potential employer. It highlights the applicant's qualifications, skills, and interest in the specific position.",

  //technical-writing
  'technical-writing-tools':
    'This list provides the tools to suit your tech writing needs.',

  //data-structures
  'dsa-articles':
    'This section provides various important articles related to DSA problem solving skills, how to tackle them, how to think about it and many more.',
  'dsa-courses':
    'This section provides various online courses that can help you start with the fundamentals of data structures and algorithms and also ace your coding interviews.',
  'dsa-tutorials':
    'This section provides you with YouTube tutorials that help you grasp concepts better by hands-on experience and learn better, practically!',
  //BlockChain
  smartcontracts:
    'Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on a blockchain network, which is a decentralized and distributed ledger technology. Smart contracts automatically execute and enforce the terms of a contract when predefined conditions are met',
  truffle:
    'Truffle is a popular development framework for Ethereum blockchain. It provides a development environment, testing framework, and asset pipeline for building decentralized applications (DApps) on the Ethereum platform.',
  hardhat:
    'Hardhat is another popular development framework for Ethereum smart contracts and decentralized applications (DApps). It provides a wide range of features and tools for Ethereum developers, making the development and testing of smart contracts easier and more efficient.',
  ethers:
    '"Ethers" generally refers to both the native cryptocurrency of the Ethereum network and a popular JavaScript library used for interacting with the Ethereum blockchain.',

  //cloud computing
  aws: 'test.',
  gcp: 'test',
  azure: 'test',
  oracle: 'test.',
  ibm: 'test',

  //internet of things
  coursera:
    'Coursera is an online learning platform that offers a wide range of courses, specializations, and degrees from top universities and organizations globally. It provides accessible and flexible education to individuals seeking to enhance their skills and knowledge.',
  raspberrypi:
    'Raspberry Pi is a series of low-cost, credit card-sized single-board computers developed to promote computer science education and DIY projects. With a vibrant community, Raspberry Pi empowers enthusiasts and learners to explore programming, electronics, and creative computing.',
}

export default categoryDescriptions
