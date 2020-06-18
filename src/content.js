const projects = [
  {
    title: 'Bespoke Design Studio',
    subtitle: 'Client project — Freelance',
    bgColor: '#1c1b1c',
    imgFile: 'bespoke.svg',
    imgWidth: '260px',
    imgFileBg: 'bespoke-bg.jpg',
    filterColor: 'rgba(28,27,28,0.85)',
    href: 'https://bespokedesignstudio.com',
    techList: [
      'Vue',
      'Gridsome',
      'Headless WordPress',
      'SCSS',
      'Netlify',
      'Responsive',
      'Accessible',
    ],
    description: 'Description of project. Description of project. Description of project. Description of project.'
  },
  {
    title: 'Signature Window Cleaning',
    subtitle: 'Client project — Freelance',
    bgColor: '#eee',
    imgFile: 'signature.png',
    imgWidth: '340px',
    imgFileBg: 'signature-bg.jpg',
    filterColor: 'rgba(255,255,255,0.75)',
    href: 'http://signaturewindowcleaning.net',
    techList: [
      'HTML',
      'SCSS',
      'JavaScript (ES6)',
      'WordPress',
      'Responsive',
      'Accessible'
    ],
    description: 'Description of project. Description of project. Description of project. Description of project.'
  },
  {
    title: 'Proximity',
    subtitle: 'Personal project',
    bgColor: '#ccc',
    imgFile: 'proximity.png',
    imgWidth: '350px',
    imgFileBg: 'proximity-bg.png',
    filterColor: 'rgba(255,255,255,0.93)',
    href: 'http://proximity.chrisstack.co',
    techList: [
      'Vue',
      'Vuex',
      'JavaScript (ES6+)',
      'SCSS'
    ],
    description: 'Description of project. Description of project. Description of project. Description of project.'
  },
  {
    title: 'Mastermind',
    subtitle: 'Personal project',
    bgColor: '#333',
    imgFile: 'mastermind.png',
    imgWidth: '250px',
    href: 'http://chrisstack.co/mastermind',
    techList: [
      'JavaScript (ES6)',
      'HTML / SCSS'
    ],
    description: 'Description of project. Description of project. Description of project. Description of project.'
  },
]

const experience = [
  {
    title: 'The Lacek Group',
    date: 'July 2018 – April 2020',
    lists: [
      {
        listItems: [
          'Owned the architecture and implementation of the front-end for multiple sites and web apps.',
          'Utilized Vue.js and Laravel Blade for creating repeatable templates and components to avoid duplication which increased production.',
        ]
      },
      {
        listHeading: 'Developed:',
        listItems: [
          'Components and added CSS for an event bidding web app that reached over one million visitors.',
          'Components for forms, tabs, carousels and other common UI features that more fully met semantic and accessibilty requirements than frameworks like Bootstrap.',
          'Interactive world map that displayed hotel locations based on category. Included filter by category and clustering nearby locations to avoid display clutter.',
          'Site where dev team could easily upload individual email campaign data to display for client. Made optimizations over the life of the project including adding image lazy loading once multiple hundreds of email campaigns were live.',
          'Video player with autoplay toggle.',
          'Interactive calendar to select a range of dates to book a hotel stay.',
        ]
      }
    ]
  },
  {
    title: 'Personal',
    date: 'September 2014 – Current',
    lists: [
      {
        listItems: [
          'Designed, developed, and currently hosting several web applications for businesses and personal side projects.',
          'Build sites with a focus on responsive design and semantic markup for SEO and web accessibility. For one client, this helped lead to a traffic increase from 20 to 150 users per month over an eight month period, which led to increased business.',
          'Developed an application that displays the time, current weather, and upcoming weather. Used React for the view layer. Used the Geolocation API to get user’s location coordinates based off IP address. Used Fetch API to retrieve weather data from the RESTful OpenWeatherMap API.',
          'Developed two web games based on board games. Currently adding two player functionality for one of them using web sockets.',
        ]
      }
    ]
  },
  {
    title: 'Cazarin Interactive',
    date: 'September 2016 – November 2017',
    lists: [
      {
        listItems: [
          'Created 12 complete, responsive websites including eCommerce, booking, and static sites. Collaborated on over 10 other sites adding features or pages.',
          'Used PHP and JavaScript for editing plugin and template files and interacting with the DOM. Used MySQL for importing, exporting, and querying databases.',
          'Used Bootstrap for quickly creating features and streamlining responsive design.',
        ]
      },
    ]
  }
]

export {
  projects,
  experience,
}