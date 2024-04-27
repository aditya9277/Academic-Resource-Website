import { IDBData, IData, ISidebar } from '../types'
import * as DB from 'database'
import { v4 as uuidv4 } from 'uuid'
export const database: IData[][] = Object.values(DB).map((item: IDBData[]) =>
  item.map((subcat: IDBData) => ({ ...subcat, id: uuidv4() }))
)

export const sidebarData: ISidebar[] = [
  // {
  //   category:'Phy1001',
  //   subcategory:[
  //     {
  //       name: 'PYQ', url:'/phy1001', resources:DB.phy1001
  //     }
  //   ],
  // },
  // {
  //   category: 'mat2001',
  //   subcategory: [
  //     {
  //       name: 'Previous Year Papers',
  //       url: '/3d-libraries',
  //       resources: DB._3dLibraries,
  //     },
  //     { name: 'Notes', url: '/notes1', resources: DB.notes1 },
  //     { name: 'Tutorials', url: '/fonts', resources: DB.fonts },
  //     { name: 'Tuto', url: '/tuto', resources: DB.tuto },
  //     { name: 'Assignments', url: '/colors', resources: DB.colors }

  //   ],
  // },
  {
    category: 'CSA2001: AI-ML',
    subcategory: [
      {
        name: 'Tutorials',
        url: '/architecture',
        resources: DB.architecture,
      },
      { name: 'Assignments', url: '/validation', resources: DB.validation },
      {
        name: 'Previous Year Papers',
        url: '/authentication',
        resources: DB.authentication,
      },
      {
        name: 'Youtube Links',
        url: '/email-providers',
        resources: DB.emailProviders,
      },
    ],
  },
  {
    category: 'MGT2003: TECH. ENTERPENEURSHIP',
    subcategory: [
      {
        name: 'Previous Year Papers',
        url: '/javascript',
        resources: DB.javascript,
      },
      { name: 'Assignments', url: '/python', resources: DB.python },
      { name: 'Tutorials', url: '/csharp', resources: DB.csharp },
      { name: 'Youtube Links', url: '/golang', resources: DB.golang },
    ],
  },
  {
    category: 'MAT2003: Applied Maths',
    subcategory: [
      {
        name: 'Previous Year Papers',
        url: '/articles',
        resources: DB.openSourceArticles,
      },
      {
        name: 'Assignemnts',
        url: '/os-programs',
        resources: DB.openSourcePrograms,
      },
      {
        name: 'Tutorials',
        url: '/projects',
        resources: DB.openSourceProjects,
      },
      {
        name: 'Youtube Links',
        url: '/tools',
        resources: DB.openSourceTools,
      },
      {
        name: 'Feedback',
        url: '/Contact',
        resources: DB.openSourceProjects,
      },
    ],
  },
  {
    category: 'CHY2001: EVS',
    subcategory: [
      { name: 'Previous Year Papers', url: '/cicd', resources: DB.cicd },
      {
        name: 'Youtube Links',
        url: '/devops-life-cycle',
        resources: DB.devopsLifecycle,
      },
      {
        name: 'Tutorials',
        url: '/devops-methodologies',
        resources: DB.devopsMethodologies,
      },
      { name: 'Assignments', url: '/docker', resources: DB.docker },
    ],
  },
  {
    category: 'CSE1021: Intro-to-programming',
    subcategory: [
      {
        name: 'Previous Year Papers',
        url: '/artificial-intelligence',
        resources: DB.artificialIntelligence,
      },
      {
        name: 'Youtube Links',
        url: '/machine-learning',
        resources: DB.machineLearning,
      },
      { name: 'Tutorials', url: '/data-science', resources: DB.dataScience },
      {
        name: 'Assignments',
        url: '/deep-learning',
        resources: DB.deepLearning,
      },
    ],
  },
  {
    category: 'MAT2001: Calculus-Laplace',
    subcategory: [
      {
        name: 'Assignments',
        url: '/offensive-security',
        resources: DB.offensive_security,
      },
      {
        name: 'Tutorials',
        url: '/defensive-security',
        resources: DB.defensive_security,
      },
      {
        name: 'Previous Year Papers',
        url: '/malware-analysis',
        resources: DB.malware_analysis,
      },
      {
        name: 'Youtube Links',
        url: '/web-security',
        resources: DB.web_security,
      },
    ],
  },

  {
    category: 'PHY1001: Engineering-Physics',
    subcategory: [
      { name: 'Tutorials', url: '/gcp', resources: DB.gcp },
      {
        name: 'Assignments',
        url: '/aws',
        resources: DB.aws,
      },
      { name: 'Previous Year Papers', url: '/azure', resources: DB.azure },
      { name: 'Youtube Links', url: '/oracle', resources: DB.oracle },
    ],
  },
  // {
  //   category: 'English',
  //   subcategory: [
  //     { name: 'coursera', url: '/coursera', resources: DB.coursera },
  //     { name: 'raspberrypi', url: '/raspberrypi', resources: DB.raspberrypi },
  //   ],
  // },
  {
    category: 'ENG1004: English',
    subcategory: [
      { name: 'Assignments', url: '/blogs', resources: DB.blogs },
      {
        name: 'Tutorials',
        url: '/officialdocs',
        resources: DB.officialdocs,
      },
      { name: 'Previous Year Papers', url: '/hosting', resources: DB.hosting },
      { name: 'Youtube Links', url: '/e-book', resources: DB.ebook },
    ],
  },
  // {
  //   category: 'youtube',
  //   subcategory: [
  //     {
  //       name: 'web development',
  //       url: '/web-development',
  //       resources: DB.webDevelopment,
  //     },
  //     { name: 'CSS', url: '/css', resources: DB.css },
  //     {
  //       name: 'kubernetes',
  //       url: '/kubernetes',
  //       resources: DB.Kubernetes,
  //     },
  //     {
  //       name: 'machine learning',
  //       url: '/machine-learning',
  //       resources: DB.machineLearning,
  //     },
  //     { name: 'tensorflow', url: '/tensorflow', resources: DB.tensorflow },
  //     { name: 'Android', url: '/android', resources: DB.android },
  //     {
  //       name: 'Web3 & Metaverse',
  //       url: '/web3-metaverse',
  //       resources: DB.web3metaverse,
  //     },
  //     {
  //       name: 'Software Testing',
  //       url: '/software-testing',
  //       resources: DB.softwareTesting,
  //     },
  //     {
  //       name: 'Computer Science',
  //       url: '/computer-science',
  //       resources: DB.computerScience,
  //     },
  //     { name: 'FinTech', url: '/fintech', resources: DB.fintech },
  //     {
  //       name: 'Game Development',
  //       url: '/game-development',
  //       resources: DB.gameDevelopment,
  //     },
  //   ],
  // },
  // {
  //   category: 'data-structures',
  //   subcategory: [
  //     { name: 'DSA Articles', url: '/dsa-articles', resources: DB.dsaArticles },
  //     {
  //       name: 'DSA Tutorials',
  //       url: '/dsa-tutorials',
  //       resources: DB.dsaTutorials,
  //     },
  //     { name: 'DSA Courses', url: '/dsa-courses', resources: DB.dsaCourses },
  //   ],
  // },
  // {
  //   category: 'competitive-programming',
  //   subcategory: [
  //     { name: 'Platforms', url: '/cp-platforms', resources: DB.cpPlatforms },
  //     { name: 'Tutorials', url: '/cp-tutorials', resources: DB.cpTutorials },
  //     { name: 'Helpers', url: '/cp-helpers', resources: DB.cpHelpers },
  //   ],
  // },
  // {
  //   category: 'Placement-Prep',
  //   subcategory: [
  //     {
  //       name: 'Interview Preparation',
  //       url: '/interview-preparation',
  //       resources: DB.interviewPreparation,
  //     },
  //     {
  //       name: 'Job Portals',
  //       url: '/job-portals',
  //       resources: DB.jobPortals,
  //     },
  //     {
  //       name: 'Resume Building',
  //       url: '/resume-building',
  //       resources: DB.resumeBuilding,
  //     },
  //     {
  //       name: 'Portfolio Building',
  //       url: '/portfolio-building',
  //       resources: DB.portfolioBuilding,
  //     },
  //     {
  //       name: 'Cover Letters',
  //       url: '/cover-letters',
  //       resources: DB.coverLetters,
  //     },
  //     {
  //       name: 'Certifications',
  //       url: '/certifications',
  //       resources: DB.certifications,
  //     },
  //   ],
  // },
  // {
  //   category: 'technical-writing',
  //   subcategory: [
  //     {
  //       name: 'Technical Writing Tools',
  //       url: '/technical-writing-tools',
  //       resources: DB.technicalWritingTools,
  //     },
  //   ],
  // },
  // {
  //   category: 'BlockChain',
  //   subcategory: [
  //     {
  //       name: 'Smart Contracts',
  //       url: '/smartcontracts',
  //       resources: DB.smartContracts,
  //     },
  //     {
  //       name: 'Truffle',
  //       url: '/truffle',
  //       resources: DB.truffle,
  //     },
  //     {
  //       name: 'Hardhat',
  //       url: '/hardhat',
  //       resources: DB.hardhat,
  //     },
  //     {
  //       name: 'Ethers',
  //       url: '/ethers',
  //       resources: DB.ethers,
  //     },
  //   ],
  // },
  // {
  //   category: 'other',
  //   subcategory: [
  //     { name: 'events', url: '/events', resources: DB.events },
  //     { name: 'Github', url: '/github', resources: DB.github },
  //     { name: 'Git', url: '/git', resources: DB.git },
  //     { name: 'Dev Tools', url: '/devtools', resources: DB.devtools },
  //     { name: 'Podcasts', url: '/podcasts', resources: DB.podcasts },
  //     {
  //       name: 'Other Resources',
  //       url: '/other-resources',
  //       resources: DB.otherResources,
  //     },
  //     { name: 'Communities', url: '/communities', resources: DB.communities },
  //     { name: 'Roadmaps', url: '/roadmaps', resources: DB.roadmaps },
  //     { name: 'Domains', url: '/domains', resources: DB.domains },
  //     {
  //       name: 'Text Formatting',
  //       url: '/text-formatting',
  //       resources: DB.textFormatting,
  //     },
  //   ],
  // },
]

export const subCategories = sidebarData.flatMap(({ category, subcategory }) =>
  subcategory.map(({ url }) => ({
    category,
    subcategory: url.replace('/', ''),
  }))
)
