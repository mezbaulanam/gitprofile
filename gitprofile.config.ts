// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mezbaulanam', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Mezbaul Anam',
    description: 'Mezbaul Anam Portfolio',
    imageURL: '',
  },
  social: {
    linkedin: 'mezbaulanam',
    twitter: '',
    mastodon: 'mezbaulanam@mastodon.social',
    researchGate: '',
    facebook: 'princedotexe',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'mezbaulanam',
    website: 'https://mezba.me',
    phone: '+8801796832563',
    email: 'mezbaulanam@outlook.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Node.js',
    'Discord.JS',
    'Express.JS',
    'Fastify.JS',
    'JSON',
    'MySQL',
    'MongoDB',
    'S3',
    'Git',
    'Docker',
    'HTML',
    'AWS',
    'Firebase',
    'Azure',
    'Linux',
    'BASH',

  ],
  experiences: [
    {
      company: 'Prime Service',
      position: 'Founder',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://primeservice.live',
    }
  ],
  certifications: [
    {
      name: 'NodeJS Basic',
      body: 'Node (Basic) Certificate of Accomplishment at HackerRank',
      year: 'August 2024',
      link: 'https://www.hackerrank.com/certificates/884fb83eef03',
    },
    {
      name: 'JavaScript Basic',
      body: 'JavaScript (Basic) Certificate of Accomplishment at HackerRank',
      year: 'August 2024',
      link: 'https://www.hackerrank.com/certificates/d58235c37259',
    },
    {
      name: 'Github Tutorial for Beginners',
      body: 'Github Tutorial for Beginners Certificate of Completion at Great Learning',
      year: 'October 2024',
      link: 'https://olympus.mygreatlearning.com/courses/53846/certificate',
    },
  ],
  educations: [
    {
      institution: 'Mohammad Ali & Foyzun Nessa Memorial High School, Dinajpur-5200',
      degree: 'Class 1',
      from: '2015',
      to: '2016',
    },
    {
      institution: 'Lions High School And College, Rangpur',
      degree: 'Class 2',
      from: '2017',
      to: '2018',
    },
    {
      institution: 'Salema Kindergarten, Rangpur',
      degree: 'Class 3-5',
      from: '2019',
      to: '2020',
    },
    {
      institution: 'Adarsha High School, College Road, Rangpur',
      degree: 'Class 6-8',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Mohammad Ali & Foyzun Nessa Memorial High School, Dinajpur-5200',
      degree: 'Class 9',
      from: '2024',
      to: 'Present',
    }
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'mezbaulanam', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `❤️ Thank you`,

  enablePWA: false,
};

export default CONFIG;
